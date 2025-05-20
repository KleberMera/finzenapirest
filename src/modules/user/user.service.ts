/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { UserDTO2, UserResponseDTO } from 'src/models/user.interface';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

const saltOrRounds = 10;

/** Hashes a password using bcrypt with a specified salt. */
const encrypt = async (password: string, salt = saltOrRounds) => {
  return await bcrypt.hash(password, salt);
};

/** Compares a plain password with a hashed password. */
const compare = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Crea un nuevo usuario
   * @param user - Datos del usuario a crear
   * @returns El usuario creado
   */
  async createUser(user: UserDTO2) {
    try {
      // Verificar si el email ya existe
      const existingUser = await this.prismaService.user.findUnique({
        where: { email: user.email }
      });

      if (existingUser) {
        throw new BadRequestException('El email ya está registrado');
      }

      // Crear el usuario
      const createdUser = await this.prismaService.user.create({
        data: {
          ...user,
          password: await encrypt(user.password),
          status: user.status,
          phone: user.phone || '',
          firebaseUid: user.firebaseUid || '',
        }
      });

      // No devolver la contraseña en la respuesta
      return {
        message: 'Usuario creado con éxito',
        data: createdUser 
      };
    } catch (error) {
      throw new BadRequestException('Error al crear el usuario');
    }
  }

  /**
   * Elimina un usuario por su ID
   * @param id - ID del usuario a eliminar
   * @returns El usuario eliminado
   */
  async deleteUser(id: number, status?: boolean) {
    try {
      // Verificar si el usuario existe
      const existingUser = await this.prismaService.user.findUnique({
        where: { id }
      });

      if (!existingUser) {
        throw new NotFoundException('Usuario no encontrado');
      }

      // Determinar el nuevo estado
      // Si se proporciona un estado específico, usar ese valor
      // Si no, invertir el estado actual
      const newStatus = status === true ? false : true;

      // Actualizar el estado del usuario
      const updatedUser = await this.prismaService.user.update({
        where: { id },
        data: {
          status: newStatus
        }
      });

      return {
        message: `Usuario ${updatedUser.status ? 'activado' : 'desactivado'} con éxito`,
        data: updatedUser 
      };
    } catch (error) {
      throw new BadRequestException('Error al cambiar el estado del usuario');
    }
  }

  /**
   * Elimina permanentemente un usuario y todos sus datos relacionados
   * @param id - ID del usuario a eliminar permanentemente
   * @returns El usuario eliminado
   */
  async permanentDeleteUser(id: number) {
    try {
      // Verificar si el usuario existe
      const existingUser = await this.prismaService.user.findUnique({
        where: { id }
      });
  
      if (!existingUser) {
        throw new NotFoundException('Usuario no encontrado');
      }
  
      // Eliminar todos los datos relacionados con el usuario en orden para evitar errores de integridad referencial
      
      // 1. Eliminar notificaciones
      await this.prismaService.notification.deleteMany({
        where: { user_id: id }
      });
  
      // 2. Eliminar dispositivos y preferencias de notificación
      // Primero obtener todos los dispositivos del usuario
      const devices = await this.prismaService.device.findMany({
        where: { user_id: id }
      });
      
      // Eliminar preferencias de notificación para cada dispositivo
      for (const device of devices) {
        await this.prismaService.notificationPreference.deleteMany({
          where: { device_id: device.id }
        });
      }
      
      // Eliminar dispositivos
      await this.prismaService.device.deleteMany({
        where: { user_id: id }
      });
  
      // 3. Eliminar códigos de verificación
      await this.prismaService.verificationCode.deleteMany({
        where: { userId: id }
      });
  
      // 4. Eliminar historial de salarios
      await this.prismaService.salaryHistory.deleteMany({
        where: { user_id: id }
      });
  
      // 5. Eliminar planes estratégicos
      await this.prismaService.strategyPlan.deleteMany({
        where: { userId: id }
      });
  
      // 6. Eliminar metas y sus seguimientos
      const metas = await this.prismaService.meta.findMany({
        where: { user_id: id }
      });
      
      for (const meta of metas) {
        await this.prismaService.metaTracking.deleteMany({
          where: { meta_id: meta.id }
        });
      }
      
      await this.prismaService.meta.deleteMany({
        where: { user_id: id }
      });
  
      // 7. Eliminar deudas y amortizaciones
      const deudas = await this.prismaService.debt.findMany({
        where: { user_id: id }
      });
      
      for (const deuda of deudas) {
        await this.prismaService.amortization.deleteMany({
          where: { debt_id: deuda.id }
        });
      }
      
      await this.prismaService.debt.deleteMany({
        where: { user_id: id }
      });
  
      // 8. Eliminar categorías y transacciones
      const categorias = await this.prismaService.category.findMany({
        where: { user_id: id }
      });
      
      for (const categoria of categorias) {
        const transacciones = await this.prismaService.transaction.findMany({
          where: { category_id: categoria.id }
        });
        
        // Eliminar configuraciones de transacciones recurrentes
        for (const transaccion of transacciones) {
          if (transaccion.isRecurring) {
            await this.prismaService.recurringTransaction.deleteMany({
              where: { transactionId: transaccion.id }
            });
          }
        }
        
        // Eliminar transacciones
        await this.prismaService.transaction.deleteMany({
          where: { category_id: categoria.id }
        });
      }
      
      // Eliminar categorías
      await this.prismaService.category.deleteMany({
        where: { user_id: id }
      });
  
      // 9. Finalmente, eliminar el usuario
      const deletedUser = await this.prismaService.user.delete({
        where: { id }
      });
  
      return {
        message: 'Usuario eliminado permanentemente con éxito',
        data: deletedUser 
      };
    } catch (error) {
      console.error('Error al eliminar permanentemente el usuario:', error);
      throw new BadRequestException('Error al eliminar permanentemente el usuario');
    }
  }

  /**
   * Actualiza un usuario existente
   * @param id - ID del usuario a actualizar
   * @param user - Datos a actualizar
   * @returns El usuario actualizado
   */
  async updateUser(id: number, user: Partial<UserDTO2>) {
    try {
      // Verificar si el usuario existe
      const existingUser = await this.prismaService.user.findUnique({
        where: { id }
      });

      if (!existingUser) {
        throw new NotFoundException('Usuario no encontrado');
      }

      // Si se está actualizando el email, verificar que no exista
      if (user.email) {
        const existingEmail = await this.prismaService.user.findUnique({
          where: { email: user.email }
        });

        if (existingEmail && existingEmail.id !== id) {
          throw new BadRequestException('El email ya está registrado');
        }
      }

      // Si se está actualizando la contraseña, encriptarla
      const userData = {
        ...user,
        ...(user.password && { password: await encrypt(user.password) })
      };

      const updatedUser = await this.prismaService.user.update({
        where: { id },
        data: {
          ...userData,
          updatedAt: new Date()
        }
      });

      // No devolver la contraseña en la respuesta
      return {
        message: 'Usuario actualizado con éxito',
        data: updatedUser
      };
    } catch (error) {
      throw new BadRequestException('Error al actualizar el usuario');
    }
  }


  //Lista de todos los usuarios
  async getAllUsers() {
    try {
      const users = await this.prismaService.user.findMany();
      return {
        message: 'Lista de usuarios obtenida con éxito',
        data: users
      };
    } catch (error) {
      throw new BadRequestException('Error al obtener la lista de usuarios');
    }
  }



}

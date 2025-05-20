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
  async deleteUser(id: number) {
    try {
      const user = await this.prismaService.user.delete({
        where: { id }
      });

      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }

      // No devolver la contraseña en la respuesta
      return {
        message: 'Usuario eliminado con éxito',
        data: user 
      };
    } catch (error) {
      throw new BadRequestException('Error al eliminar el usuario');
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

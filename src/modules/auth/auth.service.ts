/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserDTO, UserDTO2 } from 'src/models/user.interface';
import { PrismaService } from 'src/config/prisma/prisma.service'

const saltOrRounds = 10;

/** Hashes a password using bcrypt with a specified salt. */
const encrypt = async (password: string, salt = saltOrRounds) => {
  return await bcrypt.hash(password, salt);
};

/** Compares a plain password with a hashed password. */
const compare = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
import { customAlphabet } from 'nanoid';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private readonly nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);

  /**
   * Authenticates a user and returns a JWT token.
   * @param user - User data with email and password.
   * @returns Authentication response with user data and token.
   */
async login(user: UserDTO) {
  console.log('Attempting login with email:', user.email);
  try {
    const userData = await this.prismaService.user.findUnique({
      where: { email: user.email },
    });

    console.log('User data retrieved:', userData ? userData.id : 'Not found');

    if (!userData) {
      throw new BadRequestException('Usuario o contraseña invalidos');
    }

    // Validar que el status del usuario esté en true
    if (!userData.status) {
      throw new BadRequestException('Usuario inactivo o suspendido');
    }

    console.log('Stored password:', userData.password); // Log para verificar la contraseña almacenada
    console.log('Provided password:', user.password); // Log para verificar la contraseña proporcionada

    // Validar que userData.password sea una cadena válida
    if (!userData.password || typeof userData.password !== 'string') {
      console.error('Invalid stored password format:', userData.password);
      throw new BadRequestException('Usuario o contraseña invalidos');
    }

    const isPasswordMatch = await compare(user.password, userData.password);
    console.log('Password match result:', isPasswordMatch);

    if (!isPasswordMatch) {
      throw new BadRequestException('Usuario o contraseña invalidos');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = userData;
    const payload = userWithoutPassword;
    const access_token = await this.jwtService.signAsync(payload);

    return {
      message: 'Usuario autenticado con éxito',
      data: userWithoutPassword,
      access_token,
    };
  } catch (error) {
    console.error('Error during login:', error); // Log del error completo
    if (error instanceof BadRequestException) {
      throw error;
    }

    if (error.message.includes('Illegal arguments')) {
      throw new BadRequestException('Usuario o contraseña invalidos');
    }
    throw new InternalServerErrorException(`Error al autenticar el usuario: ${error.message}`);
  }
}

  /**
   * Registers a new user after checking for duplicates.
   * @param user - User data for registration.
   * @returns Newly created user data without password.
   */
  async signUp(user: UserDTO2) {
    try {
      // Check for existing email
      const existingEmail = await this.prismaService.user.findUnique({
        where: { email: user.email },
      });

      if (existingEmail) {
        throw new BadRequestException('El correo electrónico ya está registrado');
      }

      // Check for existing username and generate a new one if needed
      let finalUsername = user.username;
      let counter = 1;
      
      while (true) {
        const existingUsername = await this.prismaService.user.findUnique({
          where: { username: finalUsername },
        });

        if (!existingUsername) break;
        
        finalUsername = `${user.username}${counter}${this.nanoid()}`;
        counter++;
      }

      const hashedPassword = await encrypt(user.password);
      const newUser = await this.prismaService.user.create({
        data: {
          ...user,
          username: finalUsername,
          password: hashedPassword,
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = newUser;
      return {
        message: 'Usuario creado con éxito',
        data: userWithoutPassword,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new Error(`Error al registrar el usuario: ${error.message}`);
    }
  }

  /**
   * Retrieves a user by their ID.
   * @param id - The user’s ID.
   * @returns User data without password.
   */
  /**
   * Verifica si la contraseña proporcionada coincide con la contraseña actual del usuario
   * @param userId - ID del usuario
   * @param currentPassword - Contraseña actual a verificar
   * @returns Promesa que resuelve a true si la contraseña es correcta, false en caso contrario
   * @throws NotFoundException si el usuario no existe
   */
  async verifyCurrentPassword(userId: number, currentPassword: string): Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { password: true }
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
    }

    // Si el usuario no tiene contraseña (por ejemplo, se registró con Google)
    if (!user.password) {
      return false;
    }

    // Comparar la contraseña proporcionada con el hash almacenado
    return await compare(currentPassword, user.password);
  }

  /**
   * Obtiene un usuario por su ID sin la contraseña
   * @param id - ID del usuario
   * @returns Datos del usuario sin la contraseña
   */
  async getUserById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return {
      message: 'Usuario obtenido con éxito',
      data: userWithoutPassword,
    };
  }


  //Actualizar info del usuario por id pero de manera parcial
  async updateUserById(id: number, user: UserDTO) {
    try {
      const updatedUser = await this.prismaService.user.update({
        where: { id },
        data: user,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = updatedUser;
      return {
        message: 'Perfil actualizado correctamente',
        data: userWithoutPassword,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
  }


  //Retornar solo el rol_id el name del rol del usuario
  async getUserRoleById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: {
        rol_id: true,
      }
    });

    console.log(user);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return {
      message: 'Rol obtenido con éxito',
      data: user,
    };
  }



    /**
     * Restablece la contraseña de un usuario
     * @param userId - ID del usuario
     * @param newPassword - Nueva contraseña
     * @returns Mensaje de éxito
     */
    async resetPassword(userId: number, newPassword: string) {
      try {
        // Verificar que el usuario existe
        const user = await this.prismaService.user.findUnique({
          where: { id: userId },
        });

        if (!user) {
          throw new NotFoundException('Usuario no encontrado');
        }

        // Hashear la nueva contraseña
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        
        // Actualizar la contraseña del usuario
        await this.prismaService.user.update({
          where: { id: userId },
          data: { password: hashedPassword },
        });

        return { 
          success: true,
          message: 'Contraseña actualizada exitosamente' 
        };
      } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        throw new InternalServerErrorException('Error al actualizar la contraseña');
      }
    }
  
 
}
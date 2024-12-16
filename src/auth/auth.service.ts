import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export interface UserDTO {
  rol_id: number;
  name: string;
  last_name: string;
  username: string;
  user: string;
  email: string;
  password: string;
  phone: string;
  status: boolean;
}

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  // Obtener todos los usuarios
  async getUser() {
    const users = await this.prismaService.user.findMany();
    return {
      message: 'Usuarios obtenidos con éxito',
      data: users,
    };
  }

  // Obtener un usuario por ID
  async getUserById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return {
      message: 'Usuario obtenido con éxito',
      data: user,
    };
  }

  async signUp(user: UserDTO) {
    try {
      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { user: user.user },
            { username: user.username },
            { email: user.email },
          ],
        },
      });

      if (existingUser) throw new BadRequestException('El usuario ya existe');

      const newUser = await this.prismaService.user.create({
        data: {
          ...user,
        },
      });

      return {
        message: 'Usuario creado con éxito',
        data: newUser,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new Error(`Error al registrar el usuario: ${error.message}`);
    }
  }
}

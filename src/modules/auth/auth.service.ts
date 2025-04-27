import {
  BadRequestException,
  Injectable,
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

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

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
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new Error(`Error al autenticar el usuario: ${error.message}`);
    }
  }

  /**
   * Registers a new user after checking for duplicates.
   * @param user - User data for registration.
   * @returns Newly created user data without password.
   */
  async signUp(user: UserDTO2) {
    try {
      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { username: user.username },
            { email: user.email },
          ],
        },
      });

      if (existingUser) {
        throw new BadRequestException('El usuario ya existe');
      }

      const hashedPassword = await encrypt(user.password);
      const newUser = await this.prismaService.user.create({
        data: {
          ...user,
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
}
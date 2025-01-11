import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as firebaseAdmin from 'firebase-admin';
import { PrismaService } from 'src/prisma/prisma.service';
// Interfaz para el login con Google
interface GoogleUserDTO {
  token: string;
}
@Injectable()
export class FirebaseService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  // Nuevos métodos para Google Auth
  async loginWithGoogle(googleData: GoogleUserDTO) {
    try {
      const decodedToken = await firebaseAdmin
        .auth()
        .verifyIdToken(googleData.token);

      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { email: decodedToken.email },
            { firebaseUid: decodedToken.uid },
          ],
        },
      });

      if (existingUser) {
        // Usuario existe - actualizar firebaseUid si es necesario
        const updatedUser = await this.prismaService.user.update({
          where: { id: existingUser.id },
          data: {
            firebaseUid: decodedToken.uid,
          },
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, createdAt, updatedAt, ...userWithoutPassword } =
          updatedUser;
        const payload = {
          ...{ userWithoutPassword, createdAt, updatedAt },
        };

        const access_token = await this.jwtService.signAsync(payload);

        return {
          message: 'Usuario autenticado con éxito via Google',
          data: userWithoutPassword,
          access_token: access_token,
        };
      }

      // Usuario no existe - crear nuevo
      return this.signUpWithGoogle(decodedToken);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new UnauthorizedException('Token de Google inválido');
    }
  }

  private async signUpWithGoogle(
    decodedToken: firebaseAdmin.auth.DecodedIdToken,
  ) {
    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: decodedToken.email,
          user: decodedToken.email.split('@')[0], // Crear un user basado en el email
          username: decodedToken.name || decodedToken.email.split('@')[0],
          firebaseUid: decodedToken.uid,
          rol_id: 2,

          // Campos opcionales que podrías querer agregar
          //password: null, // No necesario para usuarios de Google
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, createdAt, updatedAt, ...userWithoutPassword } =
        newUser;
      const payload = {
        ...{ userWithoutPassword, createdAt, updatedAt },
      };

      const access_token = await this.jwtService.signAsync(payload);

      return {
        message: 'Usuario registrado con éxito via Google',
        data: userWithoutPassword,
        access_token: access_token,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new Error(
        `Error al registrar el usuario con Google: ${error.message}`,
      );
    }
  }
}

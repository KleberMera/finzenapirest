import { BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as firebaseAdmin from 'firebase-admin';
import { PrismaService } from 'src/prisma/prisma.service';

export interface FirebaseDecodedToken {
  name: string;
  picture: string;
  iss: string;
  aud: string;
  auth_time: number;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
  firebase: {
    identities: {
      'google.com': string[];
      email: string[];
    };
    sign_in_provider: string;
  };
  uid: string;
}


@Injectable()
export class FirebaseService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async loginWithGoogle(idToken: string) {
    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken) as FirebaseDecodedToken;
      
      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { email: decodedToken.email },
            { firebaseUid: decodedToken.uid }
          ]
        },
      });

      if (!existingUser) {
        console.log(decodedToken.uid)
        await firebaseAdmin.auth().deleteUser(decodedToken.uid);
        throw new BadRequestException('Usuario no encontrado. Por favor, regístrese primero.');
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, createdAt, updatedAt, ...userWithoutPassword } = existingUser;
      const payload = { userWithoutPassword, createdAt, updatedAt };

      const access_token = await this.jwtService.signAsync(payload);

      return {
        message: 'Usuario autenticado con éxito via Google',
        data: userWithoutPassword,
        access_token: access_token,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      
      console.error('Error in loginWithGoogle:', error);
      throw new UnauthorizedException('Error al autenticar con Google');
    }
  }

  async signUpWithGoogle(idToken: string) {
    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken) as FirebaseDecodedToken;

      // Verificar si el usuario ya existe
      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { email: decodedToken.email },
            { firebaseUid: decodedToken.uid }
          ]
        },
      });

      if (existingUser) {
        throw new BadRequestException('El usuario ya existe. Por favor, inicie sesión.');
      }

      const username = decodedToken.name || decodedToken.email.split('@')[0];
      
      const newUser = await this.prismaService.user.create({
        data: {
          email: decodedToken.email,
          user: decodedToken.email.split('@')[0],
          username: username,
          name: decodedToken.name || null,
          firebaseUid: decodedToken.uid,
          avatar : decodedToken.picture || null,
          rol_id: 2, // Rol por defecto
          status: true
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, createdAt, updatedAt, ...userWithoutPassword } = newUser;
      const payload = { userWithoutPassword, createdAt, updatedAt };

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
      console.error('Error in signUpWithGoogle:', error);
      throw new Error(`Error al registrar el usuario con Google: ${error.message}`);
    }
  }
  
}

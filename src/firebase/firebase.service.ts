/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as firebaseAdmin from 'firebase-admin';
import { PrismaService } from 'src/prisma/prisma.service';

import * as crypto from 'crypto'; // Para generar códigos aleatorios
import * as bcrypt from 'bcryptjs'; // Para hashear contraseñas
import { transporterMail } from 'src/libs/mail';
import { htmlContent } from 'src/libs/content';
import { log } from 'console';

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
import { customAlphabet } from 'nanoid';

@Injectable()
export class FirebaseService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private readonly nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);

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
      // 1) Verificar y decodificar el token de Firebase
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken) as FirebaseDecodedToken;

      // 2) Verificar si el usuario ya existe por email o UID de Firebase
      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { email: decodedToken.email },
            { firebaseUid: decodedToken.uid },
          ],
        },
      });
      if (existingUser) {
        throw new BadRequestException('El usuario ya existe. Por favor, inicie sesión.');
      }

      // 3) Calcular nombre base de usuario
      const baseUsername = decodedToken.name
        ? decodedToken.name.trim().toLowerCase().replace(/\s+/g, '.')
        : decodedToken.email.split('@')[0];

      // 4) Asegurar unicidad del username
      let username = baseUsername;
      let collision = true;
      while (collision) {
        const userWithSameUsername = await this.prismaService.user.findUnique({
          where: { username },
        });
        if (userWithSameUsername) {
          // Añadir sufijo aleatorio
          username = `${baseUsername}.${this.nanoid()}`;
        } else {
          collision = false;
        }
      }

      // 5) Separar nombre y apellido (si hay)
      const fullName = decodedToken.name || '';
      const [firstName, ...rest] = fullName.trim().split(/\s+/);
      const lastName = rest.length > 0 ? rest.join(' ') : null;

      // 6) Crear el usuario en la base de datos
      const newUser = await this.prismaService.user.create({
        data: {
          email: decodedToken.email,
          username,
          name: firstName || null,
          last_name: lastName,
          firebaseUid: decodedToken.uid,
          avatar: decodedToken.picture || null,
          rol_id: 2, // Rol por defecto
          status: true,
        },
      });

      // 7) Quitar campos sensibles y generar JWT
      const { password, createdAt, updatedAt, ...userWithoutPassword } = newUser;
      const payload = { user: userWithoutPassword, createdAt, updatedAt };
      const access_token = await this.jwtService.signAsync(payload);

      return {
        message: 'Usuario registrado con éxito vía Google',
        data: userWithoutPassword,
        access_token,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
     // this.logger.error('Error in signUpWithGoogle:', error);
      throw new Error(`Error al registrar el usuario con Google: ${error.message}`);
    }
  }


  async requestPasswordReset(email: string) {
    // Buscar al usuario por email
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    // Generar un código aleatorio (ej. 6 caracteres)
    const verificationCode = crypto.randomBytes(3).toString('hex').toUpperCase(); // Ej. "X7K9P2"
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // Expira en 15 minutos

    // Guardar el código en la base de datos
    await this.prismaService.verificationCode.create({
      data: {
        code: verificationCode,
        userId: user.id,
        expiresAt,
      },
    });


    // Enviar el correo con el código
    const mailOptions = {
      //from: 'klebermera2016@gmail.com',
      to: email,
      subject: 'Restablecimiento de contraseña',
      html: htmlContent(user.name, verificationCode),
      //text: `Tu código de verificación es: ${verificationCode}. Este código expira en 15 minutos.`,
    };

    log('mailOptions', mailOptions);

    await transporterMail.sendMail(mailOptions);

    return { message: 'Código de verificación enviado a tu correo' };
  }

  // Restablecer contraseña
  async resetPassword(code: string, newPassword: string) {
    // Buscar el código en la base de datos
    const verification = await this.prismaService.verificationCode.findUnique({
      where: { code },
      include: { user: true },
    });

    if (!verification || verification.isUsed || new Date() > verification.expiresAt) {
      throw new BadRequestException('Código inválido o expirado');
    }

    // Actualizar la contraseña del usuario con hash
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.prismaService.user.update({
      where: { id: verification.userId },
      data: { password: hashedPassword },
    });

    // Marcar el código como usado
    await this.prismaService.verificationCode.update({
      where: { id: verification.id },
      data: { isUsed: true },
    });


    return { message: 'Contraseña restablecida con éxito' };
  }


  async verifyCode(code: string): Promise<{ message: string; isValid: boolean }> {
    try {
      // Buscar el código en la base de datos
      const verification = await this.prismaService.verificationCode.findUnique({
        where: { code },
      });

      // Si no se encuentra el código, no es válido
      if (!verification) {
        throw new BadRequestException('Código no encontrado');
      }

      // Verificar si el código ha expirado
      if (new Date() > verification.expiresAt) {
        throw new BadRequestException('El código ha expirado');
      }

      // Verificar si el código ya ha sido usado
      if (verification.isUsed) {
        throw new BadRequestException('El código ya ha sido utilizado');
      }

      // Si pasa todas las verificaciones, retornar mensaje de éxito
      return {
        message: 'Código verificado correctamente',
        isValid: true
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Error al verificar el código:', error);
      throw new Error('Error interno al verificar el código');
    }
  }

  
}

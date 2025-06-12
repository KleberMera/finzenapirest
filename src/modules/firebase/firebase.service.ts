/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as firebaseAdmin from 'firebase-admin';
import { PrismaService } from 'src/config/prisma/prisma.service';

import * as crypto from 'crypto'; // Para generar códigos aleatorios
import * as bcrypt from 'bcryptjs'; // Para hashear contraseñas
import { transporterMail } from 'src/providers/mail/mail';
import { htmlContent } from 'src/providers/mail/content';
import { log } from 'console';
import { customAlphabet } from 'nanoid';
import { FirebaseDecodedToken } from 'src/models/recurrent/firebase.types';

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
      
      // Buscar usuario por UID de Firebase o por email
      const existingUser = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { firebaseUid: decodedToken.uid },
            { email: decodedToken.email }
          ]
        },
      });

      // Si no existe el usuario
      if (!existingUser) {
        await firebaseAdmin.auth().deleteUser(decodedToken.uid);
        throw new BadRequestException('Usuario no encontrado. Por favor, regístrese primero.');
      }

      // Si el usuario existe pero no tiene firebaseUid, lo actualizamos
      if (existingUser.email === decodedToken.email && !existingUser.firebaseUid) {
        await this.prismaService.user.update({
          where: { id: existingUser.id },
          data: { firebaseUid: decodedToken.uid }
        });
      }

      // Validar que el status del usuario esté en true
      if (!existingUser.status) {
        throw new BadRequestException('Usuario inactivo o suspendido');
      }

      const { password, createdAt, updatedAt, ...userWithoutPassword } = existingUser;
      const payload = { userWithoutPassword, createdAt, updatedAt };

      const access_token = await this.jwtService.signAsync(payload);

      return {
        message: 'Usuario autenticado con éxito',
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


  /**
   * Vincula una cuenta existente con Google
   * @param userId ID del usuario existente
   * @param idToken Token de Google
   */
  async linkWithGoogle(userId: number, idToken: string) {
    try {
      // Verificar el token de Google
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken) as FirebaseDecodedToken;
      
      // Verificar si el UID de Google ya está en uso
      const existingUserWithSameUid = await this.prismaService.user.findFirst({
        where: { firebaseUid: decodedToken.uid }
      });

      if (existingUserWithSameUid) {
        throw new BadRequestException('Esta cuenta de Google ya está vinculada a otro usuario');
      }

      // Obtener el usuario existente
      const existingUser = await this.prismaService.user.findUnique({
        where: { id: userId }
      });

      if (!existingUser) {
        throw new BadRequestException('Usuario no encontrado');
      }

      // Verificar si el correo coincide
      if (existingUser.email !== decodedToken.email) {
        throw new BadRequestException('El correo de la cuenta no coincide con el de Google');
      }

      // Actualizar el usuario con el UID de Firebase
      const updatedUser = await this.prismaService.user.update({
        where: { id: userId },
        data: { firebaseUid: decodedToken.uid },
        select: {
          id: true,
          email: true,
          username: true,
          name: true,
          last_name: true,
          avatar: true,
          status: true,
          rol_id: true,
          firebaseUid: true,
          createdAt: true,
          updatedAt: true
        }
      });

      // Generar nuevo token JWT
      const payload = { 
        ...updatedUser,
        createdAt: updatedUser.createdAt.toISOString(),
        updatedAt: updatedUser.updatedAt.toISOString()
      };
      
      const access_token = await this.jwtService.signAsync(payload);

      return {
        message: 'Cuenta vinculada con Google exitosamente',
        data: updatedUser,
        access_token
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Error al vincular con Google:', error);
      throw new BadRequestException('Error al vincular la cuenta con Google');
    }
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

import { BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as firebaseAdmin from 'firebase-admin';
import { PrismaService } from 'src/prisma/prisma.service';
import * as nodemailer from 'nodemailer'; // Ejemplo con Nodemailer
import * as crypto from 'crypto'; // Para generar códigos aleatorios
import * as bcrypt from 'bcryptjs'; // Para hashear contraseñas

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


  // Configuración de Nodemailer (puedes usar otro servicio)
  private transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: 'klebermera2016@gmail.com',
      pass: 'wqox hxnw gkhr mjsm',
    },
  });


  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for port 465, false for other ports
  //   auth: {
  //     user: "maddison53@ethereal.email",
  //     pass: "jn7jnAPss4f63QBp6D",
  //   },
  // });
  // Solicitar código de verificación
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
      from: 'klebermera2016@gmail.com',
      to: email,
      subject: 'Restablecimiento de contraseña',
      text: `Tu código de verificación es: ${verificationCode}. Este código expira en 15 minutos.`,
    };

    await this.transporter.sendMail(mailOptions);

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

    // Opcional: Invalidar tokens anteriores (si usas JWT)
    // Podrías generar un nuevo access_token aquí si lo deseas

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

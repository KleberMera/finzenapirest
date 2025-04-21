import { Injectable, NotFoundException } from '@nestjs/common';
//import { log } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeviceService {
  constructor(private prisma: PrismaService) {}

  async countDevices(userId: number): Promise<number> {
    return this.prisma.device.count({
      where: { user_id: userId },
    });
  }

  async createDevice(
    userId: number,
    deviceData: {
      os?: string;
      browser?: string;
      isMobile?: boolean;
      userAgent?: string;
      brand?: string;
      model?: string;
      status?: string;
    },
  ) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const device = await this.prisma.device.create({
      data: {
        user_id: userId,
        ...deviceData,
      },
    });

    return {
      status: true,
      message: 'Dispositivo creado',
      data: device,
    };
  }

  async verifyDevice(userId: number, deviceId: number): Promise<boolean> {
    const device = await this.prisma.device.findFirst({
      where: {
        id: deviceId,
        user_id: userId,
      },
    });
    return !!device;
  }

  async deleteDevice(userId: number, deviceId: number): Promise<void> {
    const device = await this.prisma.device.findFirst({
      where: {
        id: deviceId,
        user_id: userId,
      },
    });
    if (!device) {
      throw new NotFoundException(
        'Dispositivo no encontrado o no pertenece al usuario',
      );
    }

    await this.prisma.device.delete({
      where: { id: deviceId },
    });
  }

  async getDevices(userId: number) {
    const devices = await this.prisma.device.findMany({
      where: { user_id: userId },
    });
    return {
      status: true,
      message: 'Dispositivos encontrados',
      data: devices,
    };
  }
  
  async hasNotificationPermissions(deviceId: number, userId: number): Promise<boolean> {
    // Paso 1: Verificar si el dispositivo existe y pertenece al usuario
    const device = await this.prisma.device.findFirst({
      where: {
        id: deviceId,
        user_id: userId,
      },
    });
  
    if (!device) {
      throw new Error('El dispositivo no existe o no pertenece al usuario');
    }
  
    // Paso 2: Verificar si hay una preferencia de notificación con pushEnabled en true
    const preference = await this.prisma.notificationPreference.findFirst({
      where: {
        device_id: deviceId,
        pushEnabled: true,
      },
    });
  
    // Si existe una preferencia con pushEnabled en true, retorna true; si no, false
    return !!preference;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,

} from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get('count/:userId')
  async countDevices(@Param() { userId }: { userId: number }) {
    return this.deviceService.countDevices(userId);
  }

  @Post('create/:userId')
  async createDevice(
    @Param('userId', ParseIntPipe) userId: number,
    @Body()
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
    return this.deviceService.createDevice(userId, deviceData);
  }

  @Get('verify/:userId/:deviceId')
  async verifyDevice(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('deviceId', ParseIntPipe) deviceId: number,
  ): Promise<boolean> {
    return this.deviceService.verifyDevice(userId, deviceId);
  }
  @Delete('delete/:userId/:deviceId')
  async deleteDevice(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('deviceId', ParseIntPipe) deviceId: number,
  ): Promise<void> {
    await this.deviceService.deleteDevice(userId, deviceId);
  }

  @Get('user/:userId')
  async getDevicesByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.deviceService.getDevices(userId);
  }

  @Get('has-notifications/:deviceId/:userId')
  async hasNotifications(
    @Param('deviceId', ParseIntPipe) deviceId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<{ hasNotifications: boolean }> {
    const hasNotifications = await this.deviceService.hasNotifications(
      deviceId,
      userId,
    );
    return { hasNotifications };
  }
}

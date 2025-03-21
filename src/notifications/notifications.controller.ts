import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private prisma: PrismaService,
  ) {}

  @Post('subscribe')
  async subscribe(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Body() data: { userId: number; subscription: any, deviceId: number }
  ) {
    return this.notificationsService.saveSubscription(
      data.userId,
      data.subscription,
      data.deviceId
    );
  }

  // @Post('test')
  // async test(@Body() { userId }: { userId: number }) {
  //   return this.notificationsService.sendTestNotification(userId);
  // }

  @Post('notify/:userId')
  async notifyUser(
    @Param() { userId }: { userId: number },
    @Body() notification: { title: string; body: string }
  ) {
    return this.notificationsService.notifyUser((Number(userId)), notification);
  }

  @Get('user/:userId')
  async getNotifications(@Param() { userId }: { userId: number }) {
    return this.notificationsService.getNotificationsByUserId(Number(userId));
  }

  @Delete('unsubscribe/:userId')
  async unsubscribe(@Param() { userId, deviceId }: { userId: number; deviceId: number }) {
    return this.notificationsService.unsubscribe(Number(userId), Number(deviceId));
  }

  @Get('has-subscription/:userId')
  async hasSubscription(@Param() { userId }: { userId: number }) {
    return this.notificationsService.hasSubscription(Number(userId));
  }


  @Get('count-subscriptions/:userId')
  async countSubscriptions(@Param() { userId }: { userId: number }) {
    return this.notificationsService.countSubscriptions(Number(userId));
  }
}

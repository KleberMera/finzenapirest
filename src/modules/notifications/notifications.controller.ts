import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { Public } from 'src/guards/token.guard';


@Public()
@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private prisma: PrismaService,
  ) {}

  @Post('subscribe/:userId/:deviceId')
  async subscribe(
 
    @Param() { userId, deviceId }: { userId: number; deviceId: number },

     
    @Body() data: {  subscription: any }
  ) {
    return this.notificationsService.saveSubscription(
      (Number(userId)),
      (Number(deviceId)), // Correcto: segundo parámetro es deviceId
      data.subscription // Tercer parámetro es subscription
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

  @Get('filter/:userId')
  async filterNotifications(
    @Param() { userId }: { userId: number },
    @Query('debtId') debtId?: string,
    @Query('isRead') isRead?: string,
    @Query('includeAllDebts') includeAllDebts?: string
  ) {
    // Convert query parameters to appropriate types
    const options = {
      debtId: debtId ? Number(debtId) : undefined,
      isRead: isRead ? isRead === 'true' : undefined,
      includeAllDebts: includeAllDebts ? includeAllDebts === 'true' : false
    };

    return this.notificationsService.filterNotifications(
      Number(userId),
      options
    );
  }

  
  @Delete('unsubscribe/:userId/:deviceId')
  async unsubscribe(@Param() { userId, deviceId }: { userId: number; deviceId: number },) {
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

  @Put('update-days-before-notify-all/:userId')
  async updateDaysBeforeNotifyAll(@Param() { userId }: { userId: number }, @Body() { daysBeforeNotify }: { daysBeforeNotify: number }) {
    return this.notificationsService.updateDaysBeforeNotifyAll(Number(daysBeforeNotify), Number(userId));
  }

  @Get('days-before-notify-all/:userId')
  async getDaysBeforeNotifyAll(@Param() { userId }: { userId: number }) {
    return this.notificationsService.getDaysBeforeNotifyAll(Number(userId));
  }

  @Put('mark-as-read/:notificationId/user/:userId')
  async markNotificationAsRead(
    @Param('notificationId') notificationId: string,
    @Param('userId') userId: string
  ) {
    return this.notificationsService.markAsRead(
      Number(notificationId),
      Number(userId)
    );
  }
}

import { Body, Controller, Post, Request } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService, private prisma: PrismaService) {}

  @Post('subscribe')
  async subscribe(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Body() subscription: any,
    @Request() req
  ) {
    return this.notificationsService.saveSubscription(req.user.id, subscription);
  }

  @Post('test')
  async test(@Request() req) {
    // Para pruebas
    const user = await this.prisma.user.findUnique({
      where: { id: req.user.id },
      include: { notificationPreferences: true }
    });

    if (user?.notificationPreferences?.subscription) {
      return this.notificationsService.sendNotification(
        JSON.parse(user.notificationPreferences.subscription),
        {
          title: 'Prueba de Notificación',
          body: '¡Si ves esto, las notificaciones están funcionando!'
        }
      );
    }
  }


}

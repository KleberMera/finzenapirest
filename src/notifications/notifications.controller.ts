import { Body, Controller, Post, Request } from '@nestjs/common';
import { NotificationsService } from './notifications.service';


@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('token')
  async saveToken(
    @Body() { token }: { token: string }, 
    @Request() req
  ) {
    return this.notificationsService.saveToken(req.user.id, token);
  }

  @Post('preferences')
  async updatePreferences(
    @Body() preferences: {
      pushEnabled: boolean;
      daysBeforeNotify: number;
    },
    @Request() req
  ) {
    return this.notificationsService.updatePreferences(req.user.id, preferences);
  }

  @Post('test')
  async testNotification(@Request() req) {
    return this.notificationsService.sendNotification(req.user.id, {
      title: 'Prueba de Notificación',
      body: 'Si ves esto, las notificaciones están funcionando correctamente!'
    });
  }


}

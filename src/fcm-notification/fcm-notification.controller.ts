import { Body, Controller, Post } from '@nestjs/common';
import { FcmNotificationService } from './fcm-notification.service';

@Controller('fcm-notification')
export class FcmNotificationController {
  constructor(
    private readonly fcmNotificationService: FcmNotificationService,
  ) {}

  @Post('send-notification')
  async sendNotification(@Body() body: { message: string; token: string }) {
    const { message, token } = body;
    return await this.fcmNotificationService.sendNotification(message, token);
  }
}

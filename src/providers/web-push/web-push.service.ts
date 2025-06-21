import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import * as webpush from 'web-push';

@Injectable()
export class WebPushService {
  constructor(private prisma: PrismaService) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    webpush.setVapidDetails(
      'mailto:klebermera2024@gmail.com', // tu correo
      'BB9RG9no5eZuqpw0mqNNTRdo1gzSQJAhVKsI2X8SDuUHnHAKcO8co6UWPkZwykP7OINeSSV3IiN_hjVj_kwhaLM',
      '4CIL0JhqmwowpCkk0NNlyi7-dx9bACuJEAfDlJcZo5c',
    );
  }



   async sendNotification(subscription: any, notification: { title: string; body: string }) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      await webpush.sendNotification(
        subscription,
        JSON.stringify({
          notification: {
            title: notification.title,
            body: notification.body,
            
            icon: 'https://fin-zen.vercel.app/favicon.png',
          }
        })
      );
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }



  async saveNotificationToDatabase(
    userId: number, 
    notification: { title: string; body: string },
    debtId?: number,
    recurringTransactionId?: number
  ) {

          const t = new Date()
      const datenew =format({
        date: t,
        format: "YYYY-MM-DD",
        tz: "America/Guayaquil",
      })
      const timenew = format({
        date: t,
        format: "hh:mm:ss",
        tz: "America/Guayaquil",
      })
    await this.prisma.notification.create({
      data: {
        user_id: userId,
        title: notification.title,
        message: notification.body,
        isRead: false,
        debt_id: debtId,
        recurringTransactionId: recurringTransactionId,
        date: datenew,
        time: timenew,
      },
    });
  }
}

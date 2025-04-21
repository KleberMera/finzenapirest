import { Injectable } from '@nestjs/common';
import * as firebaseAdmin from 'firebase-admin';
@Injectable()
export class FcmNotificationService {
  private messaging: firebaseAdmin.messaging.Messaging;
  constructor() {
   // this.messaging = firebaseAdmin.messaging();
  }

  async sendNotification(message: string, token: string) {
    const payload = {
      notification: {
        title: 'Notificación',
        body: message,
        icon: 'https://fin-zen.vercel.app/favicon.png',
      },
      token,
    };

    try {
      const notificationSend = await this.messaging.send(payload);
      console.log('Notification sent: ', notificationSend);
      return notificationSend;
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}

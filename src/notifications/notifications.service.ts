import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as admin from 'firebase-admin';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationsService {
    constructor(private prisma: PrismaService) {}

    async updatePreferences(userId: number, preferences: {
      pushEnabled: boolean;
      daysBeforeNotify: number;
    }) {
      return this.prisma.notificationPreference.update({
        where: { user_id: userId },
        data: preferences
      });
    }
  
    async saveToken(userId: number, token: string) {
      return this.prisma.notificationPreference.upsert({
        where: { user_id: userId },
        update: {
          deviceTokens: {
            push: token
          }
        },
        create: {
          user_id: userId,
          pushEnabled: true,
          deviceTokens: [token]
        }
      });
    }
  
    @Cron('0 0 * * *') // Cada día a medianoche
    async checkUpcomingPayments() {
      const today = new Date();
      const users = await this.prisma.user.findMany({
        where: {
          notificationPreferences: {
            pushEnabled: true
          }
        },
        include: {
          debts: {
            include: {
              amortizations: true
            }
          },
          notificationPreferences: true
        }
      });
  
      for (const user of users) {
        const daysBeforeNotify = user.notificationPreferences.daysBeforeNotify;
        
        for (const debt of user.debts) {
          for (const amortization of debt.amortizations) {
            const paymentDate = new Date(amortization.date);
            const daysUntilPayment = Math.floor(
              (paymentDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
            );
  
            if (daysUntilPayment === daysBeforeNotify && amortization.status === 'Pendiente') {
              for (const token of user.notificationPreferences.deviceTokens) {
                await this.sendNotification(token, {
                  title: 'Recordatorio de Pago',
                  body: `Tienes un pago pendiente de ${amortization.quota} para la deuda "${debt.name}" en ${daysBeforeNotify} días.`,
                  data: {
                    debtId: debt.id.toString(),
                    amortizationId: amortization.id.toString()
                  }
                });
              }
            }
          }
        }
      }
    }
  
     async sendNotification(token: string, notification: {
      title: string;
      body: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data?: any;
    }) {
      try {
        await admin.messaging().send({
          token,
          notification: {
            title: notification.title,
            body: notification.body
          },
          data: notification.data
        });
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    }
  }
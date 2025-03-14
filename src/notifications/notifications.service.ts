import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as webpush from 'web-push';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private prisma: PrismaService) {
    webpush.setVapidDetails(
      'mailto:klebermera2024@gmail.com', // tu correo
      'BB9RG9no5eZuqpw0mqNNTRdo1gzSQJAhVKsI2X8SDuUHnHAKcO8co6UWPkZwykP7OINeSSV3IiN_hjVj_kwhaLM',
      '4CIL0JhqmwowpCkk0NNlyi7-dx9bACuJEAfDlJcZo5c'
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async saveSubscription(userId: number, subscription: any) {
    return this.prisma.notificationPreference.upsert({
      where: { user_id: userId },
      update: {
        subscription: JSON.stringify(subscription),
        pushEnabled: true
      },
      create: {
        user_id: userId,
        subscription: JSON.stringify(subscription),
        pushEnabled: true,
        daysBeforeNotify: 2
      }
    });
  }

  async sendTestNotification(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { notificationPreferences: true }
    });

    if (user?.notificationPreferences?.subscription) {
      return this.sendNotification(
        JSON.parse(user.notificationPreferences.subscription),
        {
          title: 'Prueba de Notificación',
          body: '¡Si ves esto, las notificaciones están funcionando!'
        }
      );
    }
  }

  @Cron('0 0 * * *')
  async checkUpcomingPayments() {
    const today = new Date();
    const users = await this.prisma.user.findMany({
      where: {
        notificationPreferences: {
          pushEnabled: true,
          subscription: { not: null }
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
            await this.sendNotification(
              JSON.parse(user.notificationPreferences.subscription),
              {
                title: 'Recordatorio de Pago',
                body: `Tienes un pago pendiente de ${amortization.quota} para la deuda "${debt.name}" en ${daysBeforeNotify} días.`
              }
            );
          }
        }
      }
    }
  }

  // @Cron('0 */2 * * * *') // Ejecutar cada 2 minutos (en el segundo 0)
  // async notifyOverduePayments() {
  //   const today = new Date();

  //   // Consulta usuarios con notificaciones push habilitadas y suscripción válida
  //   const users = await this.prisma.user.findMany({
  //     where: {
  //       notificationPreferences: {
  //         pushEnabled: true,
  //         subscription: { not: null }
  //       },
  //       debts: {
  //         some: {
  //           amortizations: {
  //             some: {
  //               status: 'Pendiente',
  //               date: {
  //                 lt: today.toISOString() // Solo cuotas con fecha anterior a hoy
  //               }
  //             }
  //           }
  //         }
  //       }
  //     },
  //     include: {
  //       debts: {
  //         include: {
  //           amortizations: {
  //             where: {
  //               status: 'Pendiente',
  //               date: {
  //                 lt: today.toISOString() // Filtrar cuotas atrasadas
  //               }
  //             }
  //           }
  //         }
  //       },
  //       notificationPreferences: true
  //     }
  //   });

  //   // Iterar sobre los usuarios y enviar notificaciones
  //   for (const user of users) {
  //     for (const debt of user.debts) {
  //       for (const amortization of debt.amortizations) {
  //         const paymentDate = new Date(amortization.date);
  //         const daysOverdue = Math.floor(
  //           (today.getTime() - paymentDate.getTime()) / (1000 * 60 * 60 * 24)
  //         );

  //         // Enviar notificación si la cuota está atrasada
  //         await this.sendNotification(
  //           JSON.parse(user.notificationPreferences.subscription),
  //           {
  //             title: 'Cuota Atrasada',
  //             body: `Tienes una cuota atrasada de ${amortization.quota} para la deuda "${debt.name}". Está atrasada por ${daysOverdue} días.`
  //           }
  //         );
  //       }
  //     }
  //   }
  // }


  // @Cron(CronExpression.EVERY_30_SECONDS)
  // handleCron() {
  //   this.logger.debug('Called every 30 seconds');
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async sendNotification(subscription: any, notification: { title: string; body: string }) {
    try {
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
  }
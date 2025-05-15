import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { WebPushService } from 'src/providers/web-push/web-push.service';



@Injectable()
export class NotificationsService {
 // private readonly logger = new Logger(NotificationsService.name);

  constructor(private prisma: PrismaService, private webPushService: WebPushService) {}


 
async saveSubscription(userId: number, deviceId: number, subscription: any) {
  // Verificar si el dispositivo pertenece al usuario
  const device = await this.prisma.device.findFirst({
    where: { id: deviceId, user_id: userId },
  });
  if (!device) {
    throw new Error('Dispositivo no encontrado o no pertenece al usuario.');
  }

  // Contar las suscripciones activas del usuario
  const currentSubscriptions = await this.prisma.notificationPreference.count({
    where: { device: {
      user_id: userId
    }, pushEnabled: true },
  });

  // Si ya tiene 2 suscripciones activas, lanzar un error
  if (currentSubscriptions >= 2) {
    throw new Error('El usuario ya tiene el máximo de dos suscripciones permitidas.');
  }

  // Convertir la suscripción a string
  const subscriptionString = JSON.stringify(subscription);

  // Verificar si esta suscripción ya existe para este dispositivo
  const existingPreference = await this.prisma.notificationPreference.findFirst({
    where: {
      device_id: deviceId,
      subscription: subscriptionString,
    },
  });

  let notificationContent;

  if (existingPreference) {
    // Si existe pero estaba desactivada, reactivarla
    if (!existingPreference.pushEnabled) {
      await this.prisma.notificationPreference.update({
        where: { id: existingPreference.id },
        data: { pushEnabled: true },
      });

      // Determinar si es la primera o segunda suscripción activa
      const updatedSubscriptions = await this.prisma.notificationPreference.count({
        where: { device: {
          user_id: userId,
        }, pushEnabled: true },
      });

      if (updatedSubscriptions === 1) {
        notificationContent = {
          title: 'Notificaciones Activadas',
          body: 'A partir de ahora recibirás notificaciones en este dispositivo.',
        };
      } else if (updatedSubscriptions === 2) {
        notificationContent = {
          title: 'Segunda Suscripción Activada',
          body: '¡Recibirás notificaciones en este segundo dispositivo!',
        };
      }

      // Enviar y guardar la notificación
      if (notificationContent) {
        await this.webPushService.sendNotification(subscription, notificationContent);
        await this.webPushService.saveNotificationToDatabase(userId, notificationContent);
      }
    }
    return existingPreference;
  }

  // Crear una nueva suscripción para este dispositivo
  const newPreference = await this.prisma.notificationPreference.create({
    data: {
      device_id: deviceId,
      subscription: subscriptionString,
      pushEnabled: true,
    },
  });

  // Contar las suscripciones activas después de crear la nueva
  // const updatedSubscriptions = await this.prisma.notificationPreference.count({
  //   where: { user_id: userId, pushEnabled: true },
  // });

  const updatedSubscriptions = await this.prisma.notificationPreference.count({
    where: {
      device: {
        user_id: userId,
      },
      pushEnabled: true,
    },
  });

  // Determinar el mensaje de notificación
  if (updatedSubscriptions === 1) {
    notificationContent = {
      title: 'Notificaciones Activadas',
      body: 'A partir de ahora recibirás notificaciones en este dispositivo.',
    };
  } else if (updatedSubscriptions === 2) {
    notificationContent = {
      title: 'Segunda Suscripción Activada',
      body: '¡Recibirás notificaciones en este segundo dispositivo!',
    };
  }

  // Enviar y guardar la notificación
  if (notificationContent) {
    await this.webPushService.sendNotification(subscription, notificationContent);
    await this.webPushService.saveNotificationToDatabase(userId, notificationContent);
      
    }

  return newPreference;
}


async countSubscriptions(userId: number) {
  const subscriptions = await this.prisma.notificationPreference.count({
    where: {
      device: {
        user_id: userId,
      },
    },
  });

  return { subscriptions: subscriptions };
}


   


  async getNotificationsByUserId(userId: number) {
    const notifications = await this.prisma.notification.findMany({
      where: { user_id: userId },
      orderBy: { createdAt: 'desc' },
    });
    return {
       message: 'Notificaciones recibidas',
       data: notifications
      
    };
  }

  async unsubscribe(userId: number, deviceId: number) {
    // Verificar si el dispositivo pertenece al usuario
    const device = await this.prisma.device.findFirst({
      where: { id: deviceId, user_id: userId },
    });
    if (!device) {
      throw new Error('Dispositivo no encontrado o no pertenece al usuario.');
    }
  
    // Eliminar las suscripciones y notificaciones asociadas al dispositivo
    const [deletedPreferences, deletedNotifications] = await this.prisma.$transaction([
      this.prisma.notificationPreference.deleteMany({
        where: {
          device_id: deviceId,
        },
      }),
      this.prisma.notification.deleteMany({
        where: {
          user_id: userId,
        },
      }),
    ]);
  
    // Verificar si se eliminó algo
    if (deletedPreferences.count === 0 && deletedNotifications.count === 0) {
      return { message: 'No se encontraron suscripciones ni notificaciones para eliminar en este dispositivo' };
    }
  
    return { message: 'Suscripciones y notificaciones eliminadas con éxito para este dispositivo' };
  }


  async hasSubscription(userId: number) {
    const count = await this.prisma.notificationPreference.count({
      where: {
        device: {
          user_id: userId,
        },
        pushEnabled: true,
      },
    });

    return { hasSubscription: count > 0 };
  }

  private async sendNotificationToUser(userId: number, notification: { title: string; body: string }) {
    // Buscar todas las suscripciones activas del usuario
    const preferences = await this.prisma.notificationPreference.findMany({
      where: {
        device: {
          user_id: userId,
        },
        pushEnabled: true,
      },
    });
  
    // Enviar la notificación a cada suscripción
    for (const pref of preferences) {
      try {
        const subscription = JSON.parse(pref.subscription);


        await this.webPushService.sendNotification(subscription, notification);
      } catch (error) {
        console.error(`Error enviando notificación a la suscripción ${pref.id}:`, error);
      }
    }
  }



  async notifyUser(userId: number, notification: { title: string; body: string }) {
    try {
      // Guardar la notificación en la base de datos
      await this.webPushService.saveNotificationToDatabase(userId, notification);
  
      // Enviar la notificación push
      await this.sendNotificationToUser(userId, notification);
  
      return { message: 'Notificación enviada y guardada con éxito' };
    } catch (error) {
      console.error('Error al notificar al usuario:', error);
      throw new Error('No se pudo enviar ni guardar la notificación');
    }
  }


  // @Cron('0 0 * * *')
  // async checkUpcomingPayments() {
  //   const today = new Date();
  //   const users = await this.prisma.user.findMany({
  //     where: {
  //       notificationPreferences: {
  //         pushEnabled: true,
  //         subscription: { not: null }
  //       }
  //     },
  //     include: {
  //       debts: {
  //         include: {
  //           amortizations: true
  //         }
  //       },
  //       notificationPreferences: true
  //     }
  //   });

  //   for (const user of users) {
  //     const daysBeforeNotify = user.notificationPreferences.daysBeforeNotify;
      
  //     for (const debt of user.debts) {
  //       for (const amortization of debt.amortizations) {
  //         const paymentDate = new Date(amortization.date);
  //         const daysUntilPayment = Math.floor(
  //           (paymentDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  //         );

  //         if (daysUntilPayment === daysBeforeNotify && amortization.status === 'Pendiente') {
  //           await this.sendNotification(
  //             JSON.parse(user.notificationPreferences.subscription),
  //             {
  //               title: 'Recordatorio de Pago',
  //               body: `Tienes un pago pendiente de ${amortization.quota} para la deuda "${debt.name}" en ${daysBeforeNotify} días.`
  //             }
  //           );
  //         }
  //       }
  //     }
  //   }
  // }

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

  
  }
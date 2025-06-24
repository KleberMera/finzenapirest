import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { Prisma } from 'generated/prisma';
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

async getNotificationsFiltered(
    userId: number,
    readStatus?: 'all' | 'read' | 'unread',
    type?: 'all' | 'debt' | 'transaction',
  ) {
    const where: Prisma.NotificationWhereInput = {
      user_id: userId,
    };

    if (readStatus === 'read') {
      where.isRead = true;
    } else if (readStatus === 'unread') {
      where.isRead = false;
    }

    if (type === 'debt') {
      where.debt_id = { not: null };
    } else if (type === 'transaction') {
      where.recurringTransactionId = { not: null };
    }

    log('where', where);

    return this.prisma.notification.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        debt: {
          select: {
            id: true,
            name: true,
          },
        },
        recurringTransaction: {
          select: {
            id: true,
            transaction: {
              select: {
                id: true,
                name: true,
                description: true,
              },
            }
            
          },
        },
      },
    });
  }

  async markAsRead(notificationId: number, userId: number) {
    // Verificar que la notificación pertenece al usuario
    const notification = await this.prisma.notification.findFirst({
      where: { 
        id: notificationId,
        user_id: userId 
      },
    });

    if (!notification) {
      throw new Error('Notificación no encontrada o no pertenece al usuario.');
    }

    // Actualizar la notificación como leída
    const updatedNotification = await this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
      include: {
        debt: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return {
      message: 'Notificación marcada como leída',
      data: updatedNotification
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



  

  
  //Actualizar daysBeforeNotify  de las preferencias de notificaciones de todos
  // Los dispositivos que tengan pushEnabled = true
  async updateDaysBeforeNotifyAll(daysBeforeNotify: number, userId: number) {
    const updatedPreferences = await this.prisma.notificationPreference.updateMany({
      where: {
        pushEnabled: true,
        device: {
          user_id: userId,
        },
      },
      data: {
        daysBeforeNotify: daysBeforeNotify,
      },
    });
    let message = 'Recibiras notificaciones con ' + daysBeforeNotify + ' dias de anticipacion';
    // Si el daysBeforeNotify es 0 el mensaje cambia a No recibir notificaciones
    if (daysBeforeNotify === 0) {
      message = 'No recibiras notificaciones anticipadas';
    }
    return {
      message: message,
      data: updatedPreferences,
    };
  } 


  //Ver daysBeforeNotify de todos los dispositivos de un usuario
  async getDaysBeforeNotifyAll(userId: number) {
    const preferences = await this.prisma.notificationPreference.findMany({
      where: {
        device: {
          user_id: userId,
        },
        pushEnabled: true,
        
      },
      select: {
        daysBeforeNotify: true,
      }
    });
    return {
      message: 'DaysBeforeNotify de todos los dispositivos',
      data: preferences,
    };
  }


   //Borrar notificaciones por id y userId
  async deleteNotificationById(notificationId: number, userId: number) {
    const notification = await this.prisma.notification.findFirst({
      where: {
        id: notificationId,
        user_id: userId,
      },
    });

    if (!notification) {
      throw new Error('Notificación no encontrada o no pertenece al usuario.');
    }

    await this.prisma.notification.delete({
      where: { id: notificationId },
    });

    return {
      message: 'Notificación eliminada con éxito',
      data: notification,
    };
  }

}
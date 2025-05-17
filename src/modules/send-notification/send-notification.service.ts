import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { WebPushService } from 'src/providers/web-push/web-push.service';
import { addDays, format, parseISO } from 'date-fns';

@Injectable()
export class SendNotificationService {
  private readonly logger = new Logger(SendNotificationService.name);

  constructor(
    private prisma: PrismaService,
    private webPushService: WebPushService,
  ) {}

  /**
   * Cron job que se ejecuta cada 2 minutos para verificar notificaciones pendientes
   */
  @Cron('*/2 * * * *')
  async checkPendingNotifications() {
    this.logger.log('Verificando notificaciones pendientes de amortizaciones de deudas...');
    
    const today = new Date();
    const formattedToday = format(today, 'yyyy-MM-dd');
    this.logger.log(`Fecha actual: ${formattedToday}`);

    try {
      // 1. Obtener todas las preferencias de notificación activas
      const activePreferences = await this.prisma.notificationPreference.findMany({
        where: {
          pushEnabled: true,
          daysBeforeNotify: { not: null }
        },
        include: {
          device: {
            include: {
              user: true
            }
          }
        }
      });

      if (activePreferences.length === 0) {
        this.logger.log('No hay preferencias de notificación activas configuradas');
        return;
      }

      

      this.logger.log(`Se encontraron ${activePreferences.length} preferencias de notificación activas`);

      // Agrupar preferencias por usuario
      const preferencesByUser = new Map<number, any[]>();
      
      // 2. Agrupar preferencias por usuario
      for (const preference of activePreferences) {
        if (!preference.device || !preference.device.user) {
          this.logger.warn(`Preferencia ID ${preference.id} sin dispositivo o usuario asociado`);
          continue;
        }

        const userId = preference.device.user.id;
        if (!preferencesByUser.has(userId)) {
          preferencesByUser.set(userId, []);
        }
        preferencesByUser.get(userId)?.push(preference);
      }

      // 3. Procesar cada usuario
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const [userId, userPreferences] of preferencesByUser.entries()) {
        if (userPreferences.length === 0) continue;
        
        const firstPreference = userPreferences[0];
        const user = firstPreference.device.user;
        const daysBeforeNotify = firstPreference.daysBeforeNotify || 0;

        // 4. Buscar las deudas del usuario (solo una vez por usuario)
        const userDebts = await this.prisma.debt.findMany({
          where: {
            user_id: user.id,
            status: 'Pendiente'
          },
          include: {
            amortizations: {
              where: {
                status: 'Pendiente'
              }
            }
          }
        });

        // 5. Verificar amortizaciones próximas a vencer según daysBeforeNotify
        for (const debt of userDebts) {
          for (const amortization of debt.amortizations) {
            if (!amortization.date) continue;
            
            const dueDate = amortization.date;
            const notifyDate = format(
              addDays(parseISO(dueDate), -daysBeforeNotify),
              'yyyy-MM-dd'
            );
            
            if (notifyDate === formattedToday) {
              // 6. Guardar notificación en la base de datos (solo una vez por usuario)
              await this.webPushService.saveNotificationToDatabase(user.id, {
                title: `Próximo pago: ${debt.name}`,
                body: `Tu cuota #${amortization.number_months} por $${amortization.quota.toNumber().toFixed(2)} vence el ${amortization.date}`,
              }, debt.id);
              
              // 7. Enviar notificación a todos los dispositivos del usuario
              for (const preference of userPreferences) {
                this.logger.log(`
                  ¡NOTIFICACIÓN PENDIENTE!
                  Usuario: ${user.name || user.username || user.email} (ID: ${user.id})
                  Dispositivo: ${preference.device.brand || ''} ${preference.device.model || ''} (ID: ${preference.device.id})
                  Deuda: ${debt.name || 'Sin nombre'} (ID: ${debt.id})
                  Amortización #${amortization.number_months || 'N/A'} (ID: ${amortization.id})
                  Monto cuota: ${amortization.quota.toNumber() || 'N/A'}
                  Fecha vencimiento: ${dueDate}
                  Días de anticipación configurados: ${daysBeforeNotify}
                  Fecha de notificación (hoy): ${formattedToday}
                `);

                try {
                  const subscription = JSON.parse(preference.subscription);
                  await this.webPushService.sendNotification(subscription, {
                    title: `Próximo pago: ${debt.name}`,
                    body: `Tu cuota #${amortization.number_months} por $${amortization.quota.toNumber().toFixed(2)} vence el ${amortization.date}`,
                  });
                } catch (error) {
                  this.logger.error(`Error enviando notificación al dispositivo ${preference.device.id}:`, error);
                }
              }
            }
          }
        }
      }
    } catch (error) {
      this.logger.error('Error al verificar notificaciones pendientes:', error);
    }
  }

 

  
}
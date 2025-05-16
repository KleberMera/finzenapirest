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

      // 2. Procesar cada preferencia de notificación
      for (const preference of activePreferences) {
        if (!preference.device || !preference.device.user) {
          this.logger.warn(`Preferencia ID ${preference.id} sin dispositivo o usuario asociado`);
          continue;
        }

        const user = preference.device.user;
        const daysBeforeNotify = preference.daysBeforeNotify || 0;
        const subscription = JSON.parse(preference.subscription);

        
        // 3. Buscar las deudas del usuario
        const userDebts = await this.prisma.debt.findMany({
          where: {
            user_id: user.id,
            status: 'Pendiente'  // Solo deudas activas/pendientes
          },
          include: {
            amortizations: {
              where: {
                status: 'Pendiente'  // Solo amortizaciones pendientes
              }
            }
          }
        });

        // 4. Verificar amortizaciones próximas a vencer según daysBeforeNotify
        for (const debt of userDebts) {
          for (const amortization of debt.amortizations) {
            if (!amortization.date) continue;
            
            // Fecha de vencimiento de la amortización
            const dueDate = amortization.date; // Formato: "2025-05-19"
            
            // Calcular la fecha en que se debe notificar (fecha vencimiento - días de notificación previa)
            const notifyDate = format(
              addDays(parseISO(dueDate), -daysBeforeNotify),
              'yyyy-MM-dd'
            );
            
            // Si hoy es el día para notificar
            if (notifyDate === formattedToday) {
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

              // Aquí se implementaría el envío real de la notificación
              // this.sendPushNotification(preference, debt, amortization);
            await  this.webPushService.sendNotification(subscription, {
                title: `Próximo pago: ${debt.name}`,
                body: `Tu cuota #${amortization.number_months} por ${amortization.quota.toNumber()} vence el ${amortization.date}`,
              });
            }
          }
        }
      }
    } catch (error) {
      this.logger.error('Error al verificar notificaciones pendientes:', error);
    }
  }

 
    //Método para enviar la notificación push (comentado para simular solo en consola)
  
  
  // private async sendPushNotification(preference, debt, amortization) {
  //   if (!preference.subscription) {
  //     this.logger.warn('No hay suscripción configurada para enviar notificación push');
  //     return;
  //   }
    
  //   const payload = {
  //     title: `Próximo pago: ${debt.name}`,
  //     message: `Tu cuota #${amortization.number_months} por ${amortization.quota} vence el ${amortization.date}`,
  //     data: {
  //       debtId: debt.id,
  //       amortizationId: amortization.id
  //     }
  //   };
    
  //   try {
  //     await this.webPushService.sendNotification(preference.subscription, payload);
  //   } catch (error) {
  //     this.logger.error(`Error al enviar notificación push: ${error.message}`);
  //   }
  // }
  
}
/* eslint-disable prefer-const */
import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from 'src/config/prisma/prisma.service';
import { WebPushService } from 'src/providers/web-push/web-push.service';
import { addDays, format, parseISO } from 'date-fns';
import { log } from 'console';
import { Cron } from '@nestjs/schedule';

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
 // @Cron('*/2 * * * *')
  async checkPendingNotifications() {
    this.logger.log('Verificando notificaciones pendientes de amortizaciones de deudas...');
    
    const today = new Date();
    const formattedToday = format(today, 'yyyy-MM-dd');
    this.logger.log(`Fecha actual: ${formattedToday}`);

    try {
      // 1. Obtener todas las preferencias de notificación activas
      const activePreferences = await this.prisma.notificationPreference.findMany({
        where: { pushEnabled: true, daysBeforeNotify: { not: null } },
        include: { device: { include: { user: true } } }
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
          where: { user_id: user.id, status: 'Pendiente' },
          include: { amortizations: { where: { status: 'Pendiente' } } }
        });

        // 5. Verificar amortizaciones próximas a vencer según daysBeforeNotify
        for (const debt of userDebts) {
          for (const amortization of debt.amortizations) {
            if (!amortization.date) continue;
            
            const dueDate = amortization.date;
            log('dueDate', dueDate);
            const notifyDate = format(addDays(parseISO(dueDate), -daysBeforeNotify), 'yyyy-MM-dd');
            log('notifyDate', notifyDate);
            log('formattedToday', formattedToday);
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

 
  @Cron('*/2 * * * *')
  async checkPendingRecurringTransactions() {
    this.logger.log('=== INICIANDO VERIFICACIÓN DE TRANSACCIONES RECURRENTES ===');
    this.logger.log('Verificando notificaciones pendientes de transacciones recurrentes...');
    this.logger.log('Buscando transacciones recurrentes para generar y notificar...');
    
    const today = new Date();
    const formattedToday = format(today, 'yyyy-MM-dd');
    this.logger.log(`Fecha actual: ${formattedToday}`);

    try {
      // 1. Obtener todas las preferencias de notificación activas
      const activePreferences = await this.prisma.notificationPreference.findMany({
        where: { pushEnabled: true, daysBeforeNotify: { not: null } },
        include: { device: { include: { user: true } } }
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
      for (const [userId, userPreferences] of preferencesByUser.entries()) {
        if (userPreferences.length === 0) continue;
        
        const firstPreference = userPreferences[0];
        const user = firstPreference.device.user;
        const daysBeforeNotify = firstPreference.daysBeforeNotify || 0;

        this.logger.log(`Procesando usuario ID: ${userId}, Nombre: ${user.name || user.username || user.email}`);

        // 4. Buscar las transacciones recurrentes del usuario
        const recurringTransactions = await this.prisma.recurringTransaction.findMany({
          where: { 
            isActive: true,
            transaction: {
              category: {
                user_id: userId
              }
            }
          },
          include: { 
            transaction: {
              include: {
                category: true
              }
            }
          }
        });

        log('recurringTransactions', recurringTransactions);

        if (recurringTransactions.length === 0) {
          this.logger.log(`No se encontraron transacciones recurrentes activas para el usuario ${userId}`);
          continue;
        }

        this.logger.log(`Se encontraron ${recurringTransactions.length} transacciones recurrentes para el usuario ${userId}`);

        // 5. Verificar transacciones recurrentes próximas a ejecutarse según daysBeforeNotify
        for (const recurringTx of recurringTransactions) {
          this.logger.log(`Procesando transacción recurrente ID: ${recurringTx.id}, Nombre: ${recurringTx.transaction.name}, Fecha: ${recurringTx.nextExecutionDate}`);
          if (!recurringTx.nextExecutionDate) continue;
          // Verificar si la transacción recurrente ha alcanzado su fecha de finalización
          if (recurringTx.endDate) {
            const endDate = parseISO(recurringTx.endDate);
            const today = parseISO(formattedToday);
            
            // Si la fecha actual es posterior a la fecha de finalización, omitir esta transacción
            if (today > endDate) {
              this.logger.log(`Transacción recurrente ID: ${recurringTx.id} ha alcanzado su fecha de finalización (${recurringTx.endDate}). Omitiendo.`);
              continue;
            }
          }
          
          const nextExecutionDate = recurringTx.nextExecutionDate;
          const notifyDate = format(addDays(parseISO(nextExecutionDate), -daysBeforeNotify), 'yyyy-MM-dd');
          log('notifyDate', notifyDate);
          log('formattedToday', formattedToday);
          const transaction = recurringTx.transaction;
          // 1. Notificación de recordatorio (días de anticipación)
          if (notifyDate === formattedToday) {
            await this.webPushService.saveNotificationToDatabase(user.id, {
              title: `Próxima transacción recurrente: ${transaction.name}`,
              body: `Tu transacción por $${transaction.amount.toNumber().toFixed(2)} está programada para el ${nextExecutionDate}`,
            });
            for (const preference of userPreferences) {
              try {
                const subscription = JSON.parse(preference.subscription);
                await this.webPushService.sendNotification(subscription, {
                  title: `Próxima transacción recurrente: ${transaction.name}`,
                  body: `Tu transacción por $${transaction.amount.toNumber().toFixed(2)} está programada para el ${nextExecutionDate}`,
                });
              } catch (error) {
                this.logger.error(`Error enviando notificación al dispositivo ${preference.device.id}:`, error);
              }
            }
          }
          // 2. Generación y notificación SOLO si es el día exacto
          if (nextExecutionDate === formattedToday) {
            // Verificar si ya existe una transacción generada con los mismos datos y fecha
            const existingTransaction = await this.prisma.transaction.findFirst({
              where: {
                category_id: transaction.category_id,
                name: transaction.name,
                amount: transaction.amount,
                date: nextExecutionDate,
                isRecurring: false,
              }
            });
            const wasAlreadyGenerated = recurringTx.lastExecuted === formattedToday;
            if (!wasAlreadyGenerated && !existingTransaction) {
              try {
                const newTransaction = await this.prisma.transaction.create({
                  data: {
                    category_id: transaction.category_id,
                    name: transaction.name,
                    description: `${transaction.description || ''} (Generada automáticamente)`,
                    amount: transaction.amount,
                    date: nextExecutionDate,
                    time: transaction.time,
                    isRecurring: false,
                  }
                });
                // Calcular la próxima fecha de ejecución basada en la fecha actual
                let nextDate = new Date(nextExecutionDate);
                let interval = 1;
                if (recurringTx.frequency === 'Semanal') {
                  interval = 7;
                } else if (recurringTx.frequency === 'Quincenal') {
                  interval = 15;
                } else if (recurringTx.frequency === 'Mensual') {
                  nextDate.setMonth(nextDate.getMonth() + 1);
                  if (recurringTx.dayOfMonth) {
                    const lastDayOfMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
                    nextDate.setDate(Math.min(recurringTx.dayOfMonth, lastDayOfMonth));
                    this.logger.log(`Usando día específico del mes: ${recurringTx.dayOfMonth} (ajustado a: ${nextDate.getDate()})`);
                  }
                  interval = 0;
                }
                if (interval > 0) {
                  nextDate.setDate(nextDate.getDate() + interval);
                }
                await this.prisma.recurringTransaction.update({
                  where: { id: recurringTx.id },
                  data: {
                    lastExecuted: nextExecutionDate,
                    nextExecutionDate: format(nextDate, 'yyyy-MM-dd'),
                    generatedTransactions: { increment: 1 }
                  }
                });
                this.logger.log(`\n¡TRANSACCIÓN RECURRENTE GENERADA!\nID Original: ${transaction.id}\nID Nueva: ${newTransaction.id}\nPróxima ejecución: ${format(nextDate, 'yyyy-MM-dd')}`);
                await this.webPushService.saveNotificationToDatabase(user.id, {
                  title: `Transacción recurrente generada: ${transaction.name}`,
                  body: `Se ha generado automáticamente una transacción por $${transaction.amount.toNumber().toFixed(2)}. La próxima ejecución será el ${format(nextDate, 'yyyy-MM-dd')}.`,
                });
                for (const preference of userPreferences) {
                  try {
                    const subscription = JSON.parse(preference.subscription);
                    await this.webPushService.sendNotification(subscription, {
                      title: `Transacción recurrente generada: ${transaction.name}`,
                      body: `Se ha generado automáticamente una transacción por $${transaction.amount.toNumber().toFixed(2)}. La próxima ejecución será el ${format(nextDate, 'yyyy-MM-dd')}.`,
                    });
                  } catch (notificationError) {
                    this.logger.error(`Error enviando notificación de transacción generada al dispositivo ${preference.device.id}:`, notificationError);
                  }
                }
              } catch (error) {
                this.logger.error(`Error al generar la transacción recurrente:`, error);
              }
            } else if (existingTransaction) {
              this.logger.log(`Ya existe una transacción generada para la fecha ${nextExecutionDate} con los mismos datos. No se genera duplicado.`);
            }
          }
        }
      }
    } catch (error) {
      this.logger.error('Error al verificar transacciones recurrentes pendientes:', error);
    } finally {
      this.logger.log('=== FINALIZADA VERIFICACIÓN DE TRANSACCIONES RECURRENTES ===');
    }
  }


}



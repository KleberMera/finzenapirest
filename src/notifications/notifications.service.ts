import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as firebaseAdmin from 'firebase-admin';
@Injectable()
export class NotificationsService {
    constructor(private prisma: PrismaService) {}
  
    async saveUserToken(firebaseUid: string, token: string) {
      await this.prisma.user.update({
        where: { firebaseUid },
        data: { notificationToken: token }
      });
    }
  
// notifications.service.ts (NestJS)
async sendDebtReminder(debtId: number, daysBefore: number) {
    const dateToString = (date: Date) => date.toISOString().split('T')[0];
    
    const debt = await this.prisma.debt.findUnique({
      where: { id: debtId },
      include: {
        user: true,
        amortizations: {
          where: {
            date: {
              gte: dateToString(new Date()),
              lte: dateToString(new Date(new Date().setDate(new Date().getDate() + daysBefore)))
            }
          }
        }
      }
    });
  
    if (!debt || !debt.user?.notificationToken || debt.amortizations.length === 0) return;
  
    const amortization = debt.amortizations[0];
    const message = {
      token: debt.user.notificationToken,
      notification: {
        title: 'Recordatorio de pago',
        body: `Tienes un pago de ${amortization.quota} programado para ${amortization.date}`
      }
    };
  
    await firebaseAdmin.messaging().send(message);
  }


    // notifications.service.ts (NestJS)
async checkDueAmortizations() {
    const dateToString = (date: Date) => date.toISOString().split('T')[0];
    
    const dueAmortizations = await this.prisma.amortization.findMany({
      where: {
        date: {
          gte: dateToString(new Date(new Date().setDate(new Date().getDate() + 1))),
          lte: dateToString(new Date(new Date().setDate(new Date().getDate() + 2)))
        },
        status: 'Pendiente'
      },
      include: {
        debt: {
          include: {
            user: true // Incluir relación user
          }
        }
      }
    });
  
    for (const amortization of dueAmortizations) {
      await this.sendDebtReminder(amortization.debt.id, 1);
    }
  }
  }
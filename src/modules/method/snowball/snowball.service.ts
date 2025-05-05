import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class SnowballService {
    constructor(private readonly prismaService: PrismaService) {}

    async getDebtByUserIdName(userId: number) {
        try {
          const debts = await this.prismaService.debt.findMany({
            where: {
              user_id: userId,
            },
            select: {
              id: true,
              name: true,
              interest_rate: true,
              amount: true,
              duration_months: true,
              start_date: true,
              end_date: true,
              amortizations: {
                 where: {
                   status: 'Pagado',
                 },
                 select: {
                  quota: true,
                  number_months: true,
                  date: true,
                  status: true,
                 }
              }
            },
          });
    // Procesar los datos para agregar la información adicional
    const processedDebts = debts.map(debt => {
      // Calcular cuotas pagadas
      const paidAmortizations = debt.amortizations.filter(a => a.status === 'Pagado');
      const totalPaidAmount = paidAmortizations.reduce((sum, a) => sum + Number(a.quota), 0);
      const paidInstallmentsCount = paidAmortizations.length;
      
      // Calcular cuotas pendientes
      const remainingInstallments = debt.duration_months - paidInstallmentsCount;
      
      // Calcular monto pendiente por pagar
      const remainingAmount = Number(debt.amount) - totalPaidAmount;

      return {
        ...debt,
        totalPaidAmount,
        paidInstallmentsCount,
        remainingInstallments,
        remainingAmount
      };
    });

    return {
      message: 'Deudas cargadas con éxito',
      data: processedDebts,
    };
        } catch (error) {
          if (error instanceof Error) {
            throw error;
          }
          throw new Error(`Error al cargar las deudas: ${error.message}`);
        }
      }
    
}

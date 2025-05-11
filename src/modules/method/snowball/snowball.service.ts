import { format } from '@formkit/tempo';
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
          duration_type: true,
          method: true,
          amortizations: {
            where: {
              status: 'Pagado',
            },
            select: {
              quota: true,
              number_months: true,
              date: true,
              interest: true,
              status: true,
            },
          },
        },
      });
      // Procesar los datos para agregar la información adicional
      const processedDebts = debts.map((debt) => {
        // Calcular cuotas pagadas
        const paidAmortizations = debt.amortizations.filter(
          (a) => a.status === 'Pagado',
        );
        const totalPaidAmount = paidAmortizations.reduce(
          (sum, a) => sum + Number(a.quota),
          0,
        );
        const paidInstallmentsCount = paidAmortizations.length;

        // Calcular cuotas pendientes
        const remainingInstallments =
          debt.duration_months - paidInstallmentsCount;

        // Calcular monto pendiente por pagar
        const remainingAmount = Number(debt.amount) - totalPaidAmount;

        return {
          ...debt,
          totalPaidAmount,
          paidInstallmentsCount,
          remainingInstallments,
          remainingAmount,
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

  //Crear plan estratégico
  async createStrategyPlan(userId: number, data: any) {
    try {
      const strategyPlan = await this.prismaService.strategyPlan.create({
        data: {
          userId,
          datajson: JSON.stringify(data),
          dateCreated: format(new Date(), 'YYYY-MM-DD'),
          timeCreated: format(new Date(), 'hh:mm:ss'),
        },
      });
      return {
        message: 'Plan estratégico creado con éxito',
        data: strategyPlan,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al crear el plan estratégico: ${error.message}`);
    }
  }


  //Obtener el ultimo plan de la ultima fecha y hora
  async getStrategyPlan(userId: number) {
    try {
      const strategyPlan = await this.prismaService.strategyPlan.findFirst({
        where: {
          userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
      return {
        message: 'Plan estratégico obtenido con éxito',
        data: strategyPlan,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al obtener el plan estratégico: ${error.message}`);
    }
  }

  //Eliminar el plan estratégico
  async deleteStrategyPlan(id: number, userId: number) {
    try {

      const strategyPlan = await this.prismaService.strategyPlan.delete({
        where: {
          id,
          userId,
        },
      });
      return {
        message: 'Plan estratégico eliminado con éxito',
        data: strategyPlan,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al eliminar el plan estratégico: ${error.message}`);
    }
  }
}

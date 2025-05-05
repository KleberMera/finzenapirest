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
    
          return {
            message: 'Deudas cargadas con éxito',
            data: debts,
          };
        } catch (error) {
          if (error instanceof Error) {
            throw error;
          }
          throw new Error(`Error al cargar las deudas: ${error.message}`);
        }
      }
    
}

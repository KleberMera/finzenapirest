import { Injectable } from '@nestjs/common';
import { DebtDTO } from 'src/models/deb.interface';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DebtService {
  constructor(private prismaService: PrismaService) {}

  async getDebtByUserId(userId: number) {
    const debts = await this.prismaService.debt.findMany({
      where: {
        user_id: userId,
      },
      include: {
        amortizations: true,
      },
    });
    return {
      message: 'Debt cargados con éxito',
      data: debts,
    };
  }

  async createDebt(debt: DebtDTO) {
    try {
      const newDebt = await this.prismaService.debt.create({
        data: {
          ...debt,
          amortizations: {
            create: {
              ...debt.amortizations,
            },
          },
        },
      });
      return {
        message: 'Deuda registrada con éxito',
        data: newDebt,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al registrar la deuda: ${error.message}`);
    }
  }

  async updateDebt(debt: DebtDTO) {
    try {
      const updatedDebt = await this.prismaService.debt.update({
        where: {
          id: debt.id,
        },
        data: {
          ...debt,
          amortizations: {
            updateMany: {
              where: {
                debt_id: debt.id,
              },
              data: {
                ...debt.amortizations,
              },
            },
          },
        },
      });
      return {
        message: 'Deuda actualizada con éxito',
        data: updatedDebt,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al actualizar la deuda: ${error.message}`);
    }
  }
}

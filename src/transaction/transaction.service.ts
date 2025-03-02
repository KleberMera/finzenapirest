import { Injectable } from '@nestjs/common';
import { TransactionDTO } from 'src/models/trasaction.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTransactionByUserId(userId: number) {
    const transactions = await this.prismaService.transaction.findMany({
      where: {
        category: {
          user_id: userId,
        }
      },include: {
          category: true
      }
    });
    return {
      message: 'Transacciones cargadas con éxito',
      data: transactions,
    };
  }

  async createTransaction(transaction: TransactionDTO) {
    try {
      const newTransaction = await this.prismaService.transaction.create({
        data: transaction,
      });
      return {
        message: 'Transacción creada con éxito',
        data: newTransaction,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al crear la transacción: ${error.message}`);
    }
  }

  async deleteTransactionById(id: number) {
    try {
      const deletedTransaction = await this.prismaService.transaction.delete({
        where: { id },
      });
      return {
        message: 'Transacción eliminada con éxito',
        data: deletedTransaction,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al eliminar la transacción: ${error.message}`);
    }
  }
}

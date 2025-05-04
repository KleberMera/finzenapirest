import { format } from '@formkit/tempo';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateRecurrentTransactionDto, UpdateRecurrentTransactionDto } from 'src/models/recurrent/create-recurrent-transaction.dto';

@Injectable()
export class RecurrentTransactionService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createRecurrentTransactionDto: CreateRecurrentTransactionDto, userId: number) {
      const { transactionData, ...recurrenceData } = createRecurrentTransactionDto;
  
      if (!transactionData) {
        throw new BadRequestException('Transaction data is required');
      }
  
      // Verificar que la categoría pertenece al usuario
      const category = await this.prisma.category.findFirst({
        where: {
          id: transactionData.category_id,
          user_id: userId
        }
      });
  
      if (!category) {
        throw new NotFoundException(`Category with ID ${transactionData.category_id} not found`);
      }
  
      // Crear transacción base
      const transaction = await this.prisma.transaction.create({
        data: {
          category_id: transactionData.category_id,
          name: transactionData.name,
          description: transactionData.description,
          amount: transactionData.amount,
          date: format(new Date(), 'YYYY-MM-DD', 'es'), // Fecha actual como referencia
          time: transactionData.time,
          isRecurring: true,
        }
      });
  
      // Crear configuración de recurrencia
      const recurrentTransaction = await this.prisma.recurringTransaction.create({
        data: {
          transactionId: transaction.id,
          frequency: recurrenceData.frequency,
          nextExecutionDate: format(new Date(recurrenceData.nextExecutionDate), 'YYYY-MM-DD', 'es'),
          endDate: recurrenceData.endDate ? format(new Date(recurrenceData.endDate), 'YYYY-MM-DD', 'es') : null,
          dayOfMonth: recurrenceData.dayOfMonth,
          dayOfWeek: recurrenceData.dayOfWeek
        }
      });


  
      return {
        ...transaction,
        recurringConfig: recurrentTransaction
      };
    }
  
    async createFromExistingTransaction(
      transactionId: number,
      recurrenceConfig: Omit<CreateRecurrentTransactionDto, 'transactionData'>,
      userId: number
    ) {
      // Verificar que la transacción existe y pertenece al usuario
      const transaction = await this.prisma.transaction.findFirst({
        where: {
          id: transactionId,
          category: {
            user_id: userId
          }
        },
        include: {
          category: true
        }
      });
  
      if (!transaction) {
        throw new NotFoundException(`Transaction with ID ${transactionId} not found`);
      }
  
      // Verificar que la transacción no es ya recurrente
      const existingRecurrence = await this.prisma.recurringTransaction.findUnique({
        where: {
          transactionId: transactionId
        }
      });
  
      if (existingRecurrence) {
        throw new BadRequestException(`Transaction is already configured as recurrent`);
      }
  
      // Actualizar transacción a recurrente
      await this.prisma.transaction.update({
        where: {
          id: transactionId
        },
        data: {
          isRecurring: true,
        }
      });
  
      // Crear configuración de recurrencia
      const recurrentTransaction = await this.prisma.recurringTransaction.create({
        data: {
          transactionId: transactionId,
          frequency: recurrenceConfig.frequency,
          nextExecutionDate: format(new Date(recurrenceConfig.nextExecutionDate), 'YYYY-MM-DD', 'es'),
          endDate: format(new Date(recurrenceConfig.endDate), 'YYYY-MM-DD', 'es'),
          dayOfMonth: recurrenceConfig.dayOfMonth,
          dayOfWeek: recurrenceConfig.dayOfWeek
        }
      });
  
      return {
        ...transaction,
        recurringConfig: recurrentTransaction
      };
    }
  
    async findAllByUser(userId: number, isActive?: boolean) {
      const transactions = await this.prisma.transaction.findMany({
        where: {
          category: {
            user_id: userId
          },
          isRecurring: true,
          recurringConfig: isActive !== undefined ? {
            isActive: isActive
          } : undefined
        },
        include: {
          category: true,
          recurringConfig: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
  
      return transactions;
    }
  
    async findOne(id: number, userId: number) {
      const recurrentTransaction = await this.prisma.recurringTransaction.findFirst({
        where: {
          id,
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
  
      if (!recurrentTransaction) {
        throw new NotFoundException(`Recurrent transaction with ID ${id} not found`);
      }
  
      return recurrentTransaction;
    }
  
    async getGeneratedTransactions(id: number, userId: number) {
      // Primero verificamos que la configuración de recurrencia existe y pertenece al usuario
      const recurrentConfig = await this.prisma.recurringTransaction.findFirst({
        where: {
          id,
          transaction: {
            category: {
              user_id: userId
            }
          }
        },
        include: {
          transaction: true
        }
      });
  
      if (!recurrentConfig) {
        throw new NotFoundException(`Recurrent transaction with ID ${id} not found`);
      }
  
      // Obtener la transacción original
      const originalTransactionId = recurrentConfig.transactionId;
  
      // Buscar transacciones generadas relacionadas con la misma configuración
      // Esto dependerá de cómo hayas implementado la relación entre transacciones generadas
      // Esta es una implementación de ejemplo, ajustala según tu esquema
      const generatedTransactions = await this.prisma.transaction.findMany({
        where: {
          AND: [
            { id: { not: originalTransactionId } },
            { 
              OR: [
                // Aquí necesitarás adaptar la consulta según cómo estés relacionando 
                // las transacciones generadas con su origen recurrente
                { description: { contains: `Auto-generated from recurring transaction #${id}` } }
                // Otras condiciones según tu implementación
              ]
            }
          ],
          category: {
            user_id: userId
          }
        },
        include: {
          category: true
        },
        orderBy: {
          date: 'desc'
        }
      });
  
      return generatedTransactions;
    }
  
    async update(
      id: number,
      updateRecurrentTransactionDto: UpdateRecurrentTransactionDto,
      userId: number
    ) {
      // Verificar que la configuración existe y pertenece al usuario
      const recurrentConfig = await this.prisma.recurringTransaction.findFirst({
        where: {
          id,
          transaction: {
            category: {
              user_id: userId
            }
          }
        }
      });
  
      if (!recurrentConfig) {
        throw new NotFoundException(`Recurrent transaction with ID ${id} not found`);
      }
  
      // Actualizar la configuración
      const updatedConfig = await this.prisma.recurringTransaction.update({
        where: {
          id
        },
        data: {
          frequency: updateRecurrentTransactionDto.frequency,
          nextExecutionDate: format(new Date(updateRecurrentTransactionDto.nextExecutionDate), 'YYYY-MM-DD', 'es'),
          endDate: updateRecurrentTransactionDto.endDate ? format(new Date(updateRecurrentTransactionDto.endDate), 'YYYY-MM-DD', 'es') : null,
          dayOfMonth: updateRecurrentTransactionDto.dayOfMonth,
          dayOfWeek: updateRecurrentTransactionDto.dayOfWeek,
          isActive: updateRecurrentTransactionDto.isActive
        }
      });
  
      return updatedConfig;
    }
  
    async toggleActive(id: number, isActive: boolean, userId: number) {
      // Verificar que la configuración existe y pertenece al usuario
      const recurrentConfig = await this.prisma.recurringTransaction.findFirst({
        where: {
          id,
          transaction: {
            category: {
              user_id: userId
            }
          }
        }
      });
  
      if (!recurrentConfig) {
        throw new NotFoundException(`Recurrent transaction with ID ${id} not found`);
      }
  
      // Actualizar el estado de activación
      const updatedConfig = await this.prisma.recurringTransaction.update({
        where: {
          id
        },
        data: {
          isActive
        }
      });
  
      return updatedConfig;
    }
  
    async remove(id: number, userId: number) {
      // Verificar que la configuración existe y pertenece al usuario
      const recurrentConfig = await this.prisma.recurringTransaction.findFirst({
        where: {
          id,
          transaction: {
            category: {
              user_id: userId
            }
          }
        },
        include: {
          transaction: true
        }
      });
  
      if (!recurrentConfig) {
        throw new NotFoundException(`Recurrent transaction with ID ${id} not found`);
      }
  
      // Eliminar la configuración de recurrencia
      await this.prisma.recurringTransaction.delete({
        where: {
          id
        }
      });
  
      // Actualizar la transacción original para que ya no sea recurrente
      await this.prisma.transaction.update({
        where: {
          id: recurrentConfig.transactionId
        },
        data: {
          isRecurring: false
        }
      });
  
      return { message: 'Recurrent transaction deleted successfully' };
    }
    }

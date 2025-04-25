import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';
import { log } from 'console';
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


  //Listar Transaccion por usuario solo el nombre y el id de transaccion
  async getTransactionByUserIdName(userId: number) {
    const transactions = await this.prismaService.transaction.findMany({
      where: {
        category: {
          user_id: userId,
        }
      },
      select: {
        name: true,
        id: true
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
        data: {
          ...transaction,
        }
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



  async getTransactionsByUserIdWithFilters(
    userId: number,
    options: {
      page?: number;
      limit?: number;
      categoryName?: string;
      transactionName?: string;
      type?: string;
      date?: string;
      startDate?: string;
      endDate?: string;
      today?: boolean;
      all?: boolean; // Nuevo parámetro para obtener todos los registros
    }
  ) {
    const {
      page = 1,
      limit = 10,
      categoryName,
      transactionName,
      type,
      date,
      startDate,
      endDate,
      today,
      all = false, // Por defecto es false
    } = options;
  
    // Configuración de paginación
    const skip = all ? undefined : (Number(page) - 1) * Number(limit);
    const take = all ? undefined : Number(limit);
  
    // Preparar el objeto where para los filtros
     
    const  where: any = {
      category: {
        user_id: userId,
      },
    };
  
    // Filtro por nombre de categoría
    if (categoryName) {
      where.category.name = {
        contains: categoryName,
        mode: 'insensitive',
      };
    }
  
    // Filtro por tipo de categoría
    if (type) {
      where.category.type = type;
    }
  
    // Filtro por nombre de transacción
    if (transactionName) {
      where.name = {
        contains: transactionName,
        mode: 'insensitive',
      };
    }
  
    // Filtro por fecha específica
    if (date) {
      where.date = date;
    }
  
    // Filtro por hoy
    if (today) {
      //const l = "es"
      const date = new Date()
      const datenew = format({
        date,
        format: "YYYY-MM-DD",
        tz: "America/Guayaquil",
      })
      log('today', datenew)
      where.date = datenew;
    }
  
    // Filtro por rango de fechas
    if (startDate && endDate) {
      where.date = {
        gte: startDate,
        lte: endDate,
      };
    }
  
    // Obtener total de registros para la paginación
    const total = await this.prismaService.transaction.count({ where });
  
    // Preparar opciones de consulta
     
    const findManyOptions: any = {
      where,
      include: {
        category: true,
      },
      orderBy: {
        date: 'desc',
      },
    };
  
    // Solo aplicar paginación si no se solicitan todos los registros
    if (!all) {
      findManyOptions.skip = skip;
      findManyOptions.take = take;
    }
  
    // Obtener transacciones con filtros y paginación
    const transactions = await this.prismaService.transaction.findMany(findManyOptions);
  
    // Calcular total de páginas (solo relevante si no es "all")
    const totalPages = all ? 1 : Math.ceil(total / Number(limit));
  
    return {
      message: 'Transacciones cargadas con éxito',
      data: transactions,
      
      pagination: {
      total,
      page: all ? 1 : Number(page),
      limit: all ? total : Number(limit),
      totalPages,
      count: transactions.length,
      },
    };
  }


  //Total de transacciones de tipo gasto por usuario de un mes en especifico
  async getTotalExpenseByUserAndMonth(userId: number, month: number, year: number){
    log(userId, month, year)
    const transactions = await this.prismaService.transaction.findMany({
      where: {
        category: {
          type: 'Gasto', // Filtra transacciones de tipo "Gasto"
          user_id: userId, // Filtra por el usuario
        },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }), // Inicio del mes
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
        },
      },
    });

    // Calcula el total
    const total = transactions.reduce((sum, transaction) => {
      return sum + transaction.amount.toNumber(); // Suma los montos
    }, 0);

    return {
      data : {'total' : total},
      message: 'Total de gasto por usuario y mes',
      status: 200,

    };
  }


  async getTotalIncomeByUserAndMonth(userId: number, month: number, year: number){
    log(userId, month, year)
    const transactions = await this.prismaService.transaction.findMany({
      where: {
        category: {
          type: 'Ingreso', // Filtra transacciones de tipo "Gasto"
          user_id: userId, // Filtra por el usuario
        },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }), // Inicio del mes
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
        },
      },
    });

    // Calcula el total
    const total = transactions.reduce((sum, transaction) => {
      return sum + transaction.amount.toNumber(); // Suma los montos
    }, 0);

    return {
      data : {'total' : total},
      message: 'Total de gasto por usuario y mes',
      status: 200,

    };
  }


  
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { TransactionDTO } from 'src/models/trasaction.interface';
import { PrismaService } from 'src/config/prisma/prisma.service';

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


  //Listar transacciones por id de categoria
  async getTransactionByCategoryId(categoryId: number) {
    log(categoryId)
    const transactions = await this.prismaService.transaction.findMany({
      where: {
        category_id: categoryId,
      },
      include: {
        recurringConfig : true
      }
    });
    return {
      message: 'Transacciones cargadas con éxito',
      data: transactions,
    };
  }

  /**
   * Obtiene estadísticas generales de transacciones
   * @param month Mes inicial (1-12)
   * @param year Año inicial (ej: 2024)
   * @param endMonth Mes final (opcional, 1-12)
   * @param endYear Año final (opcional, ej: 2024)
   * @returns Estadísticas de transacciones por período y totales
   */
  async getTransactionStatistics(
    month: number,
    year: number,
    endMonth?: number,
    endYear?: number
  ) {
    // Validar mes y año inicial
    if (month < 1 || month > 12) {
      throw new Error('El mes debe estar entre 1 y 12');
    }
    
    // Determinar si es un rango de meses o solo un mes
    const isRange = endMonth !== undefined && endYear !== undefined;
    
    if (isRange) {
      // Validar mes y año final
      if (endMonth < 1 || endMonth > 12) {
        throw new Error('El mes final debe estar entre 1 y 12');
      }
      
      // Validar que la fecha final sea mayor o igual a la inicial
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(endYear, endMonth, 0);
      
      if (endDate < startDate) {
        throw new Error('La fecha final debe ser mayor o igual a la fecha inicial');
      }
    }

    // Obtener todos los meses en el rango
    const periods: { month: number; year: number }[] = [];
    
    if (isRange) {
      // Generar lista de meses en el rango
      let currentDate = new Date(year, month - 1, 1);
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      const lastDate = new Date(endYear as number, endMonth as number, 0);
      
      while (currentDate <= lastDate) {
        periods.push({
          month: currentDate.getMonth() + 1,
          year: currentDate.getFullYear()
        });
        
        // Mover al primer día del siguiente mes
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      }
    } else {
      // Solo un mes
      periods.push({ month, year });
    }

    // Definir el tipo para las transacciones con categoría
    type TransactionWithCategory = {
      amount: { toNumber: () => number };
      receiptImageS3Key: string | null;
      category: { type: 'Ingreso' | 'Gasto'; name: string; id: number; icon: string | null };
    };

    // Obtener estadísticas para cada período
    const periodStats = [];
    const allTransactions: TransactionWithCategory[] = [];
    
    for (const period of periods) {
      const firstDay = new Date(period.year, period.month - 1, 1);
      const lastDay = new Date(period.year, period.month, 0);
      
      const startDate = format({ date: firstDay, format: 'YYYY-MM-DD' });
      const endDate = format({ date: lastDay, format: 'YYYY-MM-DD' });
      
      // Obtener transacciones del período actual
      const transactions = await this.prismaService.transaction.findMany({
        where: {
          date: {
            gte: startDate,
            lte: endDate,
          },
        },
        include: {
          category: {
            select: {
              id: true,
              name: true,
              type: true,
              icon: true,
            },
          },
        },
      }) as unknown as TransactionWithCategory[];
      
      allTransactions.push(...transactions);
      
      // Calcular estadísticas del período
      const periodData = this.calculatePeriodStats(transactions, period.month, period.year);
      periodStats.push(periodData);
    }
    
    // Calcular totales generales
    const totalData = this.calculatePeriodStats(allTransactions);
    
    return {
      message: 'Estadísticas de transacciones obtenidas con éxito',
      data: {
        periods: periodStats,
        total: totalData,
      },
    };
  }
  
  /**
   * Calcula las estadísticas para un conjunto de transacciones
   */
  private calculatePeriodStats(
    transactions: Array<{
      amount: { toNumber: () => number };
      receiptImageS3Key: string | null;
      category: { type: 'Ingreso' | 'Gasto'; name: string; id: number; icon: string | null };
    }>,
    month?: number,
    year?: number
  ) {
    // Inicializar contadores
    let totalIncome = 0;
    let totalExpense = 0;
    let transactionsWithReceipt = 0;
    const transactionsByCategory: Record<string, { amount: number; type: 'Ingreso' | 'Gasto' }> = {};
    
    // Procesar cada transacción
    transactions.forEach(transaction => {
      const amount = transaction.amount.toNumber();
      const isIncome = transaction.category.type === 'Ingreso';
      
      // Sumar a ingresos o gastos
      if (isIncome) {
        totalIncome += amount;
      } else {
        totalExpense += amount;
      }
      
      // Contar transacciones con imagen de recibo
      if (transaction.receiptImageS3Key) {
        transactionsWithReceipt++;
      }
      
      // Agrupar por categoría
      const categoryName = transaction.category.name;
      if (!transactionsByCategory[categoryName]) {
        transactionsByCategory[categoryName] = { 
          amount: 0, 
          type: transaction.category.type 
        };
      }
      transactionsByCategory[categoryName].amount += amount;
    });
    
    // Preparar estadísticas por categoría
    const categories = Object.entries(transactionsByCategory).map(([name, data]) => ({
      name,
      type: data.type,
      totalAmount: data.amount,
      percentage: (data.amount / (totalIncome + totalExpense)) * 100,
    }));
    
    // Separar categorías por tipo
    const incomeCategories = categories.filter(cat => cat.type === 'Ingreso')
      .sort((a, b) => b.totalAmount - a.totalAmount);
    const expenseCategories = categories.filter(cat => cat.type === 'Gasto')
      .sort((a, b) => b.totalAmount - a.totalAmount);
    
    //Calcular el numero de transacciones por tipo
    const incomeTransactions = transactions.filter(cat => cat.category.type === 'Ingreso').length;
    const expenseTransactions = transactions.filter(cat => cat.category.type === 'Gasto').length;
    
    
    return {
      period: month && year ? `${month.toString().padStart(2, '0')}/${year}` : 'Total',
      totalTransactions: transactions.length,
      income: {
        total: totalIncome,
        //categories: incomeCategories,
        transactions: incomeTransactions,
      },
      expense: {
        total: totalExpense,
        //categories: expenseCategories,
        transactions: expenseTransactions,
      },
      balance: totalIncome - totalExpense,
      transactionsWithReceipt,
      transactionsWithoutReceipt: transactions.length - transactionsWithReceipt,
    };
  }
}

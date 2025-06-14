import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { Salary } from 'src/models/salary';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { format } from '@formkit/tempo';

@Injectable()
export class SalaryService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Listar salarios por ID de usuario
   * Devuelve todos los registros de salario asociados a un usuario específico.
   */
  async getSalariesByUserId(userId: number) {
    const salaries = await this.prisma.salaryHistory.findMany({
      where: { user_id: userId },
    });
    return {
      message: 'Salarios obtenidos correctamente',
      data: salaries,
      status: 200,
    };
  }

  /**
   * Crear un nuevo registro de salario
   * Crea un nuevo registro en la tabla SueldoHistorial con los datos proporcionados.
   */
  async createSalary(data: Salary) {
    log(data);
    const salary = await this.prisma.salaryHistory.create({
       data: {
        ...data,
       }
    });
    return {
      message: 'Salario creado correctamente',
      data: salary,
      status: 201,
    };
  }

  /**
   * Actualizar un registro de salario
   * Actualiza un registro existente basado en su ID con los datos proporcionados.
   */
  async updateSalary(id: number, data: Salary) {
    const salary = await this.prisma.salaryHistory.update({
      where: { id },
      data: {
        ...data,
      },
    });
    return {
      message: 'Salario actualizado correctamente',
      data: salary,
      status: 200,
    };
  }

  /**
   * Eliminar un registro de salario
   * Elimina un registro de salario basado en su ID.
   */
  async deleteSalary(id: number) {
    await this.prisma.salaryHistory.delete({
      where: { id },
    });
    return {
      message: 'Salario eliminado correctamente',
      data: null,
      status: 200,
    };
  }

  /**
   * Listar salario por mes actual o mes específico
   * Devuelve el salario de un usuario para un mes dado o el mes actual si no se especifica.
   */
  async getSalaryByMonth(userId: number, month: number, year: number) {
    log(month, year);
    const formattedMonth = format({ date: new Date(year, month - 1, 1), format: 'MMMM' , tz: 'America/Guayaquil' });
    const monthParsed = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);

    // Obtener el salario del mes y año específicos
    const lastSalary = await this.prisma.salaryHistory.findFirst({
      where: { 
        user_id: userId, 
        month_name: monthParsed,
        effective_date: {
          gte: format({ date: new Date(year, 0, 1), format: 'YYYY-MM-DD' }),
          lt: format({ date: new Date(year + 1, 0, 1), format: 'YYYY-MM-DD' }),
        }
      },
      orderBy: { effective_date: 'desc' },
    });
    
    
  
    return {
      message: 'Salario obtenido correctamente',
      data: lastSalary,
      status: 200,
    };
  }




  async getSalaryByMonthDetail(userId: number, monthName?: string, year?: number, month?: number) {
    const currentMonth =
      monthName || new Date().toLocaleString('default', { month: 'long' });
  
    const salary = await this.prisma.salaryHistory.findFirst({
      where: {
        user_id: userId,
        month_name: currentMonth,
      },
      orderBy: {
        createdAt: 'desc', // Ordenar por effective_date descendente
      },
    });

    
    const transactions = await this.prisma.transaction.findMany({
      where: {
        category: {
          user_id: userId, // Filtra por el usuario
        },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }), // Inicio del mes
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
        },
      },
      include: {
        category: true,
      },
    });

    // Consulta modificada para obtener solo el total de amortizaciones del mes
    const amortizationsResult = await this.prisma.amortization.aggregate({
      _sum: {
        quota: true, // Suma el campo quota (o cambia por el campo que represente el monto de la amortización)
      },
      where: {
        debt: {
          user_id: userId, // Filtra por el usuario
        },
        payment_date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }), // Inicio del mes
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
        },
        status: 'Pagado', // Solo amortizaciones pagadas
      },
    });

    const goalContribution = await this.prisma.goalContribution.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        goal: {
          user_id: userId,
        },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }), // Inicio del mes
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
        },
      
      },
    });

    // Extraer el total de amortizaciones
    const totalDebtPaid = amortizationsResult._sum.quota?.toNumber() || 0;

    // Extraer el total de contribuciones
    const totalGoalContributionPaid = goalContribution._sum.amount?.toNumber() || 0;

    //total ingresos
    const totalIncome = transactions.filter(t => t.category.type === 'Ingreso').reduce((acc, t) => acc + t.amount.toNumber(), 0);

    //total gastos
    const totalExpense = transactions.filter(t => t.category.type === 'Gasto').reduce((acc, t) => acc + t.amount.toNumber(), 0);

   const remainingSalary = salary.salary_amount.toNumber() + totalIncome - totalExpense - totalDebtPaid - totalGoalContributionPaid;

    return {
      message: 'Salario obtenido correctamente',
      data: {
        //total con salario
        salary,
        //total ingresos
        totalIncome,
        //total gastos
        totalExpense,

        //total de deudas pagadas
        totalDebtPaid, 
        //total de contribuciones pagadas
        totalGoalContributionPaid,
        //saldo restante
        remainingSalary,

      },
      status: 200,
    };
  }
}

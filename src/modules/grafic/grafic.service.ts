import { format } from '@formkit/tempo';
import { BadRequestException, Injectable } from '@nestjs/common';


import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class GraficService {
  constructor(private readonly prisma: PrismaService) {}

  async getWeeklySummary(userId: number) {
    // Obtener fechas de inicio y fin de la semana actual
    const now = new Date();

    // Obtener el día de la semana (0 = domingo, 6 = sábado)
    const currentDay = now.getDay();

    // Calcular el lunes de la semana actual
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(now);
    monday.setDate(now.getDate() + mondayOffset);

    // Calcular el domingo de la semana actual
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    // Formatear fechas usando @formkit/tempo correctamente
    const startDate = format(monday, 'YYYY-MM-DD');
    const endDate = format(sunday, 'YYYY-MM-DD');

    console.log('Rango de fechas:', startDate, 'hasta', endDate);

    // Ejecutar query raw para PostgreSQL
    const result = await this.prisma.$queryRaw`
      SELECT
        EXTRACT(ISODOW FROM t.date::DATE) as day_of_week,
        SUM(CASE WHEN c.type = 'Gasto' THEN t.amount ELSE 0 END) as gasto,
        SUM(CASE WHEN c.type = 'Ingreso' THEN t.amount ELSE 0 END) as ingreso
      FROM "Transaction" t
      INNER JOIN "Category" c ON t.category_id = c.id
      WHERE c.user_id = ${userId}
        AND t.date::DATE >= ${startDate}::DATE
        AND t.date::DATE <= ${endDate}::DATE
      GROUP BY EXTRACT(ISODOW FROM t.date::DATE)
      ORDER BY day_of_week
    `;

    // Mapear días de la semana
    const daysMap = {
      1: 'Lunes',
      2: 'Martes',
      3: 'Miércoles',
      4: 'Jueves',
      5: 'Viernes',
      6: 'Sábado',
      7: 'Domingo',
    };

    // Crear estructura base con todos los días
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const weeklySummary = Object.entries(daysMap).map(([dayNum, dayName]) => ({
      day: dayName,
      gasto: 0,
      ingreso: 0,
    }));

    // Llenar con datos de la consulta
    (
      result as Array<{ day_of_week: number; gasto: string; ingreso: string }>
    ).forEach((row) => {
      const index = row.day_of_week - 1; // Ajustar al índice del array (0-6)
      if (index >= 0 && index < 7) {
        // Validar que el índice sea válido
        weeklySummary[index].gasto = Number(row.gasto) || 0;
        weeklySummary[index].ingreso = Number(row.ingreso) || 0;
      }
    });

    // Registrar los resultados para depuración
    console.log(
      'Resultados semanales:',
      JSON.stringify(weeklySummary, null, 2),
    );

    return {
      message: 'Datos Semanales Obtenidos',
      data: weeklySummary,
      status: 200,
    };
  }

  async getTransactionData(
    userId: number,
    startMonth: number,
    startYear: number,
    endMonth?: number,
    endYear?: number,
  ) {
    // Si no se proporciona endMonth/endYear, usar solo startMonth/startYear
    const isRangeQuery = endMonth !== undefined && endYear !== undefined;
    
    if (!isRangeQuery) {
      // Caso de un solo mes
      return this.getSingleMonthData(userId, startMonth, startYear);
    }
    
    // Validar rango
    if (
      startYear > endYear ||
      (startYear === endYear && startMonth > endMonth)
    ) {
      throw new BadRequestException('Rango de fechas inválido');
    }
  
    const result = [];
    let currentYear = startYear;
    let currentMonth = startMonth;
  
    // Iterar por cada mes en el rango
    while (
      currentYear < endYear ||
      (currentYear === endYear && currentMonth <= endMonth)
    ) {
      const monthData = await this.getSingleMonthData(
        userId,
        currentMonth,
        currentYear,
      );
      result.push(monthData.data); // Solo añadir los datos, no el mensaje repetitivo
  
      // Avanzar al siguiente mes
      if (currentMonth === 12) {
        currentMonth = 1;
        currentYear++;
      } else {
        currentMonth++;
      }
    }
  
    return {
      message: 'Datos obtenidos por rango de meses',
      data: result,
      status: 200,
    };
  }
  
  // Método privado para obtener datos de un solo mes
  private async getSingleMonthData(userId: number, month: number, year: number) {
    // Formato de fecha inicial y final para un mes específico
    const startDate = format(new Date(year, month - 1, 1), 'YYYY-MM-DD');
    const endDate = format(new Date(year, month, 0), 'YYYY-MM-DD');
  
    // Obtener transacciones de ingresos
    const incomes = await this.prisma.transaction.findMany({
      where: {
        category: {
          user_id: userId,
          type: 'Ingreso',
        },
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        category: true,
      },
    });
  
    // Obtener transacciones de gastos
    const expenses = await this.prisma.transaction.findMany({
      where: {
        category: {
          user_id: userId,
          type: 'Gasto',
        },
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        category: true,
      },
    });
  
    // Calcular totales
    const totalIncome = incomes.reduce(
      (sum, transaction) => sum + Number(transaction.amount),
      0,
    );
    const totalExpense = expenses.reduce(
      (sum, transaction) => sum + Number(transaction.amount),
      0,
    );
  
    return {
      message: 'Datos del mes obtenidos',
      data: {
        month: format(new Date(year, month - 1, 1), 'MMMM'),
        year,
        income: totalIncome,
        expense: totalExpense,
        balance: totalIncome - totalExpense,
        incomeDetails: incomes,
        expenseDetails: expenses,
      },
      status: 200,
    };
  }
  
}

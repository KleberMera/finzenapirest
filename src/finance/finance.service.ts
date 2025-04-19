import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { GenerativeAiService } from 'src/ia/google/generative-ai/generative-ai.service';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FinanceService {
  constructor(
    private prisma: PrismaService,
    private generativeAiService: GenerativeAiService,
  ) {}

  async getFinancialSummary(userId: number, month: number, year: number) {
    // 1. Obtener el último salario
    const lastSalary = await this.prisma.salaryHistory.findFirst({
      where: { user_id: userId },
      orderBy: { effective_date: 'desc' },
    });

    // 2. Obtener transacciones de ingresos del mes
    const incomeTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId, type: 'Ingreso' },
        date: {
          gte: format({
            date: new Date(year, month - 1, 1),
            format: 'YYYY-MM-DD',
          }), // Inicio del mes
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
        },
      },
    });

    // 3. Obtener transacciones de gastos del mes
    const expenseTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId, type: 'Gasto' },
        date: {
          gte: format({
            date: new Date(year, month - 1, 1),
            format: 'YYYY-MM-DD',
          }), // Inicio del mes
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
        },
      },
    });

    // 4. Calcular ingresos y gastos totales
    const totalIncome =
      (lastSalary ? parseFloat(lastSalary.salary_amount.toString()) : 0) +
      incomeTransactions.reduce(
        (sum, tx) => sum + parseFloat(tx.amount.toString()),
        0,
      );
    const totalExpenses = expenseTransactions.reduce(
      (sum, tx) => sum + parseFloat(tx.amount.toString()),
      0,
    );

    // 5. Calcular porcentaje de gasto
    const expensePercentage =
      totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;

    // 6. Calcular porcentaje de días transcurridos
    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay = new Date().getDate();
    const daysPassedPercentage = (currentDay / daysInMonth) * 100;

    // 7. Generar recomendación
    let recommendation = '';
    if (expensePercentage > daysPassedPercentage) {
      recommendation = `Estás gastando demasiado rápido. Has gastado $${totalExpenses} de $${totalIncome} (${expensePercentage.toFixed(2)}%) en solo ${currentDay} días (${daysPassedPercentage.toFixed(2)}% del mes). Reduce tus gastos para que te alcance hasta fin de mes.`;
    } else {
      recommendation = `Estás gestionando bien tus gastos. Has gastado $${totalExpenses} de $${totalIncome} (${expensePercentage.toFixed(2)}%) y va el ${daysPassedPercentage.toFixed(2)}% del mes.`;
    }

    // Respuesta final
    return {
      totalIncome: totalIncome.toFixed(2),
      totalExpenses: totalExpenses.toFixed(2),
      expensePercentage: expensePercentage.toFixed(2),
      daysPassedPercentage: daysPassedPercentage.toFixed(2),
      recommendation,
    };
  }

  async getFinancialSummaryAI(userId: number, month: number, year: number) {
    // 1. Obtener el último salario
    const lastSalary = await this.prisma.salaryHistory.findFirst({
      where: { user_id: userId },
      orderBy: { effective_date: 'desc' },
    });

    // 2. Obtener transacciones de ingresos del mes con categorías
    const incomeTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId, type: 'Ingreso' },
        date: {
          gte: format({
            date: new Date(year, month - 1, 1),
            format: 'YYYY-MM-DD',
          }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
      },
      include: {
        category: true,
      },
    });

    // 3. Obtener transacciones de gastos del mes con categorías
    const expenseTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId, type: 'Gasto' },
        date: {
          gte: format({
            date: new Date(year, month - 1, 1),
            format: 'YYYY-MM-DD',
          }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
      },
      include: {
        category: true,
      },
    });

    // 4. Calcular ingresos y gastos totales
    const salaryAmount = lastSalary
      ? parseFloat(lastSalary.salary_amount.toString())
      : 0;
    const otherIncome = incomeTransactions.reduce(
      (sum, tx) => sum + parseFloat(tx.amount.toString()),
      0,
    );
    const totalIncome = salaryAmount + otherIncome;
    const totalExpenses = expenseTransactions.reduce(
      (sum, tx) => sum + parseFloat(tx.amount.toString()),
      0,
    );

    // 5. Calcular porcentaje de gasto
    const expensePercentage =
      totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;

    // 6. Calcular porcentaje de días transcurridos
    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay = Math.min(new Date().getDate(), daysInMonth);
    const daysPassedPercentage = (currentDay / daysInMonth) * 100;

    // 7. Preparar las transacciones para el prompt
    const formattedExpenses = expenseTransactions.map((tx) => ({
      descripcion: tx.description || tx.category.name,
      categoria: tx.category.name,
      monto: parseFloat(tx.amount.toString()).toFixed(2),
      fecha: new Date(tx.date).toLocaleDateString(),
    }));

    // 9. Calcular porcentaje de gastos considerando el tiempo transcurrido
    const expectedExpensesByTime = totalIncome * (daysPassedPercentage / 100);
    const timeAdjustedExpensePercentage =
      expectedExpensesByTime > 0
        ? (totalExpenses / expectedExpensesByTime) * 100
        : 0;

    // 8. Crear un prompt simplificado para la IA
    const prompt = `
      Soy tu asistente financiero personal. Analizaré tu situación financiera del mes ${month}/${year}:

      DATOS FINANCIEROS:
      - Has gastado $${totalExpenses.toFixed(2)} de tus $${totalIncome.toFixed(2)} de ingresos totales (${expensePercentage.toFixed(2)}%)
      - Ha transcurrido el ${daysPassedPercentage.toFixed(2)}% del mes
      - Gastos esperados según tiempo transcurrido: $${expectedExpensesByTime.toFixed(2)}
      - Tu ritmo de gastos actual: ${timeAdjustedExpensePercentage.toFixed(2)}% (>100% significa que gastas más rápido de lo recomendado)

      DESGLOSE DE GASTOS:
      ${JSON.stringify(formattedExpenses, null, 2)}

      Basándome en estos datos, te proporcionaré:
      1. Una evaluación clara de tu ritmo de gastos en relación con el tiempo transcurrido del mes
      2. Identificación de las categorías con mayor impacto en tu presupuesto
      3. Una recomendación específica y práctica para mejorar tu salud financiera

      Mi análisis será conciso, directo, corto y adaptado a tus patrones de gasto actuales.
    `;

    log(prompt);

    // 9. Obtener la recomendación de la IA
    const aiRecommendation =
      await this.generativeAiService.generateContent(prompt);

    // 10. Respuesta final simplificada
    return {
      totalIncome: totalIncome.toFixed(2),
      salaryAmount: salaryAmount.toFixed(2),
      otherIncome: otherIncome.toFixed(2),
      totalExpenses: totalExpenses.toFixed(2),
      netBalance: (totalIncome - totalExpenses).toFixed(2),
      expensePercentage: expensePercentage.toFixed(2),
      daysPassedPercentage: daysPassedPercentage.toFixed(2),
      expectedExpensesByTime: expectedExpensesByTime.toFixed(2),
      timeAdjustedExpensePercentage: timeAdjustedExpensePercentage.toFixed(2),
      recommendation: aiRecommendation,
    };
  }
}

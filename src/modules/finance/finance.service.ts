/* eslint-disable @typescript-eslint/no-base-to-string */
import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { GenerativeAiService } from 'src/config/generative-ai/generative-ai.service';

import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class FinanceService {
  constructor(
    private prisma: PrismaService,
    private generativeAiService: GenerativeAiService,
  ) {}

  async getFinancialSummary(userId: number, month: number, year: number) {
    //Comvertir a string en meses el numero de mes
   
    const formattedMonth = format({ date: new Date(year, month - 1, 1), format: 'MMMM' });
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
  
    // 2. Obtener TODAS las transacciones del mes en una sola consulta
    const allTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId },
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
  
    // 3. Separar transacciones por tipo
    const incomeTransactions = allTransactions.filter(tx => tx.category.type === 'Ingreso');
    const expenseTransactions = allTransactions.filter(tx => tx.category.type === 'Gasto');
  
    // 4. Obtener total de amortizaciones pagadas del mes
    const amortizationsResult = await this.prisma.amortization.aggregate({
      _sum: {
        quota: true,
      },
      where: {
        debt: {
          user_id: userId,
        },
        payment_date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
        status: 'Pagado',
      },
    });
  
    // 5. Obtener total de contribuciones a metas del mes
    const goalContribution = await this.prisma.goalContribution.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        goal: {
          user_id: userId,
        },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
      },
    });
  
    // 6. Extraer totales
    const totalDebtPaid = amortizationsResult._sum.quota?.toNumber() || 0;
    const totalGoalContributionPaid = goalContribution._sum.amount?.toNumber() || 0;
  
    // 7. Calcular ingresos y gastos totales
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
  
    // 8. Calcular gastos totales incluyendo deudas y metas
    const totalExpensesWithDebtAndGoals = totalExpenses + totalDebtPaid + totalGoalContributionPaid;
  
    // 9. Calcular porcentaje de gasto (incluyendo deudas y metas)
    const expensePercentage =
      totalIncome > 0 ? (totalExpensesWithDebtAndGoals / totalIncome) * 100 : 0;
  
    // 10. Calcular porcentaje de días transcurridos
    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay = Math.min(new Date().getDate(), daysInMonth);
    const daysPassedPercentage = (currentDay / daysInMonth) * 100;
  
    // 11. Calcular porcentaje de gastos considerando el tiempo transcurrido
    const expectedExpensesByTime = totalIncome * (daysPassedPercentage / 100);
    const timeAdjustedExpensePercentage =
      expectedExpensesByTime > 0
        ? (totalExpensesWithDebtAndGoals / expectedExpensesByTime) * 100
        : 0;
  
    // 12. Identificar categorías principales de gasto (SOLO gastos variables)
    const expensesByCategory = {};
    expenseTransactions.forEach((tx) => {
      const categoryName = tx.category.name;
      if (!expensesByCategory[categoryName]) {
        expensesByCategory[categoryName] = 0;
      }
      expensesByCategory[categoryName] += parseFloat(tx.amount.toString());
    });
  
    // 13. Crear categorías para vista completa (incluyendo compromisos)
    const allExpensesByCategory = { ...expensesByCategory };
    if (totalDebtPaid > 0) {
      allExpensesByCategory['Pagos de Deuda'] = totalDebtPaid;
    }
    if (totalGoalContributionPaid > 0) {
      allExpensesByCategory['Contribuciones a Metas'] = totalGoalContributionPaid;
    }
  
    // 14. Top categorías para vista completa
    const topCategories = Object.entries(allExpensesByCategory)
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .slice(0, 3)
      .map(([category, amount]) => ({
        category,
        amount: parseFloat(amount.toString()).toFixed(2),
        percentage: ((parseFloat(amount.toString()) / totalExpensesWithDebtAndGoals) * 100).toFixed(2)
      }));
  
    // 15. Top categorías de gastos variables (para recomendaciones)
    const topVariableExpenses = Object.entries(expensesByCategory)
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .slice(0, 2)
      .map(([category, amount]) => ({
        category,
        amount: parseFloat(amount.toString()).toFixed(2),
        percentage: ((parseFloat(amount.toString()) / totalExpenses) * 100).toFixed(2)
      }));
  
    // 16. Generar recomendación inteligente
    let recommendation = '';
    
    if (timeAdjustedExpensePercentage > 110) {
      if (totalExpenses > totalDebtPaid + totalGoalContributionPaid) {
        // Los gastos variables son significativos
        recommendation = `¡Alerta! Estás gastando demasiado rápido. Has usado el ${expensePercentage.toFixed(2)}% de tus ingresos cuando solo ha transcurrido el ${daysPassedPercentage.toFixed(2)}% del mes. Aunque tienes compromisos importantes (deudas: $${totalDebtPaid.toFixed(2)}, metas: $${totalGoalContributionPaid.toFixed(2)}), considera reducir gastos variables como ${topVariableExpenses[0]?.category || 'gastos opcionales'}.`;
      } else {
        // Los compromisos son la mayoría
        recommendation = `Has usado el ${expensePercentage.toFixed(2)}% de tus ingresos con el ${daysPassedPercentage.toFixed(2)}% del mes transcurrido. La mayoría son compromisos financieros (deudas: $${totalDebtPaid.toFixed(2)}, metas: $${totalGoalContributionPaid.toFixed(2)}). Mantén control sobre los gastos variables restantes.`;
      }
    } else if (timeAdjustedExpensePercentage > 100) {
      recommendation = `Estás gastando ligeramente por encima del ritmo recomendado (${expensePercentage.toFixed(2)}% usado con ${daysPassedPercentage.toFixed(2)}% del mes). ${topVariableExpenses.length > 0 ? `Vigila gastos en ${topVariableExpenses[0]?.category}` : 'Controla los gastos variables restantes'} para mantenerte dentro del presupuesto.`;
    } else if (timeAdjustedExpensePercentage > 90) {
      recommendation = `Tu ritmo de gastos es adecuado. Has usado el ${expensePercentage.toFixed(2)}% de tus ingresos con el ${daysPassedPercentage.toFixed(2)}% del mes transcurrido. Sigues un buen equilibrio presupuestario entre compromisos ($${(totalDebtPaid + totalGoalContributionPaid).toFixed(2)}) y gastos variables ($${totalExpenses.toFixed(2)}).`;
    } else {
      recommendation = `¡Excelente control de gastos! Solo has usado el ${expensePercentage.toFixed(2)}% de tus ingresos con el ${daysPassedPercentage.toFixed(2)}% del mes transcurrido. Tus compromisos financieros están bien manejados y tienes un buen saldo restante de $${(totalIncome - totalExpensesWithDebtAndGoals).toFixed(2)}.`;
    }
  
    // 17. Calcular saldo restante
    const remainingSalary = totalIncome - totalExpensesWithDebtAndGoals;
  
    // 18. Respuesta final completa
    return {
      'message': 'Financial summary generated successfully',
      'data': {
        totalIncome: totalIncome.toFixed(2),
        salaryAmount: salaryAmount.toFixed(2),
        otherIncome: otherIncome.toFixed(2),
        totalExpenses: totalExpenses.toFixed(2),
        totalDebtPaid: totalDebtPaid.toFixed(2),
        totalGoalContributionPaid: totalGoalContributionPaid.toFixed(2),
        totalExpensesWithDebtAndGoals: totalExpensesWithDebtAndGoals.toFixed(2),
        netBalance: remainingSalary.toFixed(2),
        expensePercentage: expensePercentage.toFixed(2),
        daysPassedPercentage: daysPassedPercentage.toFixed(2),
        expectedExpensesByTime: expectedExpensesByTime.toFixed(2),
        timeAdjustedExpensePercentage: timeAdjustedExpensePercentage.toFixed(2),
        topExpenseCategories: topCategories,
        topVariableExpenses: topVariableExpenses,
        recommendation,
      }
    };
  }

  // Nueva función para obtener resumen financiero por rango de fechas
  async getFinancialSummaryRange(
    userId: number, 
    startMonth: number, 
    startYear: number, 
    endMonth: number = startMonth, 
    endYear: number = startYear
  ) {
    // Crear fechas de inicio y fin para el rango
    const startDate = new Date(startYear, startMonth - 1, 1);
    const endDate = new Date(endYear, endMonth, 1); // Primer día del mes siguiente al final

    // Preparar array para almacenar resultados mensuales
    const monthlyResults = [];
    
    // Iterar por cada mes en el rango
    const currentDate = new Date(startDate);
    while (currentDate < endDate) {
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
      
      // Obtener el nombre del mes formateado
      const formattedMonth = format({ date: currentDate, format: 'MMMM' });
      const monthParsed = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);
      
      // Calcular fecha de inicio y fin del mes actual
      const monthStartDate = new Date(currentYear, currentMonth - 1, 1);
      const monthEndDate = new Date(currentYear, currentMonth, 1);
      
      // 1. Obtener el salario del mes específico
      const monthlySalary = await this.prisma.salaryHistory.findFirst({
        where: { 
          user_id: userId, 
          month_name: monthParsed,
          effective_date: {
            gte: format({ date: new Date(currentYear, 0, 1), format: 'YYYY-MM-DD' }),
            lt: format({ date: new Date(currentYear + 1, 0, 1), format: 'YYYY-MM-DD' }),
          }
        },
        orderBy: { effective_date: 'desc' },
      });
      
      // 2. Obtener transacciones del mes
      const monthTransactions = await this.prisma.transaction.findMany({
        where: {
          category: { user_id: userId },
          date: {
            gte: format({ date: monthStartDate, format: 'YYYY-MM-DD' }),
            lt: format({ date: monthEndDate, format: 'YYYY-MM-DD' }),
          },
        },
        include: {
          category: true,
        },
      });
      
      // 3. Separar transacciones por tipo
      const incomeTransactions = monthTransactions.filter(tx => tx.category.type === 'Ingreso');
      const expenseTransactions = monthTransactions.filter(tx => tx.category.type === 'Gasto');
      
      // 4. Obtener amortizaciones pagadas del mes
      const amortizationsResult = await this.prisma.amortization.aggregate({
        _sum: {
          quota: true,
        },
        where: {
          debt: {
            user_id: userId,
          },
          payment_date: {
            gte: format({ date: monthStartDate, format: 'YYYY-MM-DD' }),
            lt: format({ date: monthEndDate, format: 'YYYY-MM-DD' }),
          },
          status: 'Pagado',
        },
      });
      
      // 5. Obtener contribuciones a metas del mes
      const goalContribution = await this.prisma.goalContribution.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          goal: {
            user_id: userId,
          },
          date: {
            gte: format({ date: monthStartDate, format: 'YYYY-MM-DD' }),
            lt: format({ date: monthEndDate, format: 'YYYY-MM-DD' }),
          },
        },
      });
      
      // 6. Calcular totales
      const totalDebtPaid = amortizationsResult._sum.quota?.toNumber() || 0;
      const totalGoalContributionPaid = goalContribution._sum.amount?.toNumber() || 0;
      
      const salaryAmount = monthlySalary
        ? parseFloat(monthlySalary.salary_amount.toString())
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
      
      const totalExpensesWithDebtAndGoals = totalExpenses + totalDebtPaid + totalGoalContributionPaid;

      const expensePercentage =
      totalIncome > 0 ? (totalExpensesWithDebtAndGoals / totalIncome) * 100 : 0;
      
      // 7. Añadir resultados del mes al array solo si hay datos
      if (totalIncome > 0 || totalExpensesWithDebtAndGoals > 0) {
        monthlyResults.push({
          month: currentMonth,
          year: currentYear,
          monthName: monthParsed,
          totalIncome: totalIncome,
          salaryAmount: salaryAmount,
          otherIncome: otherIncome,
          totalExpenses: totalExpenses,
          totalDebtPaid: totalDebtPaid,
          totalGoalContributionPaid: totalGoalContributionPaid,
          totalExpensesWithDebtAndGoals: totalExpensesWithDebtAndGoals,
          netBalance: (totalIncome - totalExpensesWithDebtAndGoals),
          expensePercentage: expensePercentage,
        });
      }
      
      // Avanzar al siguiente mes
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    
    // Ordenar resultados por fecha (mes-año)
    monthlyResults.sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    });
    
    return {
      message: 'Financial summary range generated successfully',
      data: monthlyResults
    };
  }

  async getFinancialSummaryAI(userId: number, month: number, year: number) {
    // 1. Obtener el último salario
    const lastSalary = await this.prisma.salaryHistory.findFirst({
      where: { user_id: userId },
      orderBy: { effective_date: 'desc' },
    });
  
    // 2. Obtener TODAS las transacciones del mes en una sola consulta
    const allTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId },
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
  
    // 3. Separar transacciones por tipo
    const incomeTransactions = allTransactions.filter(tx => tx.category.type === 'Ingreso');
    const expenseTransactions = allTransactions.filter(tx => tx.category.type === 'Gasto');
  
    // 4. Obtener total de amortizaciones pagadas del mes
    const amortizationsResult = await this.prisma.amortization.aggregate({
      _sum: {
        quota: true,
      },
      where: {
        debt: {
          user_id: userId,
        },
        payment_date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
        status: 'Pagado',
      },
    });
  
    // 5. Obtener total de contribuciones a metas del mes
    const goalContribution = await this.prisma.goalContribution.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        goal: {
          user_id: userId,
        },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
      },
    });
  
    // 6. Extraer totales
    const totalDebtPaid = amortizationsResult._sum.quota?.toNumber() || 0;
    const totalGoalContributionPaid = goalContribution._sum.amount?.toNumber() || 0;
  
    // 7. Calcular ingresos y gastos totales
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
  
    // 8. Calcular gastos totales incluyendo deudas y metas
    const totalExpensesWithDebtAndGoals = totalExpenses + totalDebtPaid + totalGoalContributionPaid;
  
    // 9. Calcular porcentaje de gasto (incluyendo deudas y metas)
    const expensePercentage =
      totalIncome > 0 ? (totalExpensesWithDebtAndGoals / totalIncome) * 100 : 0;
  
    // 10. Calcular porcentaje de días transcurridos
    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay = Math.min(new Date().getDate(), daysInMonth);
    const daysPassedPercentage = (currentDay / daysInMonth) * 100;
  
    // 11. Calcular porcentaje de gastos considerando el tiempo transcurrido
    const expectedExpensesByTime = totalIncome * (daysPassedPercentage / 100);
    const timeAdjustedExpensePercentage =
      expectedExpensesByTime > 0
        ? (totalExpensesWithDebtAndGoals / expectedExpensesByTime) * 100
        : 0;
  
    // 12. Preparar las transacciones para el prompt (gastos variables)
    const formattedExpenses = expenseTransactions.map((tx) => ({
      descripcion: tx.description || tx.category.name,
      categoria: tx.category.name,
      monto: parseFloat(tx.amount.toString()).toFixed(2),
      fecha: new Date(tx.date).toLocaleDateString(),
    }));
  
    // 13. Preparar categorías para el prompt
    const expensesByCategory = {};
    expenseTransactions.forEach((tx) => {
      const categoryName = tx.category.name;
      if (!expensesByCategory[categoryName]) {
        expensesByCategory[categoryName] = 0;
      }
      expensesByCategory[categoryName] += parseFloat(tx.amount.toString());
    });
  
    const topVariableExpenses = Object.entries(expensesByCategory)
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .slice(0, 3)
      .map(([category, amount]) => ({
        categoria: category,
        monto: parseFloat(amount.toString()).toFixed(2),
        porcentaje: ((parseFloat(amount.toString()) / totalExpenses) * 100).toFixed(2)
      }));
  
    // 14. Crear un prompt mejorado para la IA
    const prompt = `
      Soy tu asistente financiero personal. Analizaré tu situación financiera del mes ${month}/${year}:
  
      RESUMEN FINANCIERO COMPLETO:
      - Ingresos totales: $${totalIncome.toFixed(2)} (Salario: $${salaryAmount.toFixed(2)} + Otros: $${otherIncome.toFixed(2)})
      - Gastos variables: $${totalExpenses.toFixed(2)}
      - Pagos de deuda: $${totalDebtPaid.toFixed(2)}
      - Contribuciones a metas: $${totalGoalContributionPaid.toFixed(2)}
      - TOTAL GASTADO: $${totalExpensesWithDebtAndGoals.toFixed(2)} (${expensePercentage.toFixed(2)}% de ingresos)
      - Saldo restante: $${(totalIncome - totalExpensesWithDebtAndGoals).toFixed(2)}
  
      ANÁLISIS TEMPORAL:
      - Ha transcurrido el ${daysPassedPercentage.toFixed(2)}% del mes
      - Gastos esperados según tiempo: $${expectedExpensesByTime.toFixed(2)}
      - Tu ritmo de gastos actual: ${timeAdjustedExpensePercentage.toFixed(2)}% (>100% = gastas más rápido de lo ideal)
  
      COMPROMISOS FINANCIEROS:
      - Pagos de deuda del mes: $${totalDebtPaid.toFixed(2)} (${totalDebtPaid > 0 ? 'compromiso fijo positivo' : 'sin pagos'})
      - Metas de ahorro del mes: $${totalGoalContributionPaid.toFixed(2)} (${totalGoalContributionPaid > 0 ? 'compromiso positivo' : 'sin contribuciones'})
  
      TOP CATEGORÍAS DE GASTOS VARIABLES:
      ${JSON.stringify(topVariableExpenses, null, 2)}
  
      DETALLE DE GASTOS VARIABLES:
      ${JSON.stringify(formattedExpenses, null, 2)}
  
      IMPORTANTE: Los pagos de deuda y contribuciones a metas son compromisos financieros positivos, NO son gastos problemáticos.
  
      Proporciona un análisis que incluya:
      1. Evaluación del ritmo de gastos considerando que tienes compromisos financieros importantes
      2. Identificación de patrones en gastos variables (categorías donde puedes optimizar)
      3. Recomendación específica que distinga entre gastos controlables vs compromisos fijos
      4. Una perspectiva positiva sobre el manejo de deudas y metas si aplica
  
      Mantén el análisis conciso, práctico y motivador.
    `;
  
    log(prompt);
  
    // 15. Obtener la recomendación de la IA
    const aiRecommendation =
      await this.generativeAiService.generateContent(prompt);
  
    // 16. Respuesta final completa
    return {
      'message': 'Financial summary generated successfully',
      'data': {
        totalIncome: totalIncome.toFixed(2),
        salaryAmount: salaryAmount.toFixed(2),
        otherIncome: otherIncome.toFixed(2),
        totalExpenses: totalExpenses.toFixed(2),
        totalDebtPaid: totalDebtPaid.toFixed(2),
        totalGoalContributionPaid: totalGoalContributionPaid.toFixed(2),
        totalExpensesWithDebtAndGoals: totalExpensesWithDebtAndGoals.toFixed(2),
        netBalance: (totalIncome - totalExpensesWithDebtAndGoals).toFixed(2),
        expensePercentage: expensePercentage.toFixed(2),
        daysPassedPercentage: daysPassedPercentage.toFixed(2),
        expectedExpensesByTime: expectedExpensesByTime.toFixed(2),
        timeAdjustedExpensePercentage: timeAdjustedExpensePercentage.toFixed(2),
        recommendation: aiRecommendation,
      }
    };
  }
}

import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';
import { GenerativeAiService } from 'src/ia/google/generative-ai/generative-ai.service';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FinanceService {
    constructor(private prisma: PrismaService, private generativeAiService: GenerativeAiService) {}

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
            gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }), // Inicio del mes
            lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
          },
      },
    });

    // 3. Obtener transacciones de gastos del mes
    const expenseTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId, type: 'Gasto' },
        date: {
            gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }), // Inicio del mes
            lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }), // Inicio del siguiente mes
          },
    }});

    // 4. Calcular ingresos y gastos totales
    const totalIncome =
      (lastSalary ? parseFloat(lastSalary.salary_amount.toString()) : 0) +
      incomeTransactions.reduce((sum, tx) => sum + parseFloat(tx.amount.toString()), 0);
    const totalExpenses = expenseTransactions.reduce(
      (sum, tx) => sum + parseFloat(tx.amount.toString()),
      0,
    );

    // 5. Calcular porcentaje de gasto
    const expensePercentage = totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;

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
  
    // 2. Obtener transacciones de ingresos del mes
    const incomeTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId, type: 'Ingreso' },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
      },
    });
  
    // 3. Obtener transacciones de gastos del mes
    const expenseTransactions = await this.prisma.transaction.findMany({
      where: {
        category: { user_id: userId, type: 'Gasto' },
        date: {
          gte: format({ date: new Date(year, month - 1, 1), format: 'YYYY-MM-DD' }),
          lt: format({ date: new Date(year, month, 1), format: 'YYYY-MM-DD' }),
        },
      },
    });
  
    // 4. Calcular ingresos y gastos totales
    const totalIncome =
      (lastSalary ? parseFloat(lastSalary.salary_amount.toString()) : 0) +
      incomeTransactions.reduce((sum, tx) => sum + parseFloat(tx.amount.toString()), 0);
    const totalExpenses = expenseTransactions.reduce(
      (sum, tx) => sum + parseFloat(tx.amount.toString()),
      0,
    );
  
    // 5. Calcular porcentaje de gasto
    const expensePercentage = totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;
  
    // 6. Calcular porcentaje de días transcurridos
    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay = new Date().getDate();
    const daysPassedPercentage = (currentDay / daysInMonth) * 100;
  
    // 7. Crear un prompt para la IA
    const prompt = `
      Soy un asistente financiero. Aquí están los datos del usuario para el mes ${month}/${year}:
      - Ingresos totales: $${totalIncome.toFixed(2)}
      - Gastos totales: $${totalExpenses.toFixed(2)}
      - Porcentaje de gasto: ${expensePercentage.toFixed(2)}%
      - Porcentaje de días transcurridos: ${daysPassedPercentage.toFixed(2)}%
      
      Basándote en estos datos, proporciona una recomendación financiera detallada y personalizada para el usuario. 
      Evalúa si está gastando demasiado rápido o si está gestionando bien sus finanzas. 
      Ofrece consejos específicos y prácticos para mejorar su situación financiera.
      Dame todo eso de la mejor manera posible que sea claro y presiso, no quiero mucho contenido.
    `;
  
    // 8. Obtener la recomendación de la IA
    const aiRecommendation = await this.generativeAiService.generateContent(prompt);
  
    // 9. Respuesta final
    return {
      totalIncome: totalIncome.toFixed(2),
      totalExpenses: totalExpenses.toFixed(2),
      expensePercentage: expensePercentage.toFixed(2),
      daysPassedPercentage: daysPassedPercentage.toFixed(2),
      recommendation: aiRecommendation,
    };
  }
}

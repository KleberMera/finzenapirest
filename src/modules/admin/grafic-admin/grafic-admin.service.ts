/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { format, addMonth, monthStart, monthEnd } from '@formkit/tempo';

interface CategoryExpenseDistribution {
  categoryId: number;
  categoryName: string;
  icon: string;
  totalAmount: number;
  transactionCount: number;
  percentage: number;
  userCount?: number; // Para admin: cantidad de usuarios que usaron esta categoría
}

interface TrendData {
  period: string; // "2024-01" formato
  categoryId: number;
  categoryName: string;
  icon: string;
  totalAmount: number;
  transactionCount: number;
  userCount?: number; // Para admin: cantidad de usuarios que usaron esta categoría en este período
}

@Injectable()
export class GraficAdminService {
    constructor(private readonly prisma: PrismaService) {}

    /**
     * Obtiene la distribución de gastos por categoría para un mes y año específico (Admin)
     * @param month - Mes (1-12)
     * @param year - Año (ej: 2024)
     * @returns Distribución de gastos por categoría con porcentajes para todos los usuarios
     */
    async getExpenseDistributionByMonth(
        month: number, 
        year: number
    ): Promise<CategoryExpenseDistribution[]> {
        // Validar parámetros
        if (month < 1 || month > 12) {
            throw new Error('El mes debe estar entre 1 y 12');
        }

        // Crear fecha del primer día del mes usando tempo
        const firstDayOfMonth = new Date(year, month - 1, 1);
        const startDate = format(monthStart(firstDayOfMonth), 'YYYY-MM-DD');
        
        // Crear fecha del último día del mes usando tempo
        const endDate = format(monthEnd(firstDayOfMonth), 'YYYY-MM-DD');

        // Obtener transacciones de gastos del mes específico para todos los usuarios
        const transactions = await this.prisma.transaction.findMany({
            where: {
                category: {
                    type: 'Gasto' // Solo gastos
                },
                date: {
                    gte: startDate,
                    lte: endDate
                }
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        icon: true,
                        user: {
                            select: {
                                id: true,
                                name: true,
                                username: true
                            }
                        }
                    }
                }
            }
        });

        // Agrupar por categoría y calcular totales
        const categoryMap = new Map<number, {
            categoryName: string;
            icon: string;
            totalAmount: number;
            transactionCount: number;
            userIds: Set<number>; // Para trackear usuarios únicos
        }>();

        let grandTotal = 0;

        transactions.forEach(transaction => {
            const categoryId = transaction.category.id;
            const amount = Number(transaction.amount);
            const userId = transaction.category.user.id;
            
            grandTotal += amount;

            if (categoryMap.has(categoryId)) {
                const existing = categoryMap.get(categoryId)!;
                existing.totalAmount += amount;
                existing.transactionCount += 1;
                existing.userIds.add(userId);
            } else {
                categoryMap.set(categoryId, {
                    categoryName: transaction.category.name || 'Sin nombre',
                    icon: transaction.category.icon || '💰',
                    totalAmount: amount,
                    transactionCount: 1,
                    userIds: new Set([userId])
                });
            }
        });

        // Convertir a array y calcular porcentajes
        const result: CategoryExpenseDistribution[] = Array.from(categoryMap.entries())
            .map(([categoryId, data]) => ({
                categoryId,
                categoryName: data.categoryName,
                icon: data.icon,
                totalAmount: data.totalAmount,
                transactionCount: data.transactionCount,
                percentage: grandTotal > 0 ? Number(((data.totalAmount / grandTotal) * 100).toFixed(2)) : 0,
                userCount: data.userIds.size
            }))
            .sort((a, b) => b.totalAmount - a.totalAmount); // Ordenar por monto descendente

        return result;
    }

    /**
     * Obtiene la tendencia de distribución de gastos por categoría en un rango de fechas (Admin)
     * @param startMonth - Mes inicial (1-12)
     * @param startYear - Año inicial
     * @param endMonth - Mes final (1-12)
     * @param endYear - Año final
     * @returns Tendencia de gastos por categoría y período para todos los usuarios
     */
    async getExpenseDistributionTrend(
        startMonth: number,
        startYear: number,
        endMonth: number,
        endYear: number
    ): Promise<{
        trendData: TrendData[];
        summary: CategoryExpenseDistribution[];
    }> {
        // Validar parámetros
        if (startMonth < 1 || startMonth > 12 || endMonth < 1 || endMonth > 12) {
            throw new Error('Los meses deben estar entre 1 y 12');
        }

        // Crear fechas usando tempo
        const startFirstDay = new Date(startYear, startMonth - 1, 1);
        const startDate = format(monthStart(startFirstDay), 'YYYY-MM-DD');
        
        const endFirstDay = new Date(endYear, endMonth - 1, 1);
        const endDate = format(monthEnd(endFirstDay), 'YYYY-MM-DD');

        // Obtener todas las transacciones del rango para todos los usuarios
        const transactions = await this.prisma.transaction.findMany({
            where: {
                category: {
                    type: 'Gasto'
                },
                date: {
                    gte: startDate,
                    lte: endDate
                }
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        icon: true,
                        user: {
                            select: {
                                id: true,
                                name: true,
                                username: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                date: 'asc'
            }
        });

        // Agrupar por período (año-mes) y categoría
        const trendMap = new Map<string, Map<number, {
            categoryName: string;
            icon: string;
            totalAmount: number;
            transactionCount: number;
            userIds: Set<number>;
        }>>();

        // Para el resumen general
        const summaryMap = new Map<number, {
            categoryName: string;
            icon: string;
            totalAmount: number;
            transactionCount: number;
            userIds: Set<number>;
        }>();

        let grandTotal = 0;

        transactions.forEach(transaction => {
            // Parsear la fecha string usando formato ISO
            const transactionDate = new Date(transaction.date);
            const period = format(transactionDate, 'YYYY-MM');
            const categoryId = transaction.category.id;
            const amount = Number(transaction.amount);
            const userId = transaction.category.user.id;
            
            grandTotal += amount;

            // Para la tendencia por período
            if (!trendMap.has(period)) {
                trendMap.set(period, new Map());
            }
            
            const periodMap = trendMap.get(period)!;
            if (periodMap.has(categoryId)) {
                const existing = periodMap.get(categoryId)!;
                existing.totalAmount += amount;
                existing.transactionCount += 1;
                existing.userIds.add(userId);
            } else {
                periodMap.set(categoryId, {
                    categoryName: transaction.category.name || 'Sin nombre',
                    icon: transaction.category.icon || '💰',
                    totalAmount: amount,
                    transactionCount: 1,
                    userIds: new Set([userId])
                });
            }

            // Para el resumen general
            if (summaryMap.has(categoryId)) {
                const existing = summaryMap.get(categoryId)!;
                existing.totalAmount += amount;
                existing.transactionCount += 1;
                existing.userIds.add(userId);
            } else {
                summaryMap.set(categoryId, {
                    categoryName: transaction.category.name || 'Sin nombre',
                    icon: transaction.category.icon || '💰',
                    totalAmount: amount,
                    transactionCount: 1,
                    userIds: new Set([userId])
                });
            }
        });

        // Convertir tendencia a array
        const trendData: TrendData[] = [];
        trendMap.forEach((categoryMap, period) => {
            categoryMap.forEach((data, categoryId) => {
                trendData.push({
                    period,
                    categoryId,
                    categoryName: data.categoryName,
                    icon: data.icon,
                    totalAmount: data.totalAmount,
                    transactionCount: data.transactionCount,
                    userCount: data.userIds.size
                });
            });
        });

        // Ordenar por período y luego por monto
        trendData.sort((a, b) => {
            if (a.period !== b.period) {
                return a.period.localeCompare(b.period);
            }
            return b.totalAmount - a.totalAmount;
        });

        // Convertir resumen a array con porcentajes
        const summary: CategoryExpenseDistribution[] = Array.from(summaryMap.entries())
            .map(([categoryId, data]) => ({
                categoryId,
                categoryName: data.categoryName,
                icon: data.icon,
                totalAmount: data.totalAmount,
                transactionCount: data.transactionCount,
                percentage: grandTotal > 0 ? Number(((data.totalAmount / grandTotal) * 100).toFixed(2)) : 0,
                userCount: data.userIds.size
            }))
            .sort((a, b) => b.totalAmount - a.totalAmount);

        return {
            trendData,
            summary
        };
    }

    /**
     * Método auxiliar para obtener los meses entre dos fechas usando tempo
     * @param startYear - Año inicial
     * @param startMonth - Mes inicial
     * @param endYear - Año final  
     * @param endMonth - Mes final
     * @returns Array de períodos en formato "YYYY-MM"
     */
    private getMonthsBetweenDates(
        startYear: number, 
        startMonth: number, 
        endYear: number, 
        endMonth: number
    ): string[] {
        const periods: string[] = [];
        
        // Crear fecha inicial
        let currentDate = new Date(startYear, startMonth - 1, 1);
        const endDate = new Date(endYear, endMonth - 1, 1);

        while (currentDate <= endDate) {
            periods.push(format(currentDate, 'YYYY-MM'));
            currentDate = addMonth(currentDate, 1);
        }

        return periods;
    }
}
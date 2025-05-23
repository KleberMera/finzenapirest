/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { format, monthStart, monthEnd } from '@formkit/tempo';
import { log } from 'console';

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
        log(startDate);
        
        // Crear fecha del último día del mes usando tempo
        const endDate = format(monthEnd(firstDayOfMonth), 'YYYY-MM-DD');
        log(endDate);

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

        // Agrupar por nombre de categoría (ignorando ID) y calcular totales
        const categoryMap = new Map<string, {
            categoryId: number; // Guardamos el primer ID que encontramos
            icon: string;
            totalAmount: number;
            transactionCount: number;
            userIds: Set<number>; // Para trackear usuarios únicos
        }>();

        let grandTotal = 0;

        transactions.forEach(transaction => {
            const categoryName = transaction.category.name || 'Sin nombre';
            const amount = Number(transaction.amount);
            const userId = transaction.category.user.id;
            
            grandTotal += amount;

            if (categoryMap.has(categoryName)) {
                const existing = categoryMap.get(categoryName)!;
                existing.totalAmount += amount;
                existing.transactionCount += 1;
                existing.userIds.add(userId);
            } else {
                categoryMap.set(categoryName, {
                    categoryId: transaction.category.id, // Guardamos el primer ID
                    icon: transaction.category.icon || '💰',
                    totalAmount: amount,
                    transactionCount: 1,
                    userIds: new Set([userId])
                });
            }
        });

        // Convertir a array y calcular porcentajes
        const result: CategoryExpenseDistribution[] = Array.from(categoryMap.entries())
            .map(([categoryName, data]) => ({
                categoryId: data.categoryId, // Usamos el primer ID que encontramos
                categoryName,
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

        // Agrupar por período (año-mes) y nombre de categoría
        const trendMap = new Map<string, Map<string, {
            categoryId: number; // Mantenemos el primer ID encontrado
            icon: string;      // Mantenemos el primer ícono encontrado
            totalAmount: number;
            transactionCount: number;
            userIds: Set<number>;
        }>>();

        // Para el resumen general (agrupado por nombre de categoría)
        const summaryMap = new Map<string, {
            categoryId: number; // Mantenemos el primer ID encontrado
            icon: string;      // Mantenemos el primer ícono encontrado
            totalAmount: number;
            transactionCount: number;
            userIds: Set<number>;
        }>();

        let grandTotal = 0;

        transactions.forEach(transaction => {
            // Parsear la fecha string usando formato ISO
            const transactionDate = new Date(transaction.date);
            const period = format(transactionDate, 'YYYY-MM');
            const categoryName = transaction.category.name || 'Sin nombre';
            const amount = Number(transaction.amount);
            const userId = transaction.category.user.id;
            
            grandTotal += amount;

            // Para la tendencia por período (agrupado por nombre de categoría)
            if (!trendMap.has(period)) {
                trendMap.set(period, new Map());
            }
            
            const periodMap = trendMap.get(period)!;
            if (periodMap.has(categoryName)) {
                const existing = periodMap.get(categoryName)!;
                existing.totalAmount += amount;
                existing.transactionCount += 1;
                existing.userIds.add(userId);
            } else {
                periodMap.set(categoryName, {
                    categoryId: transaction.category.id, // Primer ID encontrado
                    icon: transaction.category.icon || '💰',
                    totalAmount: amount,
                    transactionCount: 1,
                    userIds: new Set([userId])
                });
            }

            // Para el resumen general (agrupado por nombre de categoría)
            if (summaryMap.has(categoryName)) {
                const existing = summaryMap.get(categoryName)!;
                existing.totalAmount += amount;
                existing.transactionCount += 1;
                existing.userIds.add(userId);
            } else {
                summaryMap.set(categoryName, {
                    categoryId: transaction.category.id, // Primer ID encontrado
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
            categoryMap.forEach((data, categoryName) => {
                trendData.push({
                    period,
                    categoryId: data.categoryId,
                    categoryName: categoryName,
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
            .map(([categoryName, data]) => ({
                categoryId: data.categoryId,
                categoryName: categoryName,
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

 
}
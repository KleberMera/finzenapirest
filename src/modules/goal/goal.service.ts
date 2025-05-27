
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';

import { GoalContributionDTO, GoalDTO } from 'src/models/meta';



@Injectable()
export class GoalService {
  constructor(private readonly prismaService: PrismaService) {}

  //Crear meta
  async createGoal(goal: GoalDTO) {
    try {
      const newGoal = await this.prismaService.goal.create({
        data: {
          ...goal,
        },
      });
      return {
        message: 'Meta creada con éxito',
        data: newGoal,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al crear la meta: ${error.message}`);
    }
  }

  //Crear Seguimiento de meta por id de usuario y id de meta
  async createGoalTracking(goalContribution: GoalContributionDTO, goalId: number, userId: number) {
    try {
       
        const goalExists = await this.prismaService.goal.findUnique({
            where: {
                id: goalId,
                user_id: userId,
                
                
            },
        });
        if (!goalExists) {
            throw new Error('Meta no encontrada');
        }
        const newGoalContribution = await this.prismaService.goalContribution.create({
            data: {
                ...goalContribution,
                goal_id: goalId,
               
            },
        });
        return {
            message: 'Aporte guardado exitosamente',
            data: newGoalContribution,
        };
      
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(
        `Error al crear el aporte a meta: ${error.message}`,
      );
    }
  }

  // Obtener todos los metas de un usuario
  async getGoalByUserId(userId: number) {
    const goals = await this.prismaService.goal.findMany({
      where: {
        user_id: Number(userId),
      },
    });
    return {
      message: 'Metas cargadas con éxito',
      data: goals,
    };
  }

  //Obetner seguimientos de meta por id de usuario y id de meta
  async getGoalTrackingByUserIdAndGoalId(userId: number, goalId: number) {
    const goalContributions = await this.prismaService.goalContribution.findMany({
      where: {
        goal_id: goalId,
        goal: {
          user_id: userId,
        },
      },
    });
    return {
      message: 'Aportes a meta cargados con éxito',
      data: goalContributions,
    };
  }

  async getGoalProgress(userId: number, goalId: number) {
    try {
      // Obtener la meta con sus contribuciones
      const goal = await this.prismaService.goal.findUnique({
        where: {
          id: goalId,
          user_id: userId,
        },
        include: {
          contributions: true,
        },
      });

      if (!goal) {
        throw new Error('Meta no encontrada');
      }

      // Calcular la suma total de contribuciones
      const totalContributed = goal.contributions.reduce(
        (sum, contribution) => sum + Number(contribution.amount),
        0
      );

      // Calcular el porcentaje de progreso financiero
      const targetAmount = Number(goal.target_amount);
      const financialProgress = targetAmount > 0 ? (totalContributed / targetAmount) * 100 : 0;

      // Calcular progreso basado en tiempo (si hay fechas definidas)
      let timeProgress = null;
      let daysRemaining = null;
      let isOverdue = false;

      if (goal.start_date && goal.deadline) {
        const today = new Date();
        const startDate = new Date(goal.start_date);
        const deadlineDate = new Date(goal.deadline);

        // Validar que las fechas sean correctas
        if (!isNaN(startDate.getTime()) && !isNaN(deadlineDate.getTime())) {
          // Calcular el tiempo total del objetivo en días
          const totalDays = Math.max(1, Math.ceil((deadlineDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
          
          // Calcular días transcurridos
          const daysElapsed = Math.max(0, Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
          
          // Calcular días restantes
          daysRemaining = Math.max(0, Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
          
          // Calcular progreso de tiempo
          timeProgress = Math.min(100, (daysElapsed / totalDays) * 100);
          
          // Determinar si está vencido
          isOverdue = today > deadlineDate;
        }
      }

   

      // Determinar estado de progreso
      let progressStatus = 'En progreso';
      if (financialProgress >= 100) {
        progressStatus = 'Completado';
      } else if (isOverdue) {
        progressStatus = 'Vencido';
      } else if (goal.status !== 'Active') {
        progressStatus = 'Cancelado';
      }

      return {
        message: 'Progreso de meta obtenido con éxito',
        data: {
          progress: {
            targetAmount: Number(goal.target_amount),
            startDate: goal.start_date,
      
            deadline: goal.deadline,
            totalContributed,
            contributionsCount: goal.contributions.length,
            financialProgress: parseFloat(financialProgress.toFixed(2)),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            timeProgress: timeProgress !== null ? parseFloat(timeProgress.toFixed(2)) : null,
            daysRemaining,
            isOverdue,
            progressStatus,
            remainingAmount: Math.max(0, targetAmount - totalContributed),
            lastContribution: goal.contributions.length > 0 
              ? {
                  amount: Number(goal.contributions[goal.contributions.length - 1].amount),
                  date: goal.contributions[goal.contributions.length - 1].date,
                 
                }
              : null,
          },
        },
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al obtener progreso de la meta: ${error.message}`);
    }
  }



  /////////

  // async getGoalProgress(userId: number, goalId: number): Promise<GoalProgressResponse> {
  //   // Obtener la meta con sus contribuciones
  //   const goal = await this.prismaService.goal.findFirst({
  //     where: {
  //       id: goalId,
  //       user_id: userId,
  //     },
  //     include: {
  //       contributions: {
  //         orderBy: {
  //           date: 'desc'
  //         }
  //       }
  //     }
  //   });

  //   if (!goal) {
  //     throw new Error('Meta no encontrada');
  //   }

  //   // Calcular el monto total de contribuciones
  //   const currentAmount = goal.contributions.reduce((total, contribution) => {
  //     return total + Number(contribution.amount);
  //   }, 0);

  //   const targetAmount = Number(goal.target_amount);
  //   const progressPercentage = targetAmount > 0 ? (currentAmount / targetAmount) * 100 : 0;
  //   const remainingAmount = Math.max(0, targetAmount - currentAmount);

  //   // Calcular progreso temporal
  //   const today = format(new Date(), 'YYYY-MM-DD', 'es');
  //   let daysTotal = 0;
  //   let daysElapsed = 0;
  //   let daysRemaining = 0;
  //   let timeProgressPercentage = 0;

  //   if (goal.start_date && goal.deadline) {
  //     const startDate = format(goal.start_date, 'YYYY-MM-DD', 'es');
  //     const endDate = format(goal.deadline, 'YYYY-MM-DD', 'es');
      
  //     daysTotal = diffDays(startDate, endDate);
  //     daysElapsed = diffDays(startDate, today);
  //     daysRemaining = Math.max(0, diffDays(today, endDate));
      
  //     if (daysTotal > 0) {
  //       timeProgressPercentage = Math.min(100, (daysElapsed / daysTotal) * 100);
  //     }
  //   }

  //   // Determinar si está en el camino correcto
  //   const isOnTrack = timeProgressPercentage > 0 ? 
  //     progressPercentage >= timeProgressPercentage : 
  //     progressPercentage > 0;

  //   // Calcular estadísticas adicionales
  //   const contributionsCount = goal.contributions.length;
  //   const lastContributionDate = goal.contributions.length > 0 ? 
  //     goal.contributions[0].date : null;

  //   // Calcular promedio mensual de contribuciones
  //   let averageMonthlyContribution = 0;
  //   if (goal.start_date && contributionsCount > 0) {
  //     const startDate = format(goal.start_date, 'YYYY-MM-DD', 'es');
  //     const monthsElapsed = Math.max(1, diffMonths(startDate, today));
  //     averageMonthlyContribution = currentAmount / monthsElapsed;
  //   }

  //   // Proyectar fecha de finalización basada en el progreso actual
  //   let projectedCompletionDate: string | null = null;
  //   if (averageMonthlyContribution > 0 && remainingAmount > 0) {
  //     const monthsNeeded = remainingAmount / averageMonthlyContribution;
  //     projectedCompletionDate = addMonth(today, Math.ceil(monthsNeeded)).toString();
  //   }

  //   return {
  //     goalId: goal.id,
  //     goalName: goal.name,
  //     targetAmount,
  //     currentAmount,
  //     progressPercentage: Math.min(100, progressPercentage),
  //     timeProgressPercentage: Math.min(100, timeProgressPercentage),
  //     remainingAmount,
  //     daysTotal,
  //     daysElapsed: Math.max(0, daysElapsed),
  //     daysRemaining,
  //     status: goal.status,
  //     startDate: goal.start_date,
  //     deadline: goal.deadline,
  //     isOnTrack,
  //     contributionsCount,
  //     lastContributionDate,
  //     averageMonthlyContribution,
  //     projectedCompletionDate
  //   };
  // }
}

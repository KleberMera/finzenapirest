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
  async createGoalTracking(goalContribution: GoalContributionDTO) {
    try {
      const newGoalContribution =
        await this.prismaService.goalContribution.create({
          data: {
            ...goalContribution,
          },
        });
      return {
        message: 'Seguimiento de meta creado con éxito',
        data: newGoalContribution,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(
        `Error al crear el seguimiento de meta: ${error.message}`,
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
      message: 'Seguimientos de meta cargados con éxito',
      data: goalContributions,
    };
  }
}

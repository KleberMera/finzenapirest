import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GoalService } from './goal.service';
import { GoalContributionDTO, GoalDTO } from 'src/models/meta';

@Controller('goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  //Crear meta
  @Post()
  async createGoal(@Body() goal: GoalDTO) {
    return await this.goalService.createGoal(goal);
  }

  //Crear Seguimiento de meta por id de usuario y id de meta
  @Post('contribution/:goalId/:userId')
  async createGoalTracking(@Body() goalTracking: GoalContributionDTO, @Param('goalId') goalId: number, @Param('userId') userId: number) {
    return await this.goalService.createGoalTracking(goalTracking, Number(goalId), Number(userId));
  }

  // Obtener todos los metas de un usuario
  @Get('user/:userId')
  async getGoalByUserId(@Param('userId') userId: number) {
    return await this.goalService.getGoalByUserId(Number(userId));
  }

  @Get('contribution/user/:userId/:goalId')
  async getGoalTrackingByUserIdAndGoalId(
    @Param('userId') userId: number,
    @Param('goalId') goalId: number,
  ) {
    return await this.goalService.getGoalTrackingByUserIdAndGoalId(
      Number(userId),
      Number(goalId),
    );
  }


  @Get('progress/:userId/:goalId')
  async getGoalProgress(
    @Param('userId') userId: number,
    @Param('goalId') goalId: number,
  ) {
    return await this.goalService.getGoalProgress(Number(userId), Number(goalId));
  }


  @Delete('contribution/:goalContributionId')
  async deleteGoalContribution(@Param('goalContributionId') goalContributionId: number) {
    return await this.goalService.deleteGoalContribution(Number(goalContributionId));
  }

  @Delete(':goalId')
  async deleteGoal(@Param('goalId') goalId: number) {
    return await this.goalService.deleteGoalById(Number(goalId));
  }
}

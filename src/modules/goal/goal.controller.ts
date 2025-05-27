import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GoalService } from './goal.service';
import { GoalContributionDTO, GoalDTO } from 'src/models/meta';
import { Public } from 'src/guards/token.guard';
@Public()
@Controller('goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  //Crear meta
  @Post()
  async createGoal(@Body() goal: GoalDTO) {
    return await this.goalService.createGoal(goal);
  }

  //Crear Seguimiento de meta por id de usuario y id de meta
  @Post('contribution')
  async createGoalTracking(@Body() goalTracking: GoalContributionDTO) {
    return await this.goalService.createGoalTracking(goalTracking);
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
}

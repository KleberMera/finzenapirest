import { Body, Controller, Post } from '@nestjs/common';
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
  @Post('contribution')
  async createGoalTracking(@Body() goalTracking: GoalContributionDTO) {
    return await this.goalService.createGoalTracking(goalTracking);
  }

  // Obtener todos los metas de un usuario
  @Post('user/:userId')
  async getGoalByUserId(userId: number) {
    return await this.goalService.getGoalByUserId(userId);
  }
}

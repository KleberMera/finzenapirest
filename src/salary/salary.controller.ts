import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SalaryService } from './salary.service';
import { Salary } from 'src/models/salary';

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Get('user/:userId')
  async getSalariesByUserId(@Param('userId') userId: string) {
    const parsedUserId = parseInt(userId, 10);
    return this.salaryService.getSalariesByUserId(parsedUserId);
  }

  @Post()
  async createSalary(@Body() data: Salary) {
    return this.salaryService.createSalary(data);
  }

  @Put(':id')
  async updateSalary(@Param('id') id: string, @Body() data: Salary) {
    const parsedId = parseInt(id, 10);
    return this.salaryService.updateSalary(parsedId, data);
  }

  @Delete(':id')
  async deleteSalary(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    return this.salaryService.deleteSalary(parsedId);
  }

  @Get('user/:userId/month')
  async getSalaryByMonth(
    @Param('userId') userId: string,
    @Query('month') month?: string,
  ) {
    const parsedUserId = parseInt(userId, 10);
    return this.salaryService.getSalaryByMonth(parsedUserId, month);
  }
}

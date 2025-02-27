import { Controller, Get } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get('explain-ai')
  async explainAI(): Promise<string> {
    return this.ticketsService.explainAI();
  }
}

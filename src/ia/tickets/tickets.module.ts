import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, GenerativeAiService],
  imports: [],
})
export class TicketsModule {}

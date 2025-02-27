import { Injectable } from '@nestjs/common';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';


@Injectable()
export class TicketsService {
    constructor(private readonly generativeAIService: GenerativeAiService) {}

    async explainAI(): Promise<string> {
      const prompt = "Hola bienvenido a la sección de tickets, ¿en qué puedes ayudarme?";
      return this.generativeAIService.generateContent(prompt);
    }
}

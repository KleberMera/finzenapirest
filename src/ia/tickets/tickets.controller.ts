import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  // @Get('explain-ai')
  // async explainAI(): Promise<string> {
  //   return this.ticketsService.explainAI();
  // }

  // En tu controlador, podrías hacer:
  @Post('process-text/:userId')
  async processText(
    @Param('userId') userId: string, // recíbe como string
    @Body() body: { text: string },
  ) {
    const id = parseInt(userId, 10);
    return this.ticketsService.processTextTransaction(id, body.text);
  }

  @Post('process-receipt/:userId')
  @UseInterceptors(FileInterceptor('file')) // Asegúrate de que el nombre coincida con el campo en Insomnia
  async processReceipt(
    @UploadedFile() file: Express.Multer.File, // Asegúrate de usar el tipo correcto
    @Param('userId') userId: string,
  ) {
    if (!file) {
      throw new Error('No se ha subido ningún archivo');
    }

    const filePath = file.path; // Ruta temporal del archivo
    const mimeType = file.mimetype; // Tipo MIME del archivo (por ejemplo, image/jpeg)

    console.log('Archivo subido:', file); // Verifica que el archivo no sea undefined
    console.log('Ruta del archivo:', filePath); // Verifica que la ruta no sea undefined

    const transaction = await this.ticketsService.processReceipt(
      parseInt(userId),
      filePath,
      mimeType,
    );
    return { message: 'Transacción procesada con éxito', transaction };
  }
}

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


  @Post('process-text/:userId')
  async processText(@Param('userId') userId: string, @Body() body: { text: string }) {
    const id = parseInt(userId, 10);
    const transaction = await this.ticketsService.processTransaction(id, body.text, false);
    return { message: 'Transacción creada exitosamente', transaction };
  }

  @Post('process-receipt/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async processReceipt(@UploadedFile() file: Express.Multer.File, @Param('userId') userId: string) {
    if (!file) throw new Error('No se ha subido ningún archivo');

    const filePath = file.path;
    const mimeType = file.mimetype;
    const transaction = await this.ticketsService.processTransaction(parseInt(userId), filePath, true, mimeType);
    return { message: 'Transacción procesada con éxito', transaction };
  }
}

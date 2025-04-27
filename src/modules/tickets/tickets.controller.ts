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
import { S3Service } from 'src/config/s3/s3.service';


@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService,
    private readonly s3Service: S3Service
  ) {}
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
  @UseInterceptors(FileInterceptor('file'))
  async processReceipt(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: string,
  ) {
    if (!file) {
      throw new Error('No se ha subido ningún archivo');
    }
  
    // Procesar la imagen directamente desde el buffer sin subirla a S3 aún
    const transaction = await this.ticketsService.processReceipt(
      parseInt(userId),
      file.buffer, // Pasamos el buffer en lugar de una URL
      file.mimetype,
    );
  
    // Una vez que la transacción está guardada, subimos la imagen a S3
    const s3Key = await this.s3Service.uploadFile(file, parseInt(userId));
    
    // Opcional: Actualizar la transacción con la clave de S3 si es necesario
    await this.ticketsService.updateTransactionWithS3Key(transaction.id, s3Key);
  
    return { message: 'Transacción procesada y archivo subido con éxito', transaction };
  }
}
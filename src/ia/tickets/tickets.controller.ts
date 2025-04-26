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
import { S3Service } from 'src/s3/s3.service';


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
  @UseInterceptors(FileInterceptor('file')) // Asegúrate de que el nombre coincida con el campo en Insomnia
  async processReceipt(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: string,
  ) {
    if (!file) {
      throw new Error('No se ha subido ningún archivo');
    }

    // Subir el archivo directamente a S3
    const s3Key = await this.s3Service.uploadFile(file, parseInt(userId));
    
    // Obtener URL firmada para acceder al archivo
    const fileUrl = await this.s3Service.getSignedUrl(s3Key);

    console.log('Archivo subido a S3:', s3Key);
    console.log('URL de acceso temporal:', fileUrl);

    // Procesar el recibo con la URL en lugar de la ruta local
    const transaction = await this.ticketsService.processReceipt(
      parseInt(userId),
      fileUrl,
      file.mimetype,
      s3Key,
    );
    
    return { message: 'Transacción procesada con éxito', transaction };
  }
}
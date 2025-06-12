import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpException,
  HttpStatus,
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
    try {
      const id = parseInt(userId, 10);
      if (isNaN(id)) {
        throw new HttpException('ID de usuario no válido', HttpStatus.BAD_REQUEST);
      }
      if (!body?.text?.trim()) {
        throw new HttpException('El texto no puede estar vacío', HttpStatus.BAD_REQUEST);
      }
      return await this.ticketsService.processTextTransaction(id, body.text);
    } catch (error) {
      // Si ya es un HttpException, lo re-lanzamos
      if (error instanceof HttpException) {
        throw error;
      }
      // Para otros errores, devolvemos un 500 con el mensaje del error
      throw new HttpException(
        error.message || 'Error al procesar el texto', 
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('process-receipt/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async processReceipt(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: string,
  ) {
    try {
      if (!file) {
        throw new HttpException('No se ha subido ningún archivo', HttpStatus.BAD_REQUEST);
      }

      const userIdNumber = parseInt(userId, 10);
      if (isNaN(userIdNumber)) {
        throw new HttpException('ID de usuario no válido', HttpStatus.BAD_REQUEST);
      }
    
      // Procesar la imagen directamente desde el buffer sin subirla a S3 aún
      const transaction = await this.ticketsService.processReceipt(
        userIdNumber,
        file.buffer,
        file.mimetype,
      );
    
      try {
        // Una vez que la transacción está guardada, intentamos subir la imagen a S3
        const s3Key = await this.s3Service.uploadFile(file, userIdNumber);
        
        // Si la subida a S3 es exitosa, actualizamos la transacción
        if (s3Key) {
          await this.ticketsService.updateTransactionWithS3Key(transaction.id, s3Key);
        }
      } catch (s3Error) {
        // Si hay un error al subir a S3, lo registramos pero no fallamos la operación
        console.error('Error al subir el archivo a S3:', s3Error);
        // Podrías decidir si quieres fallar la operación o continuar sin el archivo en S3
        // throw new HttpException(
        //   `Transacción procesada pero hubo un error al subir el archivo: ${s3Error.message}`,
        //   HttpStatus.PARTIAL_CONTENT
        // );
      }
    
      return { 
        statusCode: HttpStatus.CREATED,
        message: 'Transacción procesada exitosamente', 
        transaction 
      };
    } catch (error) {
      // Si ya es un HttpException, lo re-lanzamos
      if (error instanceof HttpException) {
        throw error;
      }
      // Para otros errores, devolvemos un 500 con el mensaje del error
      throw new HttpException(
        error.message || 'Error al procesar el recibo', 
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
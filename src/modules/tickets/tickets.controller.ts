import { Body, Controller, HttpException, HttpStatus, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TicketsService } from './tickets.service';
import { S3Service } from 'src/config/s3/s3.service';
import { log } from 'console';

@Controller('tickets')
export class TicketsController {
  constructor(
    private readonly ticketsService: TicketsService,
    private readonly s3Service: S3Service
  ) {}

  @Post('process-text/:userId')
  async processText(@Param('userId') userId: string, @Body() body: { text: string }) {
    log(userId);
    log(body);
    try {
      // Validar que el userId sea un número
      const userIdNum = parseInt(userId, 10);
      if (isNaN(userIdNum)) {
        throw new HttpException('ID de usuario inválido', HttpStatus.BAD_REQUEST);
      }

      // Validar que el texto no esté vacío
      if (!body.text || body.text.trim() === '') {
        throw new HttpException('El texto no puede estar vacío', HttpStatus.BAD_REQUEST);
      }

      // Procesar el texto
      const result = await this.ticketsService.processTextTransaction(userIdNum, body.text);
      return result;
    } catch (error) {
      console.error('Error al procesar el texto:', error);
      throw new HttpException(
        error.message || 'Error al procesar el texto',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('process-receipt/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async processReceipt(
    @Param('userId') userId: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    try {
      // Validar que el userId sea un número
      const userIdNum = parseInt(userId, 10);
      if (isNaN(userIdNum)) {
        throw new HttpException('ID de usuario inválido', HttpStatus.BAD_REQUEST);
      }

      // Validar que se haya subido un archivo
      if (!file) {
        throw new HttpException('No se ha proporcionado ningún archivo', HttpStatus.BAD_REQUEST);
      }

      // Validar que el archivo sea una imagen
      if (!file.mimetype.startsWith('image/')) {
        throw new HttpException('El archivo debe ser una imagen', HttpStatus.BAD_REQUEST);
      }

      // Procesar el recibo
      const transaction = await this.ticketsService.processReceipt(userIdNum, file.buffer, file.mimetype);

      // Intentar subir la imagen a S3
      try {
        const s3Key = `receipts/${userIdNum}/${transaction.id}_${Date.now()}.jpg`;
        await this.s3Service.uploadFile(file.buffer, s3Key, file.mimetype);
        
        // Actualizar la transacción con la clave de S3
        await this.ticketsService.updateTransactionWithS3Key(transaction.id, s3Key);
        
        return {
          message: 'Recibo procesado exitosamente',
          transaction: transaction,
          status: 200
        };
      } catch (s3Error) {
        console.error('Error al subir la imagen a S3:', s3Error);
        // Aún si falla la subida a S3, devolvemos la transacción
        return {
          message: 'Recibo procesado exitosamente, pero no se pudo guardar la imagen',
          transaction: transaction,
          status: 200
        };
      }
    } catch (error) {
      console.error('Error al procesar el recibo:', error);
      throw new HttpException(
        error.message || 'Error al procesar el recibo',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  
  @Post('reset-conversation/:userId')
  async resetConversation(@Param('userId') userId: string) {
    try {
      // Validar que el userId sea un número
      const userIdNum = parseInt(userId, 10);
      if (isNaN(userIdNum)) {
        throw new HttpException('ID de usuario inválido', HttpStatus.BAD_REQUEST);
      }

      // Reiniciar la conversación
      const result = await this.ticketsService.resetConversation(userIdNum);
      return result;
    } catch (error) {
      console.error('Error al reiniciar la conversación:', error);
      throw new HttpException(
        error.message || 'Error al reiniciar la conversación',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
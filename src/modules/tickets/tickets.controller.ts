import { Body, Controller, HttpException, HttpStatus, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TicketsService } from './tickets.service';
import { S3Service } from 'src/config/s3/s3.service';


@Controller('tickets')
export class TicketsController {
  constructor(
    private readonly ticketsService: TicketsService,
    private readonly s3Service: S3Service
  ) {}

  @Post('process-text/:userId')
  async processText(
    @Param('userId') userId: string,
    @Body() body: { text: string, multipleMode?: boolean },
  ) {
    try {
      // Validar el ID de usuario
      const userIdNumber = parseInt(userId, 10);
      if (isNaN(userIdNumber)) {
        throw new Error('ID de usuario no válido');
      }

      // Validar el texto
      if (!body.text || body.text.trim().length === 0) {
        throw new Error('No se ha proporcionado ningún texto');
      }

      // Extraer parámetros adicionales
      const multipleMode = body.multipleMode || false;

      // Procesar el texto
      const result = await this.ticketsService.processTextTransaction(
        userIdNumber,
        body.text,
        multipleMode
      );

      return {
        ...result,
        status: 200,
      };
    } catch (error) {
      console.error('Error al procesar el texto:', error);
      return {
        message: error.message,
        status: 400,
      };
    }
  }

  @Post('confirm-transactions/:userId')
  async confirmTransactions(
    @Param('userId') userId: string,
    @Body() body: { transactions: any[], receiptImageS3Key?: string }
  ) {
    try {
      // Validar el ID de usuario
      const userIdNumber = parseInt(userId, 10);
      if (isNaN(userIdNumber)) {
        throw new Error('ID de usuario no válido');
      }

      // Validar las transacciones
      if (!body.transactions || !Array.isArray(body.transactions) || body.transactions.length === 0) {
        throw new Error('No se han proporcionado transacciones para confirmar');
      }

      // Guardar cada transacción confirmada
      const savedTransactions = [];
      for (const transactionData of body.transactions) {
        // Guardar la transacción
        const transaction = await this.ticketsService.saveTransaction(userIdNumber, transactionData);
        
        // Si hay una clave S3 para la imagen del recibo, actualizar todas las transacciones con ella
        if (body.receiptImageS3Key) {
          await this.ticketsService.updateTransactionWithS3Key(transaction.id, body.receiptImageS3Key);
          transaction.receiptImageS3Key = body.receiptImageS3Key;
        }
        
        savedTransactions.push(transaction);
      }

      return {
        message: 'Transacciones confirmadas y guardadas exitosamente',
        transactions: savedTransactions,
        status: 200,
      };
    } catch (error) {
      console.error('Error al confirmar las transacciones:', error);
      return {
        message: error.message,
        status: 400,
      };
    }
  }

  @Post('process-receipt/:userId')
  @UseInterceptors(FileInterceptor('file'))
  async processReceipt(
    @Param('userId') userId: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { additionalText?: string, multipleMode?: boolean }
  ) {
    try {
      // Validar el ID de usuario
      const userIdNumber = parseInt(userId, 10);
      if (isNaN(userIdNumber)) {
        throw new Error('ID de usuario no válido');
      }

      // Validar el archivo
      if (!file) {
        throw new Error('No se ha proporcionado ningún archivo');
      }

      // Validar el tipo de archivo
      const validMimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!validMimeTypes.includes(file.mimetype)) {
        throw new Error('Tipo de archivo no válido. Se aceptan JPG, PNG y PDF');
      }

      // Extraer parámetros adicionales
      const additionalText = body.additionalText || '';
      const multipleMode = body.multipleMode || false;

      // Procesar el recibo
      const result = await this.ticketsService.processReceipt(
        userIdNumber,
        file.buffer,
        file.mimetype,
        additionalText,
        multipleMode
      );

      // Verificar si se detectaron múltiples transacciones
      if (multipleMode && result.isMultiple && result.transactions) {
        // Devolver las transacciones para confirmación
        return {
          message: 'Se han detectado múltiples transacciones',
          transactions: result.transactions,
          isMultiple: true,
          status: 200,
        };
      }

      // Caso de una sola transacción
      const transaction = result.transaction;

      // Intentar subir la imagen a S3
      try {
        const s3Key = `receipts/${userIdNumber}/${transaction.id}_${Date.now()}.jpg`;
        await this.s3Service.uploadFile(file.buffer, s3Key, file.mimetype);
        
        // Actualizar la transacción con la clave de S3

        //const s3Key = await this.s3Service.uploadFile(userIdNumber, file);
        // Actualizar la transacción con la clave S3
        await this.ticketsService.updateTransactionWithS3Key(transaction.id, s3Key);
        transaction.receiptImageS3Key = s3Key;
      } catch (s3Error) {
        console.error('Error al subir la imagen a S3:', s3Error);
        // Continuamos con la transacción aunque la subida a S3 haya fallado
      }

      return {
        message: 'Recibo procesado exitosamente',
        transaction,
        status: 200,
      };
    } catch (error) {
      console.error('Error al procesar el recibo:', error);
      return {
        message: error.message,
        status: 400,
      };
    }
  }
  
  @Post('reset-conversation/:userId')
   resetConversation(@Param('userId') userId: string) {
    try {
      // Validar que el userId sea un número
      const userIdNum = parseInt(userId, 10);
      if (isNaN(userIdNum)) {
        throw new HttpException('ID de usuario inválido', HttpStatus.BAD_REQUEST);
      }

      // Reiniciar la conversación
      const result =  this.ticketsService.resetConversation(userIdNum);
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
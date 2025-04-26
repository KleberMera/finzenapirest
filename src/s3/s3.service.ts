import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import { format } from '@formkit/tempo';
import { log } from 'console';

@Injectable()
export class S3Service {
    private s3Client: S3Client;
    private bucket: string;
    private readonly logger = new Logger(S3Service.name);
  
    constructor(private configService: ConfigService) {
      // Configurar el cliente S3
      this.s3Client = new S3Client({
        region: process.env.NEST_AWS_REGION,
        credentials: {
          accessKeyId: process.env.NEST_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.NEST_AWS_SECRET_ACCESS_KEY,
        },
      });
      this.bucket = process.env.NEST_AWS_S3_BUCKET_NAME;
    }


    private async ensureUserFolderExists(userId: number): Promise<void> {
      const folderPrefix = `user_${userId}/`;
      
      try {
        // Listar objetos con el prefijo para ver si existe alguno
        const command = new ListObjectsV2Command({
          Bucket: this.bucket,
          Prefix: folderPrefix,
          MaxKeys: 1,
        });
        
        const response = await this.s3Client.send(command);
        
        // Si no hay objetos con ese prefijo, creamos un objeto vacío para establecer el "directorio"
        if (!response.Contents || response.Contents.length === 0) {
          this.logger.log(`Creando carpeta para usuario ${userId} en S3`);
          
          // En S3, las carpetas son solo prefijos, pero podemos crear un objeto vacío
          // como marcador de carpeta
          const createFolderCommand = new PutObjectCommand({
            Bucket: this.bucket,
            Key: `${folderPrefix}.keep`, // Archivo oculto como marcador
            Body: '',
            ContentLength: 0,
          });
          
          await this.s3Client.send(createFolderCommand);
          this.logger.log(`Carpeta para usuario ${userId} creada en S3`);
        }
      } catch (error) {
        this.logger.error(`Error al verificar/crear carpeta para usuario ${userId}:`, error);
        // No lanzamos el error para permitir que el proceso continúe
      }
    }
  
  
    // Subir un archivo a S3
    async uploadFile(file: Express.Multer.File, userId: number): Promise<string> {
      // Asegurar que la carpeta del usuario existe
      await this.ensureUserFolderExists(userId);
      
      // Formatear la fecha actual
      const dateStr = format(new Date(), 'YYYY-MM-DD', 'es');
      
      // Generar un timestamp único para evitar sobreescrituras
      const timestamp = Date.now();
      
      // Extraer la extensión del archivo original
      const fileExt = path.extname(file.originalname);
      log('fileExt', fileExt);
      
      // Crear un nombre de archivo único con fecha + timestamp
      const fileName = `user_${userId}/receipt_${dateStr}_${timestamp}${fileExt}`;
      
      this.logger.log('Subiendo archivo:', { 
        userId, 
        originalName: file.originalname,
        destinationPath: fileName,
        fileSize: file.size,
        mimeType: file.mimetype
      });
    
      const command = new PutObjectCommand({
        Bucket: this.bucket,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
      });
    
      await this.s3Client.send(command);
      this.logger.log(`Archivo subido exitosamente a S3: ${fileName}`);
    
      return fileName;
    }
  
    // Obtener URL firmada para acceder a un archivo
    async getSignedUrl(key: string): Promise<string> {
      const command = new GetObjectCommand({
        Bucket: this.bucket,
        Key: key,
      });
  
      // URL firmada válida por 1 hora
      return getSignedUrl(this.s3Client, command, { expiresIn: 3600 });
    }
}

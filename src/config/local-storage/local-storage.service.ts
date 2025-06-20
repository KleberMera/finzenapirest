/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { format } from '@formkit/tempo';
import { promisify } from 'util';

const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

@Injectable()
export class LocalStorageService {
  private readonly logger = new Logger(LocalStorageService.name);
  private readonly baseUploadPath = path.join(process.cwd(), 'uploads');

  constructor() {
    // Asegurar que el directorio base de uploads existe
    this.ensureBaseDirectoryExists();
  }

  private async ensureBaseDirectoryExists(): Promise<void> {
    try {
      if (!fs.existsSync(this.baseUploadPath)) {
        await mkdirAsync(this.baseUploadPath, { recursive: true });
        this.logger.log(`Directorio base de uploads creado: ${this.baseUploadPath}`);
      }
    } catch (error) {
      this.logger.error(`Error al crear directorio base de uploads:`, error);
    }
  }

  private async ensureUserFolderExists(userId: number): Promise<void> {
    const userFolderPath = path.join(this.baseUploadPath, `user_${userId}`);

    try {
      if (!fs.existsSync(userFolderPath)) {
        await mkdirAsync(userFolderPath, { recursive: true });
        this.logger.log(`Carpeta para usuario ${userId} creada en almacenamiento local`);
      }
    } catch (error) {
      this.logger.error(
        `Error al verificar/crear carpeta para usuario ${userId}:`,
        error,
      );
      // No lanzamos el error para permitir que el proceso continúe
    }
  }

  /**
   * Sube un archivo al almacenamiento local
   * @param fileOrBuffer Objeto Multer o Buffer con el archivo a subir
   * @param keyOrUserId Clave del archivo o ID del usuario
   * @param contentType Tipo de contenido del archivo
   * @returns Ruta relativa del archivo guardado
   */
  async uploadFile(fileOrBuffer: Express.Multer.File | Buffer, keyOrUserId: string | number, contentType?: string): Promise<string> {
    let buffer: Buffer;
    let filePath: string;
    let fileName: string;
    
    // Determinar si estamos recibiendo un archivo Multer o un buffer directamente
    if (Buffer.isBuffer(fileOrBuffer)) {
      // Es un buffer directo
      buffer = fileOrBuffer;
      
      if (typeof keyOrUserId === 'number') {
        // Si es un número, asumimos que es un userId y generamos una clave
        const userId = keyOrUserId;
        await this.ensureUserFolderExists(userId);
        
        // Formatear la fecha actual
        const dateStr = format(new Date(), 'YYYY-MM-DD', 'es');
        
        // Generar un timestamp único para evitar sobreescrituras
        const timestamp = Date.now();
        
        // Determinar la extensión basada en el tipo de contenido
        let fileExt = '.jpg'; // Por defecto
        if (contentType) {
          if (contentType.includes('png')) fileExt = '.png';
          else if (contentType.includes('jpeg') || contentType.includes('jpg')) fileExt = '.jpg';
          else if (contentType.includes('pdf')) fileExt = '.pdf';
          // Añadir más tipos según sea necesario
        }
        
        fileName = `receipt_${dateStr}_${timestamp}${fileExt}`;
        filePath = path.join(this.baseUploadPath, `user_${userId}`, fileName);
      } else {
        // Si es una cadena, asumimos que es la clave directamente
        fileName = path.basename(keyOrUserId as string);
        const dirPath = path.dirname(keyOrUserId as string);
        
        // Asegurar que el directorio existe
        const fullDirPath = path.join(this.baseUploadPath, dirPath);
        if (!fs.existsSync(fullDirPath)) {
          await mkdirAsync(fullDirPath, { recursive: true });
        }
        
        filePath = path.join(this.baseUploadPath, keyOrUserId as string);
      }
    } else {
      // Es un objeto Multer
      const file = fileOrBuffer;
      buffer = file.buffer;
      
      if (typeof keyOrUserId === 'number') {
        // Si es un número, asumimos que es un userId
        const userId = keyOrUserId;
        await this.ensureUserFolderExists(userId);
        
        // Formatear la fecha actual
        const dateStr = format(new Date(), 'YYYY-MM-DD', 'es');
        
        // Generar un timestamp único para evitar sobreescrituras
        const timestamp = Date.now();
        
        // Extraer la extensión del archivo original
        const fileExt = path.extname(file.originalname);
        
        fileName = `receipt_${dateStr}_${timestamp}${fileExt}`;
        filePath = path.join(this.baseUploadPath, `user_${userId}`, fileName);
      } else {
        // Si es una cadena, asumimos que es la clave directamente
        fileName = path.basename(keyOrUserId as string);
        const dirPath = path.dirname(keyOrUserId as string);
        
        // Asegurar que el directorio existe
        const fullDirPath = path.join(this.baseUploadPath, dirPath);
        if (!fs.existsSync(fullDirPath)) {
          await mkdirAsync(fullDirPath, { recursive: true });
        }
        
        filePath = path.join(this.baseUploadPath, keyOrUserId as string);
      }
    }

    this.logger.log('Subiendo archivo:', {
      destinationPath: filePath,
      fileSize: buffer.length,
    });

    // Guardar el archivo
    await writeFileAsync(filePath, buffer);
    this.logger.log(`Archivo subido exitosamente a almacenamiento local: ${filePath}`);

    // Devolver la ruta relativa (sin el baseUploadPath)
    const relativePath = path.relative(this.baseUploadPath, filePath).replace(/\\/g, '/');
    return relativePath;
  }

  // Obtener URL para acceder a un archivo local
  getLocalUrl(key: string): string {
    // Construir URL relativa al recurso
    return `/uploads/${key}`;
  }
}
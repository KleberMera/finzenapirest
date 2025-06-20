import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('uploads')
export class LocalStorageController {
  private readonly uploadsPath = path.join(process.cwd(), 'uploads');

  @Get(':userId/:filename')
  serveUserFile(@Param('userId') userId: string, @Param('filename') filename: string, @Res() res: Response) {
    const filePath = path.join(this.uploadsPath, `user_${userId}`, filename);
    
    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('Archivo no encontrado');
    }
    
    // Determinar el tipo de contenido basado en la extensión
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'application/octet-stream'; // Por defecto
    
    if (ext === '.jpg' || ext === '.jpeg') {
      contentType = 'image/jpeg';
    } else if (ext === '.png') {
      contentType = 'image/png';
    } else if (ext === '.pdf') {
      contentType = 'application/pdf';
    }
    
    // Enviar el archivo con el tipo de contenido adecuado
    res.setHeader('Content-Type', contentType);
    return res.sendFile(filePath);
  }

  @Get('*')
  serveFile(@Param('0') filePath: string, @Res() res: Response) {
    // Sanitizar la ruta para evitar ataques de traversal
    const sanitizedPath = filePath.replace(/\.\.\/|\.\./g, '');
    const fullPath = path.join(this.uploadsPath, sanitizedPath);
    
    // Verificar si el archivo existe
    if (!fs.existsSync(fullPath)) {
      return res.status(404).send('Archivo no encontrado');
    }
    
    // Determinar el tipo de contenido basado en la extensión
    const ext = path.extname(sanitizedPath).toLowerCase();
    let contentType = 'application/octet-stream'; // Por defecto
    
    if (ext === '.jpg' || ext === '.jpeg') {
      contentType = 'image/jpeg';
    } else if (ext === '.png') {
      contentType = 'image/png';
    } else if (ext === '.pdf') {
      contentType = 'application/pdf';
    }
    
    // Enviar el archivo con el tipo de contenido adecuado
    res.setHeader('Content-Type', contentType);
    return res.sendFile(fullPath);
  }
}
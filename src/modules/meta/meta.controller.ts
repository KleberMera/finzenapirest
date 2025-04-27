import { Body, Controller, Post } from '@nestjs/common';
import { MetaService } from './meta.service';
import { MetaDTO, MetaTrackingDTO } from 'src/models/meta';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}


  //Crear meta
  @Post()
  async createMeta(@Body() meta: MetaDTO) {
    return await this.metaService.createMeta(meta);
  }

  

  //Crear Seguimiento de meta por id de usuario y id de meta
  @Post('tracking')
  async createMetaTracking(@Body() metaTracking: MetaTrackingDTO) {
    return await this.metaService.createMetaTracking(metaTracking);
  }

  // Obtener todos los metas de un usuario
  @Post('user/:userId')
  async getMetaByUserId(userId: number) {
    return await this.metaService.getMetaByUserId(userId);
  }
}

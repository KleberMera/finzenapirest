import { Module } from '@nestjs/common';
import { GraficAdminService } from './grafic-admin.service';
import { GraficAdminController } from './grafic-admin.controller';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Module({
  controllers: [GraficAdminController],
  providers: [GraficAdminService, PrismaService],
})
export class GraficAdminModule {}

import { Module } from '@nestjs/common';
import { DniService } from './dni.service';
import { DniController } from './dni.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [DniController],
  providers: [DniService],
})
export class DniModule {}

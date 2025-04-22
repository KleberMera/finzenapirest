import { Controller, Get, Param } from '@nestjs/common';
import { DniService } from './dni.service';

@Controller('dni')
export class DniController {
  constructor(private readonly dniService: DniService) {}

  @Get('person/:cedula')
  async getPersonData(@Param('cedula') cedula: string) {
     
    return this.dniService.getPersonData(cedula);
  }
}

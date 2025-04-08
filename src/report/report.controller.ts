import { Body, Controller, Post, Res } from '@nestjs/common';
import { ReportService } from './report.service';
import { TransactionReport } from 'src/models/trasaction.interface';
import { Response } from 'express';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  // Aquí puedes agregar los endpoints para generar el PDF
  // Por ejemplo:
  @Post('generate-pdf')
  async generatePDF(
    @Res() response: Response,
    @Body() data: TransactionReport[],
  ) {
    const pdfDoc = await this.reportService.generatePDF(data);
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Factura';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}

import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';

import generatePDFService from 'src/libs/pdf';

import { TransactionReport } from 'src/models/trasaction.interface';
import { PrinterService } from 'src/printer/printer.service';

@Injectable()
export class ReportService {
  constructor(private readonly printer: PrinterService) {}

  async generatePDF(data: TransactionReport[]): Promise<PDFKit.PDFDocument> {
    const reportDate = format(new Date(), 'YYYY-MM-DD', 'es');
    const docDefinition = generatePDFService(data, reportDate);
    return this.printer.createPdf(docDefinition);
    // return this.printer.createPdf(docDefinition);
  }
}

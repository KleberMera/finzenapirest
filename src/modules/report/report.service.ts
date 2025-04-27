import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';

import { TransactionReport } from 'src/models/trasaction.interface';
import generatePDFService from 'src/providers/printer/pdf';
import { PrinterService } from 'src/providers/printer/printer.service';

@Injectable()
export class ReportService {
  constructor(private readonly printer: PrinterService) {}

   
   generatePDF(data: TransactionReport[]): Promise<PDFKit.PDFDocument> {
    const reportDate = format(new Date(), 'YYYY-MM-DD', 'es');
    const docDefinition = generatePDFService(data, reportDate);
    return Promise.resolve(this.printer.createPdf(docDefinition));
    // return this.printer.createPdf(docDefinition);
  }
}

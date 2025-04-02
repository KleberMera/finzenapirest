import { Injectable, Logger } from '@nestjs/common';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { format } from '@formkit/tempo';


@Injectable()
export class TicketsService {
  constructor(
    private readonly generativeAIService: GenerativeAiService,
    private readonly prisma: PrismaService
  ) {}

  async processTransaction(userId: number, input: string, isImage: boolean = false, mimeType?: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { name: true } });
    const prompt = this.getUnifiedPrompt(input, isImage, user?.name);
    Logger.log(prompt)
    const extractedText = isImage
      ? await this.generativeAIService.analyzeImage(input, mimeType!, prompt)
      : await this.generativeAIService.generateContent(prompt);

    const { amount, description, type, date, time, categoryName, icon, nameTransaction } =
      this.parseExtractedText(extractedText);

    const category = await this.getOrCreateCategory(userId, categoryName, type, icon);
    const l = "es"
    const t = new Date()
    const datenew = format(t, "YYYY-MM-DD", l)
    const timenew = format(t, "h:mm:ss", l)

    const transaction = await this.prisma.transaction.create({
      
      data: {
        category_id: category.id,
        name: nameTransaction,
        description,
        amount: parseFloat(amount),
        date: date || datenew,
        time: time || timenew,
      },
      include: { category: true },
    });

    return transaction;
  }

  private getUnifiedPrompt(input: string, isImage: boolean, userName?: string): string {
    return `
      Analiza el siguiente ${isImage ? 'imagen de un recibo' : 'texto'} y extrae la siguiente información:
      ${isImage ? 'Imagen:' : 'Texto:'} "${input}"
      
      Instrucciones:
      1. "items": Un arreglo con el detalle de cada producto o servicio encontrado.
          - Cada elemento del arreglo debe contener:
            - "name": Nombre del producto (ejemplo: "Detergente en polvo").
            - "quantity": Cantidad comprada (ejemplo: "2"). Si no se especifica, asume "1".
            - "unitPrice": Precio unitario (ejemplo: "1.35"). Si no está disponible, usa "0".
      2. "amount": Monto total en dólares. Si no se detecta, usa "0".
      3. "description": Una descripción general de la transacción, resumiendo los artículos o el motivo.
          - Ejemplo para gasto: "Compra de varios artículos en Tiendas Tuti:\n- 2 Detergente en polvo (1.35 c/u)\n- 1 Harina (0.60)"
          - Ejemplo para ingreso: "Ingreso por servicios de reparación de impresora."
      4. "type": El tipo de transacción, que debe ser "Ingreso" o "Gasto".
         - Usa "Ingreso" si el texto incluye referencias como:
           - "${userName || 'el usuario'}" como receptor (ej. "Transferencia a ${userName || 'el usuario'}").
           - Palabras como "ingreso", "recibiste", "depósito", "pago recibido", "ingresó a tu cuenta", "gané", "recibí", "honorarios", "salario", "venta", etc
            - Ejemplos:
              - "Recibiste $50 de Juan" → "Ingreso"
              - "Tuve un ingreso de $30 por arreglar una impresora" → "Ingreso"
              - "Ganaste $100 en la lotería" → "Ingreso"
          - Usa "Gasto" si se menciona un pago, compra, o si no hay indicios claros de ingreso.
            - Ejemplos:
              - "Compra en Supermaxi" → "Gasto"
              - "Pagué $20 por el almuerzo" → "Gasto"
         - Si no se puede determinar, asume "Gasto" como predeterminado.
      5. "date": Fecha en formato "YYYY-MM-DD". Si no se encuentra, usa la fecha actual ("${format(new Date(), 'YYYY-MM-DD')}") o déjalo en blanco.
      6. "time": Hora en formato "HH:mm" (24 horas). Si no se encuentra, usa la hora actual o déjalo en blanco.
      7. "categoryName": La categoría sugerida para clasificar la transacción.
          - Para "Gasto", usa SOLO una de las siguientes categorías basadas en las deducciones del SRI en Ecuador:
              - "Vivienda": Gastos de arriendo, servicios básicos (agua, electricidad), intereses hipotecarios.
              - "Educación": Matrícula, útiles escolares, uniformes, transporte escolar.
              - "Salud": Gastos médicos, medicinas, seguros de salud, hospitalización.
              - "Alimentación": Compra de alimentos en supermercados, mercados.
              - "Vestimenta": Compra de ropa, calzado, accesorios.
              - "Transporte": Gastos de transporte, servicios de autobús.
              - "Transferencia": Transferencias de fondos, servicios bancarios.
              - "Otros": Si no encaja en las anteriores.
            - Para "Ingreso", usa SOLO una de las siguientes categorías:
              - "Trabajo": Ingresos por salario, honorarios, servicios prestados (ej. reparación de impresoras).
              - "Ventas": Ingresos por venta de productos o servicios.
              - "Transferencias Recibidas": Ingresos por transferencias recibidas.
              - "Otros ingresos": Si no encaja en las anteriores.
            - Clasifica según el contexto:
              - Ejemplo para gasto: "Supermercado" → "Alimentación"
              - Ejemplo para ingreso: "Arreglo de impresora" → "Trabajo"
      8. "icon": El nombre de un ícono de PrimeNG que represente la categoría:
            - Para gastos:
              - "Vivienda": "pi pi-home"
              - "Educación": "pi pi-book"
              - "Salud": "pi pi-heart"
              - "Alimentación": "pi pi-shopping-cart"
              - "Vestimenta": "pi pi-tag"
              - "Transporte": "pi pi-car"
              - "Transferencia": "pi pi-money-bill"
              - "Otros": "pi pi-folder"
            - Para ingresos:
              - "Trabajo": "pi pi-briefcase"
              - "Ventas": "pi pi-dollar"
              - "Transferencias Recibidas": "pi pi-wallet"
              - "Otros ingresos": "pi pi-folder-open"
      9. "nameTransaction": Título corto y descriptivo (ej. "Compra en Supermaxi", "Depósito recibido", "Ingreso por servicios").

      Devuelve la información en formato JSON exactamente así:

      {
        "items": [
          {
            "name": "Detergente en polvo",
            "quantity": "2",
            "unitPrice": "1.35"
          },
          {
            "name": "Harina",
            "quantity": "1",
            "unitPrice": "0.60"
          }
        ],
        "amount": "3.30",
        "description": "Compra de varios artículos en Tiendas Tuti:\n- 2 Detergente en polvo (1.35 c/u)\n- 1 Harina (0.60)",
        "type": "gasto",
        "date": "2023-10-05",
        "time": "14:30",
        "categoryName": "Alimentación",
        "icon": "pi pi-shopping-cart",
        "nameTransaction": "Compra en Tiendas Tuti"
      }
    `;
  }

  private async getOrCreateCategory(userId: number, categoryName: string, type: string, icon: string) {
    const existingCategories = await this.prisma.category.findMany({
      where: { user_id: userId },
      select: { name: true },
    });
    const normalizedInput = categoryName.toLowerCase().trim();
    const similarCategory = existingCategories.find(
      (cat) => cat.name.toLowerCase().trim() === normalizedInput
    );

    if (similarCategory) {
      return await this.prisma.category.findFirst({
        where: { user_id: userId, name: similarCategory.name },
      });
    }

    return await this.prisma.category.create({
      data: { user_id: userId, name: categoryName, type: type.toLowerCase() === 'ingreso' ? 'Ingreso' : 'Gasto', icon },
    });
  }

  private parseExtractedText(text: string): {
    items: { name: string; quantity: string; unitPrice: string }[];
    amount: string;
    description: string;
    type: string;
    date: string;
    time: string;
    categoryName: string;
    icon: string;
    nameTransaction: string;
  } {
    Logger.log('')
    Logger.log('')
    Logger.log(text)
    const jsonMatch = text.match(/{[\s\S]*}/);
    if (!jsonMatch) throw new Error('No se pudo encontrar JSON en la respuesta de la IA.');

    const data = JSON.parse(jsonMatch[0]);
    const now = new Date();
    const defaultDate = now.toISOString().split('T')[0];
    const defaultTime = now.toTimeString().slice(0, 5);

    return {
      items: Array.isArray(data.items) ? data.items : [],
      amount: data.amount || '0',
      description: data.description || 'Sin descripción',
      type: (data.type || 'Gasto'),
      date: data.date || defaultDate,
      time: data.time || defaultTime,
      categoryName: data.categoryName || 'Otros',
      icon: data.icon || 'pi pi-folder',
      nameTransaction: data.nameTransaction || 'Sin nombre',
    };
  }
}

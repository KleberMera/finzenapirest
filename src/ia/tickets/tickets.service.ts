import { Injectable } from '@nestjs/common';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { format } from '@formkit/tempo';
import { log } from 'console';


@Injectable()
export class TicketsService {
  constructor(
    private readonly generativeAIService: GenerativeAiService,
    private readonly prisma: PrismaService
  ) {}

  // Método reutilizable para generar el prompt
  private getPromptTemplate(): string {
    return `
      Analiza la información proporcionada y extrae la siguiente información:
      1. "items": Un arreglo (array) con el detalle de cada producto o servicio encontrado.  
         - Cada elemento del arreglo debe contener:
            - "name": Nombre del producto (por ejemplo, "Detergente en polvo").
            - "quantity": Cantidad comprada (por ejemplo, "2").
            - "unitPrice": Precio unitario (por ejemplo, "1.35").
      2. "amount": El monto total en dólares (por ejemplo, "30"). Si no se detecta, usa "0".
      3. "description": Una descripción general de la compra, donde incluyas un resumen de los artículos.  
         - Por ejemplo:  
            "Compra de varios artículos en Tiendas Tuti:\n- 2 Detergente en polvo (1.35 c/u)\n- 1 Harina (0.60)\n..."
      4. "type": El tipo de transacción, que puede ser "ingreso" o "gasto". Si no se determina, asume "gasto".
      5. "date": La fecha de la transacción en formato "YYYY-MM-DD". Si no se encuentra, utiliza la fecha actual o deja en blanco.
      6. "time": La hora de la transacción en formato "HH:mm". Si no se encuentra, utiliza la hora actual o deja en blanco.
      7. "categoryName": La categoría sugerida para clasificar el recibo (por ejemplo, "Supermercado", "Entretenimiento", "Mascotas/Alimentos", etc.).
      8. "icon": El nombre de un ícono de PrimeNG que represente la categoría (por ejemplo, "pi pi-shopping-cart", "pi pi-folder", "pi pi-home").
      9. "nameTransaction": Un título corto para identificar la transacción (por ejemplo, "Compra en Tiendas Tuti").
  
      Devuelve la información en formato JSON exactamente de la siguiente manera:
  
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
        "amount": "30",
        "description": "Compra de varios artículos en Tiendas Tuti:\n- 2 Detergente en polvo (1.35 c/u)\n- 1 Harina (0.60)\n...",
        "type": "gasto",
        "date": "2023-10-05",
        "time": "14:30",
        "categoryName": "Mascotas/Alimentos",
        "icon": "pi pi-folder",
        "nameTransaction": "Compra en Tiendas Tuti"
      }
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private getReceiptPrompt(imagePath: string): string {
    return `
      Analiza la imagen del recibo proporcionada y extrae la siguiente información:
      ${this.getPromptTemplate()}
    `;
  }

  private getTextAnalysisPrompt(userText: string): string {
    return `
      Analiza el siguiente texto de un usuario y extrae la siguiente información:

      Texto: "${userText}"

      ${this.getPromptTemplate()}
    `;
  }

  async processReceipt(userId: number, filePath: string, mimeType: string) {
    // Generar el prompt para análisis de imagen
    const prompt = this.getReceiptPrompt(filePath);
  
    const extractedText = await this.generativeAIService.analyzeImage(filePath, mimeType, prompt);
  
    // Parsear la información
    const parsedData = this.parseExtractedText(extractedText);
  
    console.log('Información extraída:', parsedData);
  
    // Crear o verificar categoría y transacción
    return await this.saveTransaction(userId, parsedData);
  }

  async processTextTransaction(userId: number, text: string) {
    // Generar el prompt para análisis de texto
    const prompt = this.getTextAnalysisPrompt(text);
    log('prompt', prompt);

    // Pedir a la IA que analice el texto
    const extractedText = await this.generativeAIService.generateContent(prompt);
    log(extractedText);
    
    // Parsear la respuesta de la IA
    const parsedData = this.parseExtractedText(extractedText);

    // Crear o verificar categoría y transacción
    const transaction = await this.saveTransaction(userId, parsedData);

    return {
      message: 'Transacción creada exitosamente',
      transaction: transaction,
      status: 200
    };
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async saveTransaction(userId: number, parsedData: any) {
    const {
      amount,
      description,
      type,
      date,
      time,
      categoryName,
      icon,
      nameTransaction,
    } = parsedData;

    // Verificar si la categoría existe o crearla
    let category = await this.prisma.category.findFirst({
      where: {
        user_id: userId,
        name: categoryName,
      },
    });
  
    if (!category) {
      category = await this.prisma.category.create({
        data: {
          user_id: userId,
          name: categoryName,
          type: type === 'ingreso' ? 'Ingreso' : 'Gasto',
          icon,
        },
      });
    }
  
    // Guardar la transacción
    const transaction = await this.prisma.transaction.create({
      data: {
        category_id: category.id,
        name: nameTransaction,
        description: description,
        amount: parseFloat(amount),
        date,
        time,
      },
      include: {
        category: true // Incluir los datos de la categoría relacionada
      }
    });
    
    return transaction;
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
    // Utilizamos expresiones regulares para extraer cada campo del JSON retornado
    const jsonMatch = text.match(/{[\s\S]*}/);
    if (!jsonMatch) {
      throw new Error('No se pudo parsear la respuesta de la IA.');
    }
    try {
      const data = JSON.parse(jsonMatch[0]);
      const l = "es"
      const t = new Date()
      const datenew = format(t, "YYYY-MM-DD", l)
      const timenew = format(t, "h:mm", l)
      return {
        items: data.items || [],
        amount: data.amount || '0',
        description: data.description || 'Sin descripción',
        type: (data.type || 'gasto').toLowerCase(),
        date: data.date || datenew,
        time: data.time || timenew,
        categoryName: data.categoryName || 'Otros',
        icon: data.icon || 'pi pi-folder',
        nameTransaction: data.nameTransaction || 'Sin nombre',
      };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Error al parsear el JSON extraído.');
    }
  }
}

import { Injectable } from '@nestjs/common';
import { GenerativeAiService } from '../google/generative-ai/generative-ai.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TicketsService {
  constructor(private readonly generativeAIService: GenerativeAiService,
    private readonly prisma: PrismaService

  ) { }

  

  async processReceipt(userId: number, filePath: string, mimeType: string) {
    // Nuevo prompt con formato JSON para mayor claridad y parseo automático
    const prompt = `
      Analiza la imagen del recibo proporcionada y extrae la siguiente información:
      
      1. "amount": El monto total en dólares (por ejemplo, "30"). Si no se detecta, usa "0".
      2. "description": Una breve descripción de la compra o servicio (por ejemplo, "Compra de alimento para perro cachorro en Tiendas Tuti").
      3. "type": El tipo de transacción, que puede ser "ingreso" o "gasto". Si no se determina, asume "gasto".
      4. "date": La fecha de la transacción en formato "YYYY-MM-DD". Si no se encuentra, utiliza la fecha actual.
      5. "time": La hora de la transacción en formato "HH:mm". Si no se encuentra, utiliza la hora actual.
      6. "categoryName": La categoría sugerida para clasificar el recibo (por ejemplo, "Supermercado", "Entretenimiento", "Mascotas/Alimentos", etc.).
      7. "icon": El nombre de un ícono de PrimeNG que represente la categoría (por ejemplo, "pi pi-shopping-cart", "pi pi pi-folder", "pi pi-home").
      8. "nameTransaction": Un título corto para identificar la transacción (por ejemplo, "Compra en Tiendas Tuti").
  
      Devuelve la información en formato JSON exactamente de la siguiente manera:
  
      {
        "amount": "30",
        "description": "Compra de alimento para perro cachorro en Tiendas Tuti",
        "type": "gasto",
        "date": "2023-10-05",
        "time": "14:30",
        "categoryName": "Mascotas/Alimentos",
        "icon": "pi pi-folder",
        "nameTransaction": "Compra en Tiendas Tuti"
      }
    `;
  
    const extractedText = await this.generativeAIService.analyzeImage(filePath, mimeType, prompt);
  
    // Paso 2: Parsear la información
    const { amount, description, type, date, time, categoryName, icon, nameTransaction } =
      this.parseExtractedText(extractedText);
  
    console.log('Información extraída:', {
      amount,
      description,
      type,
      date,
      time,
      categoryName,
      icon,
      nameTransaction
    });
  
    // Paso 3: Verificar si la categoría existe o crearla
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
  
    // Paso 4: Guardar la transacción
    const transaction = await this.prisma.transaction.create({
      data: {
        category_id: category.id,
        name: nameTransaction,
        description: description,
        amount: parseFloat(amount),
        date,
        time,
      },
    });
  
    return transaction;
  }
  
  private parseExtractedText(text: string): {
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
      return {
        amount: data.amount || '0',
        description: data.description || 'Sin descripción',
        type: (data.type || 'gasto').toLowerCase(),
        date: data.date || new Date().toISOString().split('T')[0],
        time: data.time || new Date().toISOString().split('T')[1].substring(0, 5),
        categoryName: data.categoryName || 'Otros',
        icon: data.icon || 'pi pi-folder',
        nameTransaction: data.nameTransaction || 'Sin nombre',
      };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Error al parsear el JSON extraído.');
    }
  }
  


  async explainAI(): Promise<string> {
    const prompt = "Hola bienvenido a la sección de tickets, ¿en qué puedes ayudarme?";
    return this.generativeAIService.generateContent(prompt);
  }

}

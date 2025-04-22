/* eslint-disable @typescript-eslint/no-unsafe-call */
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

  // Categorías del SRI para gastos
  private readonly sriExpenseCategories = [
    { name: 'Vivienda', icon: 'pi pi-home', keywords: ['arriendo', 'alquiler', 'hipoteca', 'agua', 'luz', 'electricidad', 'gas', 'internet', 'teléfono fijo', 'condominio', 'mantenimiento hogar'] },
    { name: 'Salud', icon: 'pi pi-heart', keywords: ['médico', 'doctor', 'hospital', 'clínica', 'farmacia', 'medicinas', 'seguro médico', 'dental', 'odontólogo', 'oftalmólogo', 'lentes', 'tratamiento'] },
    { name: 'Educación', icon: 'pi pi-book', keywords: ['colegio', 'escuela', 'universidad', 'matrícula', 'pensión', 'útiles escolares', 'libros', 'uniformes', 'transporte escolar', 'curso', 'taller'] },
    { name: 'Alimentación', icon: 'pi pi-shopping-cart', keywords: ['supermercado', 'mercado', 'tienda', 'comida', 'alimentos', 'restaurante', 'café', 'frutas', 'verduras', 'carne', 'lácteos'] },
    { name: 'Vestimenta', icon: 'pi pi-tag', keywords: ['ropa', 'calzado', 'zapatos', 'zapatillas', 'pantalón', 'camisa', 'vestido', 'chaqueta', 'abrigo', 'traje', 'uniforme'] },
    { name: 'Transporte', icon: 'pi pi-car', keywords: ['gasolina', 'taxi', 'bus', 'pasaje', 'transporte', 'combustible', 'mantenimiento vehículo', 'peaje'] },
    { name: 'Entretenimiento', icon: 'pi pi-camera', keywords: ['cine', 'teatro', 'concierto', 'evento', 'viaje', 'turismo', 'hotel', 'vacaciones'] },
    { name: 'Otros Gastos', icon: 'pi pi-folder', keywords: ['otro', 'varios', 'misceláneo'] }
  ];

  // Categorías para ingresos
  private readonly incomeCategories = [
    { name: 'Salario', icon: 'pi pi-dollar', keywords: ['salario', 'sueldo', 'nómina', 'pago mensual', 'remuneración'] },
    { name: 'Honorarios', icon: 'pi pi-briefcase', keywords: ['honorario', 'factura', 'consultoría', 'asesoría', 'freelance', 'servicios profesionales'] },
    { name: 'Inversiones', icon: 'pi pi-chart-line', keywords: ['inversión', 'dividendo', 'interés', 'rendimiento', 'ganancia', 'acción', 'bono'] },
    { name: 'Alquileres', icon: 'pi pi-building', keywords: ['alquiler', 'arriendo', 'renta', 'propiedad'] },
    { name: 'Venta', icon: 'pi pi-shopping-bag', keywords: ['venta', 'comercio', 'negocio', 'mercadería'] },
    { name: 'Préstamos', icon: 'pi pi-wallet', keywords: ['préstamo', 'crédito', 'financiamiento'] },
    { name: 'Reembolsos', icon: 'pi pi-refresh', keywords: ['reembolso', 'devolución', 'retorno', 'reintegro'] },
    { name: 'Otros Ingresos', icon: 'pi pi-money-bill', keywords: ['otro', 'varios', 'misceláneo', 'regalo', 'herencia', 'premio'] }
  ];

  // Método para obtener todas las categorías
  private getAllCategories() {
    return [...this.sriExpenseCategories, ...this.incomeCategories];
  }

  // Método reutilizable para generar el prompt
  private getPromptTemplate(): string {
    // Crear strings para las categorías
    const expenseCategoriesText = this.sriExpenseCategories
      .map(cat => `"${cat.name}" (icon: "${cat.icon}")`)
      .join(', ');
    
    const incomeCategoriesText = this.incomeCategories
      .map(cat => `"${cat.name}" (icon: "${cat.icon}")`)
      .join(', ');

      const l = "es"
      const t = new Date()
      const datenew = format(t, "YYYY-MM-DD", l)
      const timenew = format(t, "hh:mm:ss", l)
      

    return `
      Analiza la información proporcionada y extrae la siguiente información:
      1. "items": Un arreglo (array) con el detalle de cada producto o servicio encontrado.  
         - Cada elemento del arreglo debe contener:
            - "name": Nombre del producto (por ejemplo, "Detergente en polvo").
            - "quantity": Cantidad comprada (por ejemplo, "2").
            - "unitPrice": Precio unitario (por ejemplo, "1.35").
      2. "amount": El monto total en dólares (por ejemplo, "30"). Si no se detecta, usa "0".
      3. "description": Una descripción general de la compra o ingreso, donde incluyas un resumen detallado.  
         - Por ejemplo:  
            "Compra de varios artículos en Tiendas Tuti:\n- 2 Detergente en polvo (1.35 c/u)\n- 1 Harina (0.60)\n..."
            O si es un ingreso: "Pago de honorarios por servicios de consultoría para proyecto XYZ".
      4. "type": El tipo de transacción, que debe ser "ingreso" o "gasto" basado en la naturaleza de la transacción.
      5. "date": La fecha de la transacción en formato "YYYY-MM-DD". Si no se encuentra, utiliza la fecha actual que es ${datenew}.
      6. "time": La hora de la transacción en formato "hh:mm:ss". Si no se encuentra, utiliza la hora actual que es  ${timenew}.
      7. "categoryName": La categoría según el tipo de transacción:
         - Si es un GASTO, clasifícalo en una de estas categorías del SRI:
           ${expenseCategoriesText}
         - Si es un INGRESO, clasifícalo en una de estas categorías específicas:
           ${incomeCategoriesText}
      8. "icon": El nombre del ícono de PrimeNG que corresponde a la categoría seleccionada (ya indicado arriba).
      9. "nameTransaction": Un título corto pero descriptivo para identificar la transacción.
  
      Devuelve la información en formato JSON exactamente de la siguiente manera:
  
      {
        "items": [
          {
            "name": "Detergente en polvo",
            "quantity": "2",
            "unitPrice": "1.35"
          },
          {
            "name": "Leche",
            "quantity": "3",
            "unitPrice": "0.90"
          }
        ],
        "amount": "30",
        "description": "Compra de víveres en Supermaxi:\n- 2 Detergente en polvo (1.35 c/u)\n- 3 Leche (0.90 c/u)\n...",
        "type": "gasto",
        "date": "2023-10-05",
        "time": "14:30:05",
        "categoryName": "Alimentación",
        "icon": "pi pi-shopping-cart",
        "nameTransaction": "Compra de víveres en Supermaxi"
      }
    `;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private getReceiptPrompt(imagePath: string): string {
    return `
      Analiza la imagen del recibo proporcionada y extrae la siguiente información.
      Presta especial atención a los detalles para clasificar correctamente según el tipo de transacción (ingreso o gasto) y su categoría específica:
      ${this.getPromptTemplate()}
    `;
  }

  private getTextAnalysisPrompt(userText: string): string {
    return `
      Analiza el siguiente texto de un usuario y extrae la siguiente información.
      Presta especial atención para determinar si es un ingreso o un gasto y clasificarlo en la categoría correspondiente:

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
  
   
  private async saveTransaction(userId: number, parsedData: any) {
    const {
      amount,
      description,
      type,
      date,
      time,
      categoryName,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      icon,
      nameTransaction,
    } = parsedData;

    // Validar y ajustar la categoría basándose en las categorías del sistema
    const validatedCategory = this.validateCategory(categoryName, type);

    // Verificar si la categoría existe o crearla
    let category = await this.prisma.category.findFirst({
      where: {
        user_id: userId,
        name: validatedCategory.name,
      },
    });
  
    if (!category) {
      category = await this.prisma.category.create({
        data: {
          user_id: userId,
          name: validatedCategory.name,
          type: type === 'ingreso' ? 'Ingreso' : 'Gasto',
          icon: validatedCategory.icon,
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
  
  // Método para validar y estandarizar categorías
  private validateCategory(categoryName: string, type: string): { name: string, icon: string } {
    // Normalizar el nombre de la categoría (quitar acentos, minúsculas, etc.)
    const normalizedCategory = categoryName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Seleccionar la lista de categorías según el tipo
    const categoriesList = type === 'ingreso' ? this.incomeCategories : this.sriExpenseCategories;
    
    // Buscar la categoría más cercana
    for (const category of categoriesList) {
      // Normalizar el nombre de la categoría para la comparación
      const categoryNormalized = category.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
      // Verificar si coincide exactamente
      if (normalizedCategory === categoryNormalized) {
        return { name: category.name, icon: category.icon };
      }
      
      // Verificar si contiene palabras clave
      for (const keyword of category.keywords) {
        const keywordNormalized = keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (normalizedCategory.includes(keywordNormalized)) {
          return { name: category.name, icon: category.icon };
        }
      }
    }
    
    // Si no se encontró coincidencia, usar la categoría por defecto según el tipo
    if (type === 'ingreso') {
      return { name: 'Otros Ingresos', icon: 'pi pi-money-bill' };
    } else {
      return { name: 'Otros Gastos', icon: 'pi pi-folder' };
    }
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
      const timenew = format(t, "hh:mm:ss", l)
      
      // Determinar el tipo de transacción
      const transactionType = (data.type || 'gasto').toLowerCase();
      
      // Validar la categoría antes de devolverla
      const categoryInfo = this.validateCategory(data.categoryName || (transactionType === 'ingreso' ? 'Otros Ingresos' : 'Otros Gastos'), transactionType);
      
      return {
        items: data.items || [],
        amount: data.amount || '0',
        description: data.description || 'Sin descripción',
        type: transactionType,
        date: data.date || datenew,
        time: data.time || timenew,
        categoryName: categoryInfo.name,
        icon: categoryInfo.icon,
        nameTransaction: data.nameTransaction || 'Sin nombre',
      };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Error al parsear el JSON extraído.');
    }
  }
}

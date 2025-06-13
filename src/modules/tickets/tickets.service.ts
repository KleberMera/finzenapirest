/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { format } from '@formkit/tempo';
import { log } from 'console';
import { GenerativeAiService } from 'src/config/generative-ai/generative-ai.service';
import { greetingKeywords, identityKeywords, incomeCategories, sriExpenseCategories, transactionKeywords } from 'src/models/datasetIa';


@Injectable()
export class TicketsService {
  constructor(
    private readonly generativeAIService: GenerativeAiService,
    private readonly prisma: PrismaService
  ) {}
  /**
   * Procesa un texto del usuario y determina si es una transacción o una conversación
   * @param userId ID del usuario
   * @param text Texto enviado por el usuario
   * @returns Respuesta procesada
   */
  async processTextTransaction(userId: number, text: string) {
    // Normalizar el texto para facilitar la detección
    const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Verificar si es un saludo o pregunta sobre identidad
    const isGreeting = greetingKeywords.some(keyword => normalizedText.includes(keyword));
    const isIdentityQuestion = identityKeywords.some(keyword => normalizedText.includes(keyword));
    
    // Si es un saludo o pregunta sobre identidad, manejar como conversación
    if (isGreeting || isIdentityQuestion) {
      return await this.handleConversation(userId, text);
    }
    
    // Verificar si parece una transacción
    const isLikelyTransaction = transactionKeywords.some(keyword => normalizedText.includes(keyword));
    
    // Si parece una transacción, procesarla como tal
    if (isLikelyTransaction) {
      return await this.processTransaction(userId, text);
    }
    
    // Si no estamos seguros, preguntar a la IA si es una transacción
    const isTransactionPrompt = `
      Analiza el siguiente texto y determina si el usuario está intentando registrar una transacción financiera (ingreso o gasto).
      Responde únicamente con "SI" o "NO".
      
      Texto: "${text}"
    `;
    
    const isTransactionResponse = await this.generativeAIService.generateContent(isTransactionPrompt);
    
    // Si la IA detecta que es una transacción, procesarla
    if (isTransactionResponse.trim().toUpperCase().includes('SI')) {
      return await this.processTransaction(userId, text);
    }
    
    // Si no es una transacción, manejar como conversación general
    return await this.handleConversation(userId, text);
  }
  
  /**
   * Procesa un texto como una transacción financiera
   * @param userId ID del usuario
   * @param text Texto de la transacción
   * @returns Transacción procesada
   */
  private async processTransaction(userId: number, text: string) {
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
      status: 200,
      isTransaction: true
    };
  }
  
  /**
   * Maneja una conversación general con el usuario
   * @param userId ID del usuario
   * @param text Texto del usuario
   * @returns Respuesta conversacional
   */
  async handleConversation(userId: number, text: string) {
    // Verificar si es la primera interacción del usuario
    if (!this.hasConversationHistory(userId)) {
      this.generativeAIService.initializeConversationContext(userId);
    }
    
    // Generar respuesta conversacional
    const response = await this.generativeAIService.chat(userId, text);
    
    return {
      message: response,
      status: 200,
      isTransaction: false
    };
  }
  
  /**
   * Verifica si existe historial de conversación para un usuario
   * @param userId ID del usuario
   * @returns true si existe historial, false en caso contrario
   */
  private hasConversationHistory(userId: number): boolean {
    // Esta función debería verificar si hay historial de conversación
    // Por ahora, simplemente inicializamos el contexto cada vez
    return false;
  }
  
  /**
   * Reinicia la conversación con un usuario
   * @param userId ID del usuario
   * @returns Mensaje de confirmación
   */
   resetConversation(userId: number) {
    this.generativeAIService.clearConversationHistory(userId);
    this.generativeAIService.initializeConversationContext(userId);
    
    return {
      message: 'Conversación reiniciada. ¿En qué puedo ayudarte hoy?',
      status: 200
    };
  }

  // Método reutilizable para generar el prompt
  private getPromptTemplate(): string {
    // Crear strings para las categorías
    const expenseCategoriesText = sriExpenseCategories
      .map(cat => `"${cat.name}" (icon: "${cat.icon}")`)
      .join(', ');
    
    const incomeCategoriesText = incomeCategories
      .map(cat => `"${cat.name}" (icon: "${cat.icon}")`)
      .join(', ');

      const t = new Date()
      const datenew =format({
        date: t,
        format: "YYYY-MM-DD",
        tz: "America/Guayaquil",
      })
      const timenew = format({
        date: t,
        format: "hh:mm:ss",
        tz: "America/Guayaquil",
      })
      
      

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
  
  async processReceipt(userId: number, fileBuffer: Buffer, mimeType: string) {
    const prompt = this.getReceiptPrompt('Imagen en memoria');
  
    // Validar el tamaño del archivo
    if (fileBuffer.length === 0) {
      throw new Error('El archivo está vacío o no contiene datos');
    }
    
    console.log(`Tamaño del buffer: ${fileBuffer.length} bytes`);
    console.log(`MimeType: ${mimeType}`);
    
    try {
      const base64Data = fileBuffer.toString('base64');
      console.log(`Inicio de base64: ${base64Data.substring(0, 100)}...`);
  
      const extractedText = await this.generativeAIService.analyzeImageBase(base64Data, mimeType, prompt);
      
      // Verificar si el texto extraído es válido
      if (!extractedText || extractedText.trim().length === 0) {
        throw new Error('No se pudo extraer información del recibo. La imagen podría estar borrosa o no contener texto legible.');
      }
      
      const parsedData = this.parseExtractedText(extractedText);
      
      // Validar los datos parseados
      if (!this.isValidTransactionData(parsedData)) {
        throw new Error('La información extraída del recibo no es suficiente para generar una transacción.');
      }
  
      console.log('Información extraída:', parsedData);
      return await this.saveTransaction(userId, parsedData);
    } catch (error) {
      console.error('Error al procesar el recibo:', error);
      throw new Error(`Error al procesar el recibo: ${error.message}`);
    }
  }
  
  async updateTransactionWithS3Key(transactionId: number, s3Key: string) {
    return await this.prisma.transaction.update({
      where: { id: transactionId },
      data: { receiptImageS3Key: s3Key },
    });
  }
   
  private async saveTransaction(userId: number, parsedData: any, s3Key?: string) {
    // Validar que los datos requeridos estén presentes
    if (!parsedData) {
      throw new Error('No se proporcionaron datos para guardar la transacción');
    }
    
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
    
    // Validar que los campos requeridos tengan valores
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      throw new Error('El monto de la transacción no es válido');
    }
    
    if (!categoryName) {
      throw new Error('No se pudo determinar la categoría de la transacción');
    }

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
        receiptImageS3Key: s3Key,
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
    const categoriesList = type === 'ingreso' ? incomeCategories :sriExpenseCategories;
    
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
  
  private isValidTransactionData(parsedData: any): boolean {
    // Verificar que los campos mínimos requeridos estén presentes
    if (!parsedData) return false;
    
    // Verificar que haya al menos un ítem o un monto
    const hasValidItems = Array.isArray(parsedData.items) && parsedData.items.length > 0 && 
                         parsedData.items.every((item: any) => item.name && item.quantity && item.unitPrice);
    
    const hasValidAmount = parsedData.amount && !isNaN(parseFloat(parsedData.amount)) && parseFloat(parsedData.amount) > 0;
    
    // La transacción es válida si tiene ítems válidos O un monto válido
    return hasValidItems || hasValidAmount;
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
    // Verificar si el texto está vacío
    if (!text || text.trim().length === 0) {
      throw new Error('No se recibió respuesta de la IA o la respuesta está vacía.');
    }
    
    // Intentar extraer el JSON de la respuesta
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('El formato de la respuesta de la IA no es válido. No se encontró un objeto JSON.');
    }
    
    try {
      const data = JSON.parse(jsonMatch[0]);
      const l = "es"
      const t = new Date()
      const datenew = format(t, "YYYY-MM-DD", l)
      const timenew = format(t, "hh:mm:ss", l)
      
      // Determinar el tipo de transacción
      const transactionType = (data.type || 'gasto').toLowerCase();
      
      // Validar que el tipo sea 'ingreso' o 'gasto'
      if (transactionType !== 'ingreso' && transactionType !== 'gasto') {
        throw new Error('Tipo de transacción no válido. Debe ser "ingreso" o "gasto".');
      }
      
      // Validar la categoría antes de devolverla
      const categoryInfo = this.validateCategory(
        data.categoryName || (transactionType === 'ingreso' ? 'Otros Ingresos' : 'Otros Gastos'), 
        transactionType
      );
      
      // Validar y formatear el monto
      let amount = '0';
      if (data.amount) {
        const amountValue = parseFloat(data.amount);
        if (!isNaN(amountValue) && amountValue >= 0) {
          amount = amountValue.toString();
        }
      }
      
      // Validar y formatear los ítems
      let items = [];
      if (Array.isArray(data.items)) {
        items = data.items
          .filter((item: any) => item && item.name && item.quantity && item.unitPrice)
          .map((item: any) => ({
            name: item.name.toString().trim(),
            quantity: item.quantity.toString().trim(),
            unitPrice: item.unitPrice.toString().trim()
          }));
      }
      
      return {
        items,
        amount,
        description: data.description ? data.description.toString().trim() : 'Sin descripción',
        type: transactionType,
        date: data.date || datenew,
        time: data.time || timenew,
        categoryName: categoryInfo.name,
        icon: categoryInfo.icon,
        nameTransaction: data.nameTransaction ? data.nameTransaction.toString().trim() : 'Transacción sin nombre',
      };
      
    } catch (error) {
      console.error('Error al parsear la respuesta de la IA:', error);
      throw new Error(`Error al procesar la información del recibo: ${error.message}`);
    }
  }
}

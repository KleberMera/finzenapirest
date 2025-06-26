import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

@Injectable()
export class GenerativeAiService {
  private genAI: GoogleGenAI;
  private readonly model = 'gemini-2.0-flash';
  private conversationHistory: Map<number, Array<{role: string, parts: Array<{text: string}>}>> = new Map();

  constructor() {
    this.genAI = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });
  }

  /**
   * Genera una respuesta conversacional basada en el texto del usuario
   * @param userId ID del usuario para mantener el historial de conversación
   * @param userText Texto enviado por el usuario
   * @param isTransactionMode Indica si estamos en modo de procesamiento de transacción
   * @returns Respuesta generada por la IA
   */
  async chat(userId: number, userText: string, isTransactionMode = false): Promise<string> {
    // Inicializar historial si no existe para este usuario
    if (!this.conversationHistory.has(userId)) {
      this.conversationHistory.set(userId, []);
    }
    
    const history = this.conversationHistory.get(userId);
    
    // Añadir mensaje del usuario al historial
    history.push({
      role: 'user',
      parts: [{ text: userText }]
    });
    
    // Configuración para la generación de contenido
    const config = {
      temperature: isTransactionMode ? 0.2 : 0.7, // Menos temperatura para transacciones (más preciso)
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };
    
    // Si el historial es muy largo, mantener solo los últimos 10 mensajes
    const recentHistory = history.slice(-10);
    
    // Generar respuesta
    const response = await this.genAI.models.generateContentStream({
      model: this.model,
      config,
      contents: recentHistory,
    });

    let fullText = '';
    for await (const chunk of response) {
      fullText += chunk.text;
    }
    
    // Añadir respuesta de la IA al historial
    history.push({
      role: 'model',
      parts: [{ text: fullText }]
    });
    
    return fullText;
  }

  /**
   * Genera contenido basado en un prompt específico (sin mantener historial)
   * @param prompt Prompt para generar contenido
   * @returns Contenido generado
   */
  async generateContent(prompt: string): Promise<string> {
    const config = {
      responseMimeType: 'text/plain',
    };

    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await this.genAI.models.generateContentStream({
      model: this.model,
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      fullText += chunk.text;
    }
    return fullText;
  }

  /**
   * Limpia el historial de conversación de un usuario
   * @param userId ID del usuario
   */
  clearConversationHistory(userId: number): void {
    this.conversationHistory.set(userId, []);
  }

  /**
   * Inicializa el contexto de la conversación con información del asistente
   * @param userId ID del usuario
   */
  initializeConversationContext(userId: number): void {
    const systemPrompt = {
      role: 'model',
      parts: [{
      text: `¡Hola! 👋 Soy FinzenIA, tu asistente financiero personal.

  Por el momento puedo ayudarte a:
  • **Registrar transacciones** a través de texto o con una imagen 📝📸
  • **Registrar múltiples transacciones** a partir de una imagen o texto 📊
  • **Responder preguntas generales** sobre finanzas personales 💡

  ¿En qué puedo ayudarte hoy?`
      }]
    };
    
    this.conversationHistory.set(userId, [systemPrompt]);
  }

  async analyzeImageBase(
    base64Data: string,
    mimeType: string,
    prompt: string,
  ): Promise<string> {
    const config = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };

    const contents = [
      {
        role: 'user',
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await this.genAI.models.generateContentStream({
      model: this.model,
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      fullText += chunk.text;
    }
    return fullText;
  }

  // El método original ahora llama al método base
  async analyzeImage(
    filePath: string,
    mimeType: string,
    prompt: string,
  ): Promise<string> {
    // Read and encode file as base64
    const fileData = fs.readFileSync(filePath);
    const base64Data = fileData.toString('base64');

    return this.analyzeImageBase(base64Data, mimeType, prompt);
  }
}

import { Injectable } from '@nestjs/common';
//import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {  GoogleAIFileManager } from '@google/generative-ai/server';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class GenerativeAiService {
  private genAI: GoogleGenerativeAI;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private model: any;
  private fileManager: GoogleAIFileManager;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    this.fileManager = new GoogleAIFileManager(process.env.API_KEY);
    
  }

  async generateContent(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    return result.response.text();
  }

  async uploadToGemini(filePath: string, mimeType: string) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo no existe en la ruta: ${filePath}`);
    }

    const uploadResult = await this.fileManager.uploadFile(filePath, {
      mimeType,
      displayName: path.basename(filePath),
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
  }

  async analyzeImage(filePath: string, mimeType: string, prompt: string): Promise<string> {
    const file = await this.uploadToGemini(filePath, mimeType);


    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    const chatSession = this.model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              fileData: {
                mimeType: file.mimeType,
                fileUri: file.uri,
              },
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  }
}

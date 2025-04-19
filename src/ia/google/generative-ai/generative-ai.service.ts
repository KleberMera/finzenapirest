import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';

@Injectable()
export class GenerativeAiService {
  private genAI: GoogleGenAI;
  private readonly model = 'gemini-2.0-flash';

  constructor() {
    this.genAI = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    });
  }

  async generateContent(prompt: string): Promise<string> {
    const model = this.model;
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
      model,
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      fullText += chunk.text;
    }
    return fullText;
  }

  async analyzeImage(
    filePath: string,
    mimeType: string,
    prompt: string,
  ): Promise<string> {
    // Read and encode file as base64
    const fileData = fs.readFileSync(filePath);
    const base64Data = fileData.toString('base64');

    const model = this.model;
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
      model,
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      fullText += chunk.text;
    }
    return fullText;
  }
}

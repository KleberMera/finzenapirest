/* eslint-disable @typescript-eslint/no-misused-promises */
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@codegenie/serverless-express';
import { Context, Handler } from 'aws-lambda';
import express from 'express';
import { AppModule } from './app.module';
import * as firebaseAdmin from 'firebase-admin';
import { serviceAccount } from './libs/services-account';

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(
      AppModule, 
      new ExpressAdapter(expressApp),
    );
    
    // Enable CORS
    nestApp.enableCors({
      origin: [
        'http://localhost:4200',
        'https://fin-zen.vercel.app',
        'http://127.0.0.1:8080',
      ],
    });

    // Initialize Firebase Admin
    if (!firebaseAdmin.apps.length) {
      firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
      });
      firebaseAdmin.messaging();
    }

    nestApp.setGlobalPrefix('api');
    await nestApp.init();
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export const handler = async (event: any, context: Context, callback: any) => {
  const server = await bootstrap();
  return server(event, context, callback);
};
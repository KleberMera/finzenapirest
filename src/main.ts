/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebaseAdmin from 'firebase-admin';
import { serviceAccount } from './libs/services-account';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://fin-zen.vercel.app',
      'http://127.0.0.1:8080',
    ],
  });

  // Initialize Firebase Admin
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
  });
  firebaseAdmin.messaging();

  const port = process.env.PORT || 3000;
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}

bootstrap();

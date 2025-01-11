import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebaseAdmin from 'firebase-admin';
import * as fs from 'fs';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://fin-zen.vercel.app'],
  });
  //firebase ;
  const firebaseKeyFilePath =
    './finzen-7e19c-firebase-adminsdk-4555i-0ace0ecd26.json';
  const firebaseServiceAccount /*: ServiceAccount*/ = JSON.parse(
    fs.readFileSync(firebaseKeyFilePath).toString(),
  );
  if (firebaseAdmin.apps.length === 0) {
    console.log('Initialize Firebase Application.');
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(firebaseServiceAccount),
    });
  }
  const port = process.env.PORT || 3000;
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();

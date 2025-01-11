import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebaseAdmin from 'firebase-admin';
const serviceAccount   = {
  type: process.env.FIREBASE_TYPE,
  projectId: process.env.FIREBASE_PROJECT_ID, // Nota: es projectId, no project_id
  privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID, // Nota: es privateKeyId, no private_key_id
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Nota: es privateKey, no private_key
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL, // Nota: es clientEmail, no client_email
  clientId: process.env.FIREBASE_CLIENT_ID,
  authUri: process.env.FIREBASE_AUTH_URI, // Nota: es authUri, no auth_uri
  tokenUri: process.env.FIREBASE_TOKEN_URI, // Nota: es tokenUri, no token_uri
  authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  clientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://fin-zen.vercel.app'],
  });
  //firebase ;
  
 
  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount)
    });
  }
  const port = process.env.PORT || 3000;
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();

// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for Next.js frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Next.js default port
    credentials: true,
  });

  await app.listen(4000);
  console.log('NestJS backend running on http://localhost:4000');
}
bootstrap();
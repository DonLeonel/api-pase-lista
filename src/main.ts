import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const _PORT = process.env.PORT ?? 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(_PORT);
  console.log(`Servido corriendo. http://localhost:${_PORT}/`);  
}
bootstrap();

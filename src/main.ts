import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const _PORT = process.env.PORT_APP ?? 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(_PORT);
  console.log(`Servido corriendo. ${_PORT}`);  
  
}
bootstrap();

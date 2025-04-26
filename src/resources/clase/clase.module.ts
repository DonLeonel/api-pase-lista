import { Module } from '@nestjs/common';
import { ClaseService } from './clase.service';
import { ClaseController } from './clase.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ClaseController],
  providers: [ClaseService, PrismaService],
  exports: [ClaseService], // Exportamos el servicio para que pueda ser utilizado en otros módulos
})
export class ClaseModule {}

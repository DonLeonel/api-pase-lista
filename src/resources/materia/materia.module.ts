import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClaseModule } from '../clase/clase.module';

@Module({
  imports: [ClaseModule], // Importamos el módulo de Clase para poder usar su servicio
  controllers: [MateriaController],
  providers: [MateriaService, PrismaService],
})
export class MateriaModule {}

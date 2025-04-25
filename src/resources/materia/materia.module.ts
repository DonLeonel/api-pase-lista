import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MateriaController],
  providers: [MateriaService, PrismaService],
  exports: [MateriaService], // Exportamos el servicio para que pueda ser utilizado en otros módulos
})
export class MateriaModule {}

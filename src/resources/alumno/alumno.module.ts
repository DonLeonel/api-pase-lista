import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AlumnoController],
  providers: [AlumnoService, PrismaService],
})
export class AlumnoModule { }

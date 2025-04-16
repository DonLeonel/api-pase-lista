import { Module } from '@nestjs/common';
import { UserDocenteService } from './user-docente.service';
import { UserDocenteController } from './user-docente.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserDocenteController],
  providers: [UserDocenteService, PrismaService],
})
export class UserDocenteModule {}

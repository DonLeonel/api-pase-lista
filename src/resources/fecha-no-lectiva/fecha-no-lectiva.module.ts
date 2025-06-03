import { Module } from '@nestjs/common';
import { FechaNoLectivaService } from './fecha-no-lectiva.service';
import { FechaNoLectivaController } from './fecha-no-lectiva.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FechaNoLectivaController],
  providers: [FechaNoLectivaService, PrismaService],
})
export class FechaNoLectivaModule {}

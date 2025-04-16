import { Module } from '@nestjs/common';
import { UserDocenteService } from './user-docente.service';
import { UserDocenteController } from './user-docente.controller';

@Module({
  controllers: [UserDocenteController],
  providers: [UserDocenteService],
})
export class UserDocenteModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { ClaseModule } from './clase/clase.module';
import { MateriaModule } from './materia/materia.module';
import { CursoModule } from './curso/curso.module';
import { UserDocenteModule } from './user-docente/user-docente.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [AlumnoModule, AsistenciaModule, ClaseModule, MateriaModule, CursoModule, UserDocenteModule, RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

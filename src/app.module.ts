import { Module } from '@nestjs/common';
import { AlumnoModule } from './resources/alumno/alumno.module';
import { AsistenciaModule } from './resources/asistencia/asistencia.module';
import { ClaseModule } from './resources/clase/clase.module';
import { MateriaModule } from './resources/materia/materia.module';
import { CursoModule } from './resources/curso/curso.module';
import { UserDocenteModule } from './resources/user-docente/user-docente.module';

@Module({
  imports: [AlumnoModule, AsistenciaModule, ClaseModule, MateriaModule, CursoModule, UserDocenteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

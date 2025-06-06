import { Module } from '@nestjs/common';
import { AlumnoModule } from './resources/alumno/alumno.module';
import { AsistenciaModule } from './resources/asistencia/asistencia.module';
import { ClaseModule } from './resources/clase/clase.module';
import { MateriaModule } from './resources/materia/materia.module';
import { CursoModule } from './resources/curso/curso.module';
import { UserDocenteModule } from './resources/user-docente/user-docente.module';
import { FechaNoLectivaModule } from './resources/fecha-no-lectiva/fecha-no-lectiva.module';
import { ConfigModule } from '@nestjs/config';
import config from 'configs/appConfig';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
    load: [config]
  }), AlumnoModule, AsistenciaModule, ClaseModule, MateriaModule, CursoModule, UserDocenteModule, FechaNoLectivaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

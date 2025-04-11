import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoDto } from './create-alumno.dto';

export class UpdateAlumnoDto extends PartialType(CreateAlumnoDto) {

    id: number
    legajo: number
    nombre: string
    apellido: string
    celular: string
    activo: boolean
    created_At: string
}

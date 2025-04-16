import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDocenteDto } from './create-user-docente.dto';

export class UpdateUserDocenteDto extends PartialType(CreateUserDocenteDto) {
    id: number
    email: string
    password: string
    nombre: string
    apellido: string
    id_rol: number
}

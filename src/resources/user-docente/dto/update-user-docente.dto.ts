import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDocenteDto } from './create-user-docente.dto';

export class UpdateUserDocenteDto extends PartialType(CreateUserDocenteDto) {
   
}

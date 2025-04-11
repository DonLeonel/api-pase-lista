import { Injectable } from '@nestjs/common';
import { CreateUserDocenteDto } from './dto/create-user-docente.dto';
import { UpdateUserDocenteDto } from './dto/update-user-docente.dto';

@Injectable()
export class UserDocenteService {
  create(createUserDocenteDto: CreateUserDocenteDto) {
    return 'This action adds a new userDocente';
  }

  findAll() {
    return `This action returns all userDocente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDocente`;
  }

  update(id: number, updateUserDocenteDto: UpdateUserDocenteDto) {
    return `This action updates a #${id} userDocente`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDocente`;
  }
}

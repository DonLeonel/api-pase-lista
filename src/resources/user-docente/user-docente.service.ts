import { Injectable } from '@nestjs/common';
import { CreateUserDocenteDto } from './dto/create-user-docente.dto';
import { UpdateUserDocenteDto } from './dto/update-user-docente.dto';

let USERS_DOCENTES = [
  {
    id: 1,
    email: 'franco.perez@example.com',
    password: 'pass123',
    nombre: 'Franco',
    apellido: 'Pérez',
    id_rol: 1,
  },
  {
    id: 2,
    email: 'lucia.gomez@example.com',
    password: 'lucia456',
    nombre: 'Lucía',
    apellido: 'Gómez',
    id_rol: 2,

  },
  {
    id: 3,
    email: 'matias.fernandez@example.com',
    password: 'matias789',
    nombre: 'Matías',
    apellido: 'Fernández',
    id_rol: 3,

  },
  {
    id: 4,
    email: 'carla.romero@example.com',
    password: 'carla321',
    nombre: 'Carla',
    apellido: 'Romero',
    id_rol: 2,

  },
  {
    id: 5,
    email: 'juan.lopez@example.com',
    password: 'juan654',
    nombre: 'Juan',
    apellido: 'López',
    id_rol: 1,

  }
]


@Injectable()
export class UserDocenteService {
  create(createUserDocenteDto: CreateUserDocenteDto) {
    const ultID = Math.max(...USERS_DOCENTES.map(a => a.id), 0)

    const newX = {
      id: ultID + 1,
      ...createUserDocenteDto
    }
    USERS_DOCENTES.push(newX);
    return newX;
  }

  findAll() {
    return USERS_DOCENTES
  }

  findOne(id: number) {
    return USERS_DOCENTES.find((a) => a.id === id);
  }

  update(id: number, updateUserDocenteDto: UpdateUserDocenteDto) {
    return USERS_DOCENTES.map(u => u.id === id ? { ...u, ...updateUserDocenteDto } : u)
      .find((u) => u.id === id);
  }

  remove(id: number) {
    return `This action removes a #${id} userDocente`;
  }
}

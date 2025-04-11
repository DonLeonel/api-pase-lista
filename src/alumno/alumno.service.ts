import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

let ALUMNOS = [
  {
    id: 1,
    legajo: 1001,
    nombre: "Lucía",
    apellido: "Fernández",
    celular: "1123456789",
    activo: true,
    created_At: "2024-03-15T10:30:00Z",
  },
  {
    id: 2,
    legajo: 1002,
    nombre: "Martín",
    apellido: "Gómez",
    celular: "1134567890",
    activo: true,
    created_At: "2024-03-16T14:45:00Z",
  },
  {
    id: 3,
    legajo: 1003,
    nombre: "Carla",
    apellido: "Rodríguez",
    celular: "1145678901",
    activo: false,
    created_At: "2024-03-17T09:15:00Z",
  },
  {
    id: 4,
    legajo: 1004,
    nombre: "Joaquín",
    apellido: "Pérez",
    celular: "1156789012",
    activo: true,
    created_At: "2024-03-18T11:00:00Z",
  },
  {
    id: 5,
    legajo: 1005,
    nombre: "Valentina",
    apellido: "López",
    celular: "1167890123",
    activo: false,
    created_At: "2024-03-19T08:20:00Z",
  }
];


@Injectable()
export class AlumnoService {
  create(createAlumnoDto: CreateAlumnoDto) {

    const ultID = Math.max(...ALUMNOS.map(a => a.id), 0)

    const newAlumn = {
      id: ultID + 1,
      ...createAlumnoDto
    }
    ALUMNOS.push(newAlumn);
    return newAlumn;
  }

  findAll() {
    return ALUMNOS;
  }

  findOne(id: number) {
    return ALUMNOS.filter((a) => a.id === id);
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return ALUMNOS.map(a => a.id === id ? { ...a, ...updateAlumnoDto } : a)
      .find((a) => a.id === id);
  }

  remove(id: number) {
    return ALUMNOS.filter((a) => a.id !== id);
  }
}

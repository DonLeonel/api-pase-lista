import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlumnoService {

  constructor(private readonly prisma: PrismaService) {
  }

  async create(createAlumnoDto: CreateAlumnoDto) {
    try {
      const nuevoAlumno = await this.prisma.alumno.create({
        data: {
          ...createAlumnoDto,
        },
      })
      return nuevoAlumno
    } catch (error) {
      console.error('Error al crear alumno. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findAll() {
    try {
      return await this.prisma.alumno.findMany({
        where: {
          activo: true,
          deletedAt: null
        }
      })
    } catch (error) {
      console.error('Error al buscar los alumnos.', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.alumno.findUnique({
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al buscar el alumno. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    try {
      return await this.prisma.alumno.update({
        data: {
          ...updateAlumnoDto,
          updatedAt: new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al actualizar el alumno. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async removeOrAdd(id: number) {
    try {
      const alumno = await this.findOne(id);     
      return await this.prisma.alumno.update({
        data: {
          activo: !alumno?.activo,
          deletedAt: !alumno?.activo ? null : new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al borrar o recuperar el alumno. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }
}

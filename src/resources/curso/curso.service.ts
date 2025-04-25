import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMateriaDto } from '../materia/dto/create-materia.dto';

@Injectable()
export class CursoService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(createCursoDto: CreateCursoDto) {
    try {
      const nuevo = await this.prisma.cursos.create({
        data: {
          ...createCursoDto,
        }
      })
      return nuevo
    } catch (error) {
      console.error('Error al crear curso. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findAll() {
    try {
      return await this.prisma.cursos.findMany({
        where: {
          deletedAt: null
        }
      })
    } catch (error) {
      console.error('Error al buscar los cursos.', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findOne(id: number) {
    try {
      const model = await this.prisma.cursos.findUnique({
        include: {
          Materias: true
        },
        where: {
          id
        }
      })
      if (!model) throw new NotFoundException(`Curso no encontrado`)
      return model
    } catch (error) {
      console.error('Error al buscar el curso. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    try {
      return await this.prisma.cursos.update({
        data: {
          ...updateCursoDto,
          updatedAt: new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al actualizar el curso. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async removeOrAdd(id: number) {
    try {
      const curso = await this.findOne(id);
      return await this.prisma.cursos.update({
        data: {
          deletedAt: curso?.deletedAt ? null : new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al borrar o recuperar el curso. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }
}

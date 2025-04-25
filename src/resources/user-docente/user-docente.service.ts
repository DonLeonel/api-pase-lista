import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDocenteDto } from './dto/create-user-docente.dto';
import { UpdateUserDocenteDto } from './dto/update-user-docente.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserDocenteService {

  constructor(private readonly prisma: PrismaService) {
  }

  async create(createUserDocenteDto: CreateUserDocenteDto) {
    try {
      const nuevo = await this.prisma.usersDocentes.create({
        data: {
          ...createUserDocenteDto
        },
      })
      return nuevo
    } catch (error) {
      console.error('Error al crear docente. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findAll() {
    try {
      return await this.prisma.usersDocentes.findMany({
        where: {
          deletedAt: null
        }
      })
    } catch (error) {
      console.error('Error al buscar los docentes.', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findOne(id: number) {
    try {
      const model = await this.prisma.usersDocentes.findUnique({
        include: {
          Materias: {
            select: {
              id: true,
              nombre: true,
            }
          }
        },
        where: {
          id
        }
      })
      if (!model) throw new NotFoundException(`Docente no encontrado`)
      return model
    } catch (error) {
      console.error('Error al buscar el docente. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async update(id: number, updateUserDocenteDto: UpdateUserDocenteDto) {
    try {
      return await this.prisma.usersDocentes.update({
        data: {
          ...updateUserDocenteDto,
          updatedAt: new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al actualizar el docente. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async removeOrAdd(id: number) {
    try {
      const docente = await this.findOne(id);
      return await this.prisma.usersDocentes.update({
        data: {
          deletedAt: docente?.deletedAt ? null : new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al borrar o recuperar el docente. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }
}

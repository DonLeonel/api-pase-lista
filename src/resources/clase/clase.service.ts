import { Injectable } from '@nestjs/common';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { construirDataActualizacion } from 'src/helper/construirDataActualizacion';

@Injectable()
export class ClaseService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createClaseDto: CreateClaseDto) {
    try {
      const { idMateria, ...resto } = createClaseDto
      const nuevo = await this.prisma.clase.create({
        data: {
          ...resto,
          materia: {
            connect: {
              id: +idMateria
            }
          }
        },
      })
      return nuevo

    } catch (error) {
      console.error('Error al crear la clase. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findAll() {
    try {
      return await this.prisma.clase.findMany({
        where: {
          deletedAt: null
        }
      })
    } catch (error) {
      console.error('Error al buscar las clase.', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.clase.findUnique({
        include: {
          materia: {
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
    } catch (error) {
      console.error('Error al buscar la clase. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async update(id: number, updateClaseDto: UpdateClaseDto) {
    try {
      const actual = await this.prisma.clase.findUnique({
        include: {
          materia: {
            select: {
              id: true,
            }
          }
        },
        where: {
          id
        }
      })
      if (!actual) throw new Error('Clase no encontrada')

      return await this.prisma.clase.update({
        data: construirDataActualizacion(actual, updateClaseDto, {
          idMateria: 'materia'
        }),
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al actualizar la clase. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async removeOrAdd(id: number) {
    try {
      const clase = await this.findOne(id);
      return await this.prisma.clase.update({
        data: {
          deletedAt: clase?.deletedAt ? null : new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al borrar o recuperar la clase. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }
}

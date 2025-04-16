import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MateriaService {

  constructor(private readonly prisma: PrismaService) {
  }

  async create(createMateriaDto: CreateMateriaDto) {
    try {
      const { idUserDocente, idCurso, ...resto } = createMateriaDto;
      const nuevo = await this.prisma.materia.create({
        data: {
          ...resto,
          userDocente: {
            connect: {
              id: +idUserDocente,
            },
          },
          curso: {
            connect: {
              id: +idCurso,
            },
          },
        },
      })
      return nuevo
    } catch (error) {
      console.error('Error al crear la materia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findAll() {
    try {
      return await this.prisma.materia.findMany({
        where: {
          deletedAt: null
        }
      })
    } catch (error) {
      console.error('Error al buscar las materias.', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.materia.findUnique({
        include: {
          userDocente: {
            select:{
              id:true,
              nombre: true,
              apellido: true,
              email: true
            }
          },
          curso: true          
        },        
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al buscar la materia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    try {
      return await this.prisma.materia.update({
        data: {
          ...updateMateriaDto,
          updatedAt: new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al actualizar la materia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async removeOrAdd(id: number) {
    try {
      const materia = await this.findOne(id);
      return await this.prisma.materia.update({
        data: {
          deletedAt: materia?.deletedAt ? null : new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al borrar o recuperar la materia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }
}

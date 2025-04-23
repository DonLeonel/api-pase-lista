import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { construirDataActualizacion } from 'src/helper/construirDataActualizacion';

@Injectable()
export class AsistenciaService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createAsistenciaDto: CreateAsistenciaDto) {
    try {
      const { idClase, idAlumno, ...resto } = createAsistenciaDto
      const nuevo = await this.prisma.asistencia.create({
        data: {
          ...resto,
          alumno: {
            connect: {
              id: +idAlumno
            }
          },
          clase: {
            connect: {
              id: +idClase
            }
          }
        },
      })
      return nuevo

    } catch (error) {
      console.error('Error al crear la asistencia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findAll() {
    try {
      return await this.prisma.asistencia.findMany({
        where: {
          deletedAt: null
        }
      })
    } catch (error) {
      console.error('Error al buscar las asistencias.', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.asistencia.findUnique({
        include: {
          clase: {
            select: {              
              fechaHora: true,
            }
          },
          alumno: {
            select: {              
              nombre: true,
              apellido: true,
            },
          }
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al buscar la asistencia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    try {
      const actual = await this.prisma.asistencia.findUnique({
        include: {
          clase: {
            select: {
              id: true,
            }
          },
          alumno: {
            select: {
              id: true,
            }
          }
        },
        where: {
          id
        }
      })
      if (!actual) throw new Error('Asistencia no encontrada')

      return await this.prisma.asistencia.update({
        data: construirDataActualizacion(actual, updateAsistenciaDto, {
          idAlumno: 'alumno',
          idClase: 'clase'
        }),
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al actualizar la asistencia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async remove(id: number) {
    try {
      const asistencia = await this.findOne(id);
      return await this.prisma.asistencia.update({
        data: {
          deletedAt: asistencia?.deletedAt ? null : new Date()
        },
        where: {
          id
        }
      })
    } catch (error) {
      console.error('Error al borrar o recuperar la Asistencia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }
}

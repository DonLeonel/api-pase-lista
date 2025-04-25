import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { construirDataActualizacion } from 'src/utils/construirDataActualizacion';
import { CreateHorarioClaseDto } from './dto/create-diaHorarioClase.dto';

@Injectable()
export class MateriaService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createMateriaDto: CreateMateriaDto) {
    try {
      const { idCurso, idUserDocente, nombre, ...resto } = createMateriaDto
      if (await this.existeMateriaEnCurso(nombre, +idCurso, +idUserDocente)) {
        throw new BadRequestException('Ya existe una materia con ese nombre y docente en el curso')
      }

      const nuevo = await this.prisma.materias.create({
        data: {
          ...resto,
          nombre,
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
      return await this.prisma.materias.findMany({
        include: {
          DiasHorariosClases: {
            select: {
              id: true,
              dias: true,
              horaInicio: true,
              duracionMinutos: true
            }
          }
        },
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
      const model = await this.prisma.materias.findUnique({
        include: {
          userDocente: {
            select: {
              id: true,
              nombre: true,
              apellido: true,
              email: true
            }
          },
          DiasHorariosClases: {
            select: {
              id: true,
              dias: true,
              horaInicio: true,
              duracionMinutos: true
            }
          },
          curso: true
        },
        where: {
          id
        }
      })
      if (!model) throw new NotFoundException(`Materia no encontrada`)
      return model
    } catch (error) {
      console.error('Error al buscar la materia. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    try {
      const actual = await this.prisma.materias.findUnique({
        include: {
          userDocente: {
            select: {
              id: true
            }
          },
          curso: {
            select: {
              id: true,
            }
          }
        },
        where: {
          id
        }
      })
      if (!actual) throw new Error('Materia no encontrada')

      return await this.prisma.materias.update({
        data: construirDataActualizacion(actual, updateMateriaDto, {
          idUserDocente: 'userDocente',
          idCurso: 'curso'
        }),
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
      return await this.prisma.materias.update({
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

  async createDiasHorarioClase(createDiasHorarioClase: CreateHorarioClaseDto) {
    try {
      const { idMateria, ...resto } = createDiasHorarioClase
      return await this.prisma.diasHorariosClases.create({
        data: {
          ...resto,
          materia: {
            connect: {
              id: +idMateria,
            },
          },
        }
      })
    }
    catch (error) {
      console.error('Error al crear los días y horarios de clase. ', error)
      throw error // relanza el error para que el controller lo pueda manejar
    }
  }

  private async existeMateriaEnCurso(nombre: string, idCurso: number, idUserDocente: number): Promise<boolean> {
    const count = await this.prisma.materias.count({
      where: {
        nombre: nombre.trim(),
        idCurso,
        idUserDocente
      },
    });
    return count > 0; // Si hay 1 o más materias, significa que existe
  }
}

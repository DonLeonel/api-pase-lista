import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { construirDataActualizacion } from 'src/utils/construirDataActualizacion';
import { CreateDiasHorarioClaseDto } from './dto/create-diaHorarioClase.dto';
import { ClaseService } from '../clase/clase.service';
import { formatearFecha } from 'src/utils/formatFechaLocal';

@Injectable()
export class MateriaService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly claseService: ClaseService
  ) { }

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

  async createClases(idMateria: number) {

    const materia = await this.findOne(idMateria);
    const fechasNoLectivas = await this.prisma.fechaNoLectivas.findMany();

    // Generamos las clases basadas en la materia y las fechas no lectivas
    const clases = this.generarClases(materia, fechasNoLectivas);
    console.log('clases generadas:', clases);
    // Verificamos las clases ya existentes para la materia
    const fechaClasesExistentes = await this.verificarClaseExistente(idMateria);
    console.log('fechas exis:', fechaClasesExistentes);

    // Filtramos las clases que no existan en la base de datos para evitar duplicados
    const clasesNuevas = clases.filter(clase =>
      !fechaClasesExistentes.some(fClaseExistente => fClaseExistente.getTime() === clase.fechaHora.getTime())
    );

    console.log('nuevas clases:', clasesNuevas);

    // Si no hay clases nuevas, retornamos un array vacío
    if (clasesNuevas.length === 0) {
      return [];
    }

    // Si hay clases nuevas, las insertamos en la base de datos
    try {
      // Retornamos las clases creadas
      return await this.prisma.clases.createMany({
        data: clasesNuevas,
      })
    } catch (error) {
      console.error('Error al crear las clases. ', error)
      throw new Error('Error al crear las clases. ' + error.message)
    }
  }

  private generarClases(materia: any, fechasNoLectivas: any[]) {
    const clases: { idMateria: number; fechaHora: Date }[] = [];

    const inicio = formatearFecha(materia.fechaInicio);
    const fin = formatearFecha(materia.fechaFin);   

    let actual = inicio.clone();

    while (actual.isSameOrBefore(fin, 'day')) {
      const diaSemana = actual.format('dddd').toUpperCase(); // día de la semana en español

      if (this.esFechaNoLectiva(actual.toDate(), fechasNoLectivas)) {
        actual = actual.add(1, 'day');
        continue;
      }

      for (const config of materia.DiasHorariosClases) {
        if (config.dias.includes(diaSemana)) {
          const [hora, minutos] = config.horaInicio.split(':').map(Number);

          const fechaHora = actual
            .hour(hora)
            .minute(minutos)
            .second(0)
            .millisecond(0);

          clases.push({
            idMateria: materia.id,
            fechaHora: fechaHora.utc(true).toDate(),
          });
        }
      }
      actual = actual.add(1, 'day');
    }

    return clases;
  }

  private async verificarClaseExistente(idMateria: number) {
    // Obtenemos las fechas y horarios de las clases ya generadas para la materia

    const existentes = await this.prisma.clases.findMany({
      where: {
        deletedAt: null,
        idMateria: idMateria, // Aseguramos que las clases son de la misma materia
      },
      select: {
        fechaHora: true, // Seleccionamos solo el campo 'fechaHora'
      },
    });

    // Mapeamos y devolvemos solo el campo 'fechaHora' de las clases existentes
    return existentes.map(clase => clase.fechaHora);
  }

  private esFechaNoLectiva(fecha: Date, fechas: any[]): boolean {
    // Verificamos si la fecha está dentro de alguna fecha no lectiva
    return fechas.some(f =>
      fecha >= new Date(f.fechaInicio) &&
      fecha <= new Date(f.fechaFin)
    );
  }


  async createDiasHorarioClase(id: number,createDiasHorarioClase: CreateDiasHorarioClaseDto) {
    try {      
      return await this.prisma.diasHorariosClases.create({
        data: {
          ...createDiasHorarioClase,
          materia: {
            connect: {
              id,
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

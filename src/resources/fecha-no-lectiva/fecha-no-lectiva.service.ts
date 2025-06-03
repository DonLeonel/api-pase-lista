import { Injectable } from '@nestjs/common';
import { CreateFechaNoLectivaDto } from './dto/create-fecha-no-lectiva.dto';
import { UpdateFechaNoLectivaDto } from './dto/update-fecha-no-lectiva.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FechaNoLectivaService {

  constructor(private readonly prisma: PrismaService) { }

  create(createFechaNoLectivaDto: CreateFechaNoLectivaDto) {
    return this.prisma.fechaNoLectivas.create({
      data: createFechaNoLectivaDto,
    })
  }

  findAll() {
    return this.prisma.fechaNoLectivas.findMany();
  }

  findOne(id: number) {
    return this.prisma.fechaNoLectivas.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateFechaNoLectivaDto: UpdateFechaNoLectivaDto) {
    return this.prisma.fechaNoLectivas.update({
      where: { id: id },    
      data: updateFechaNoLectivaDto
    })
  }

  remove(id: number) {
    return this.prisma.fechaNoLectivas.delete({
      where: { id: id }
    })
  }
}

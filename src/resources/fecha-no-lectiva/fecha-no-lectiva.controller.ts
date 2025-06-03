import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FechaNoLectivaService } from './fecha-no-lectiva.service';
import { CreateFechaNoLectivaDto } from './dto/create-fecha-no-lectiva.dto';
import { UpdateFechaNoLectivaDto } from './dto/update-fecha-no-lectiva.dto';

@Controller('fecha-no-lectiva')
export class FechaNoLectivaController {
  constructor(private readonly fechaNoLectivaService: FechaNoLectivaService) {}

  @Post()
  create(@Body() createFechaNoLectivaDto: CreateFechaNoLectivaDto) {
    return this.fechaNoLectivaService.create(createFechaNoLectivaDto);
  }

  @Get()
  findAll() {
    return this.fechaNoLectivaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fechaNoLectivaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFechaNoLectivaDto: UpdateFechaNoLectivaDto) {
    return this.fechaNoLectivaService.update(+id, updateFechaNoLectivaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fechaNoLectivaService.remove(+id);
  }
}

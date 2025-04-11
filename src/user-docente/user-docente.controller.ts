import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDocenteService } from './user-docente.service';
import { CreateUserDocenteDto } from './dto/create-user-docente.dto';
import { UpdateUserDocenteDto } from './dto/update-user-docente.dto';

@Controller('user-docente')
export class UserDocenteController {
  constructor(private readonly userDocenteService: UserDocenteService) {}

  @Post()
  create(@Body() createUserDocenteDto: CreateUserDocenteDto) {
    return this.userDocenteService.create(createUserDocenteDto);
  }

  @Get()
  findAll() {
    return this.userDocenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDocenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDocenteDto: UpdateUserDocenteDto) {
    return this.userDocenteService.update(+id, updateUserDocenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDocenteService.remove(+id);
  }
}

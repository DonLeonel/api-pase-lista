import { PartialType } from '@nestjs/mapped-types';
import { CreateFechaNoLectivaDto } from './create-fecha-no-lectiva.dto';

export class UpdateFechaNoLectivaDto extends PartialType(CreateFechaNoLectivaDto) {}

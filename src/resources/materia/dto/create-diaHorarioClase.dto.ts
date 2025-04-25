import { Dias } from "generated/prisma";

export class CreateHorarioClaseDto {
    idMateria: number;
    dias: Dias[];
    horaInicio: string;
    duracionMinutos: number;
}
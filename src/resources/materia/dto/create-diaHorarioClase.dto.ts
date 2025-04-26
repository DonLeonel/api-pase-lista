import { Dias } from "generated/prisma";

export class CreateDiasHorarioClaseDto {
    idMateria: number;
    dias: Dias[];
    horaInicio: string;
    duracionMinutos: number;
}
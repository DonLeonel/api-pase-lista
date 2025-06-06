import { Dias } from "@prisma/client";

export class CreateDiasHorarioClaseDto {    
    dias: Dias[];
    horaInicio: string;
    duracionMinutos: number;
}
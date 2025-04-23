import { Estado } from "generated/prisma";

export class CreateAsistenciaDto {    
    idClase: number;
    idAlumno: number;
    estado: Estado;
    nota: string;
}

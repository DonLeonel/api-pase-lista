import { Estados } from "generated/prisma";

export class CreateAsistenciaDto {    
    idClase: number;
    idAlumno: number;
    estado: Estados;
    nota: string;
}

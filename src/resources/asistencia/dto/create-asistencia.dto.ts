import { Estados } from "@prisma/client";


export class CreateAsistenciaDto {    
    idClase: number;
    idAlumno: number;
    estado: Estados;
    nota: string;
}

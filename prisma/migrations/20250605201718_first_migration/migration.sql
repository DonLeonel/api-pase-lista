-- CreateEnum
CREATE TYPE "Dias" AS ENUM ('LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "Estados" AS ENUM ('PRESENTE', 'AUSENTE', 'JUSTIFICADO');

-- CreateTable
CREATE TABLE "Alumnos" (
    "id" SERIAL NOT NULL,
    "legajo" VARCHAR(30) NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "apellido" VARCHAR(30) NOT NULL,
    "celular" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP,

    CONSTRAINT "Alumnos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clases" (
    "id" SERIAL NOT NULL,
    "fechaHora" TIMESTAMP NOT NULL,
    "idMateria" INTEGER NOT NULL,
    "suspendida" BOOLEAN NOT NULL DEFAULT false,
    "motivo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP,

    CONSTRAINT "Clases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencias" (
    "id" SERIAL NOT NULL,
    "idAlumno" INTEGER NOT NULL,
    "idClase" INTEGER NOT NULL,
    "estado" "Estados" NOT NULL DEFAULT 'PRESENTE',
    "nota" TEXT,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP,

    CONSTRAINT "Asistencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersDocentes" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "apellido" VARCHAR(30) NOT NULL,
    "rol" VARCHAR(15) NOT NULL DEFAULT 'DOCENTE',
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP,

    CONSTRAINT "UsersDocentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materias" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "idUserDocente" INTEGER NOT NULL,
    "idCurso" INTEGER NOT NULL,
    "fechaInicio" DATE NOT NULL,
    "fechaFin" DATE NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP,

    CONSTRAINT "Materias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiasHorariosClases" (
    "id" SERIAL NOT NULL,
    "idMateria" INTEGER NOT NULL,
    "dias" "Dias"[],
    "horaInicio" TEXT NOT NULL,
    "duracionMinutos" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP,

    CONSTRAINT "DiasHorariosClases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cursos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "turno" VARCHAR(10),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP,

    CONSTRAINT "Cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FechaNoLectivas" (
    "id" SERIAL NOT NULL,
    "fechaInicio" DATE NOT NULL,
    "fechaFin" DATE NOT NULL,
    "motivo" VARCHAR(100) NOT NULL,

    CONSTRAINT "FechaNoLectivas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlumnosToCursos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AlumnosToCursos_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersDocentes_email_key" ON "UsersDocentes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FechaNoLectivas_fechaInicio_key" ON "FechaNoLectivas"("fechaInicio");

-- CreateIndex
CREATE INDEX "_AlumnosToCursos_B_index" ON "_AlumnosToCursos"("B");

-- AddForeignKey
ALTER TABLE "Clases" ADD CONSTRAINT "Clases_idMateria_fkey" FOREIGN KEY ("idMateria") REFERENCES "Materias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencias" ADD CONSTRAINT "Asistencias_idAlumno_fkey" FOREIGN KEY ("idAlumno") REFERENCES "Alumnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencias" ADD CONSTRAINT "Asistencias_idClase_fkey" FOREIGN KEY ("idClase") REFERENCES "Clases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materias" ADD CONSTRAINT "Materias_idUserDocente_fkey" FOREIGN KEY ("idUserDocente") REFERENCES "UsersDocentes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materias" ADD CONSTRAINT "Materias_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiasHorariosClases" ADD CONSTRAINT "DiasHorariosClases_idMateria_fkey" FOREIGN KEY ("idMateria") REFERENCES "Materias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlumnosToCursos" ADD CONSTRAINT "_AlumnosToCursos_A_fkey" FOREIGN KEY ("A") REFERENCES "Alumnos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlumnosToCursos" ADD CONSTRAINT "_AlumnosToCursos_B_fkey" FOREIGN KEY ("B") REFERENCES "Cursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

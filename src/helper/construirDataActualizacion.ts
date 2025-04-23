/**
 * Construye el objeto `data` para actualizar una entidad Prisma,
 * sin sobrescribir con null o undefined, y manteniendo relaciones si no se envían.
 *
 * @param actual - Datos actuales obtenidos desde la base de datos
 * @param dto - DTO parcial con los nuevos datos
 * @param relaciones - Mapa del campo ID (en el DTO/modelo) al nombre de la relación Prisma
 * @returns Objeto `data` listo para Prisma
 */
export function construirDataActualizacion<T extends { id: number }>(
  actual: T,
  dto: Partial<T>,
  relaciones: { [campoId in keyof T]?: string } = {}
): any {
  const data: any = {};

  for (const key in dto) {
    const valor = dto[key as keyof T];

    // Si el campo no es null ni undefined
    if (valor !== undefined && valor !== null) {
      if (relaciones[key as keyof T]) {
        // Es un campo de relación
        const nombreRelacion = relaciones[key as keyof T]!;

        data[nombreRelacion] = {
          connect: { id: +valor },
        };
      } else {
        // Campo simple
        data[key] = valor;
      }
    } else if (relaciones[key as keyof T] && actual[key as keyof T]) {
      // Si no se envió pero ya hay una relación, la mantenemos
      const nombreRelacion = relaciones[key as keyof T]!;
      data[nombreRelacion] = {
        connect: { id: actual[key as keyof T] },
      };
    }
  }

  data.updatedAt = new Date();

  return data;
}

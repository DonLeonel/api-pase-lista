import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import 'dayjs/locale/es';   // Importar la localización en español  

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isSameOrBefore);
dayjs.locale('es'); // Establecer la localización en español


export function formatearFecha(fecha: Date | string) {
    return dayjs.utc(fecha).tz('America/Argentina/Buenos_Aires', true)
}

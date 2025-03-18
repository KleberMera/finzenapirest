import { format } from '@formkit/tempo';
import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class GraficService {
  constructor(private readonly prisma: PrismaService) {}

  async getWeeklySummary(userId: number) {
    // Obtener fechas de inicio y fin de la semana actual
    const now = new Date();
    
    // Obtener el día de la semana (0 = domingo, 6 = sábado)
    const currentDay = now.getDay();
    
    // Calcular el lunes de la semana actual
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(now);
    monday.setDate(now.getDate() + mondayOffset);
    
    // Calcular el domingo de la semana actual
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    
    // Formatear fechas usando @formkit/tempo correctamente
    const startDate = format(monday, "YYYY-MM-DD", );
    const endDate = format(sunday, "YYYY-MM-DD", );
    
    console.log('Rango de fechas:', startDate, 'hasta', endDate);
  
    // Ejecutar query raw para PostgreSQL
    const result = await this.prisma.$queryRaw`
      SELECT
        EXTRACT(ISODOW FROM t.date::DATE) as day_of_week,
        SUM(CASE WHEN c.type = 'Gasto' THEN t.amount ELSE 0 END) as gasto,
        SUM(CASE WHEN c.type = 'Ingreso' THEN t.amount ELSE 0 END) as ingreso
      FROM "Transaction" t
      INNER JOIN "Category" c ON t.category_id = c.id
      WHERE c.user_id = ${userId}
        AND t.date::DATE >= ${startDate}::DATE
        AND t.date::DATE <= ${endDate}::DATE
      GROUP BY EXTRACT(ISODOW FROM t.date::DATE)
      ORDER BY day_of_week
    `;
  
    // Mapear días de la semana
    const daysMap = {
      1: 'Lunes',
      2: 'Martes',
      3: 'Miércoles',
      4: 'Jueves',
      5: 'Viernes',
      6: 'Sábado',
      7: 'Domingo'
    };
  
    // Crear estructura base con todos los días
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const weeklySummary = Object.entries(daysMap).map(([dayNum, dayName]) => ({
      day: dayName,
      gasto: 0,
      ingreso: 0
    }));
  
    // Llenar con datos de la consulta
    (result as Array<{ day_of_week: number; gasto: string; ingreso: string }>).forEach(row => {
      const index = row.day_of_week - 1; // Ajustar al índice del array (0-6)
      if (index >= 0 && index < 7) { // Validar que el índice sea válido
        weeklySummary[index].gasto = Number(row.gasto) || 0;
        weeklySummary[index].ingreso = Number(row.ingreso) || 0;
      }
    });
  
    // Registrar los resultados para depuración
    console.log('Resultados semanales:', JSON.stringify(weeklySummary, null, 2));
  
    return {
      message: 'Datos Semanales Obtenidos',
      data: weeklySummary,
      status: 200
    };
  }

  
}

import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DniService {
  private readonly SRI_API_URL_DNI =
    'https://srienlinea.sri.gob.ec/movil-servicios/api/v1.0/deudas/porIdentificacion/';

  constructor(private readonly _http: HttpService) {}

  async getPersonData(cedula: string) {
    try {
      const timestamp = new Date().getTime();
      const response = await firstValueFrom(
        this._http.get(`${this.SRI_API_URL_DNI}${cedula}`, {
          params: {
            tipoPersona: 'N',
            _: timestamp,
          },
        }),
      );

      // Si hay nombreComercial, separamos nombres y apellidos
      const nameInfo = response.data.contribuyente.nombreComercial
        ? this.splitFullName(response.data.contribuyente.nombreComercial)
        : { nombres: '', apellidos: '' };

      return {
        ...response.data,
        nombres: nameInfo.nombres,
        apellidos: nameInfo.apellidos,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error en la consulta de datos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private splitFullName(nombreComercial: string): {
    nombres: string;
    apellidos: string;
  } {
    const parts = nombreComercial.split(' ');
    const nombres = parts.slice(-2).join(' ');
    const apellidos = parts.slice(0, -2).join(' ');

    return { nombres, apellidos };
  }
}

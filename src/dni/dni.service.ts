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

      return response.data;
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
}

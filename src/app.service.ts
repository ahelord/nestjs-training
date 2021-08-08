import { Injectable } from '@nestjs/common';

// son clases con logica de negocio
// varios controladores puede utilizar los mismos servicios
// el decorador injectable permite inyectar el servicio en varios lugares
// se puede inyectar en otros servicios o controladores
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! nestjs  ';
  }
  getTime(): Date {
    const now = new Date();
    return now;
  }
}

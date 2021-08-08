import { AppService } from '../app.service';
import { AppController } from '../app.controller';

/*La inyección de dependencia nos permite inyectar otras clases y añadir
funcionalidad transversal a medida. Este patrón de diseño es el que
abre la puerta a frameworks como Spring utilizando el concepto de inyección
de dependencia de una forma más avanzada.En estos framework los aspectos que
se añaden a nuestras clases son múltiples y la complejidad alta.

  public class Principal {

  public static void main(String[] args) {

  ServicioImpresion miServicio=
    new ServicioImpresion(new ServicioEnvioAspecto(),new ServicioPDF());

  miServicio.imprimir();

}

}*/

const appService = new AppService();
const appController = new AppController(appService);
const hello = appController.getHello();
console.log(hello);

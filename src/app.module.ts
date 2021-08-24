import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { ConfigKeys } from './config/config.keys';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule, CommonModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
// un modulo es como un bundle
// nuestra aplicacion puede estar compuesta de varios modulos
// nuestro módulo se puede anidar
// responsabilidad unica
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    // se hace asi por si despues tenemos que utilizar las keys en otros lugares
    // no tener que ir uno a uno
    AppModule.port = this._configService.getConfig(ConfigKeys.PORT);
  }
}

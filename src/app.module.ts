import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { SharedModule } from './shared/shared.module';
import { ConfigKeys } from './config/config.keys';
import { UserModule } from './user/user.module';
import { BooksModule } from './books/books.module';
import { PingModule } from './ping/ping.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    LocationModule,
    ConfigModule,
    DatabaseModule,
    SharedModule,
    UserModule,
    BooksModule,
    RoleModule,
    PingModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
// un modulo es como un bundle
// nuestra aplicacion puede estar compuesta de varios modulos
// nuestro módulo se puede anidar
// responsabilidad unica
export class AppModule {
  static port: number | string;

  constructor(private readonly configService: ConfigService) {
    // se hace asi por si despues tenemos que utilizar las keys en otros lugares
    // no tener que ir uno a uno
    AppModule.port = this.configService.getConfig(ConfigKeys.PORT);
  }
}

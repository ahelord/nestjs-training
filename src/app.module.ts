import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
// un modulo es como un bundle
// nuestra aplicacion puede estar compuesta de varios modulos
// nuestro módulo se puede anidar
// responsabilidad unica
export class AppModule {}

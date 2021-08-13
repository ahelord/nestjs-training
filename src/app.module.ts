import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';

@Module({
  imports: [LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
// un modulo es como un bundle
// nuestra aplicacion puede estar compuesta de varios modulos
// nuestro módulo se puede anidar
// responsabilidad unica
export class AppModule {}
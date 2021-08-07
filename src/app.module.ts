import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// un modulo es como un bundle
// nuestra aplicacion puede estar compuesta de varios modulos
// nuestro módulo se puede anidar
// responsabilidad unica
export class AppModule {}

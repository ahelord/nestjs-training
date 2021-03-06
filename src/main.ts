import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

// punto de entrada de nest.js aplicacion
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.setLocal('nestjs', 'traning');
  await app.listen(AppModule.port);
  console.log('listing on ' + (await app.getUrl()));
}
bootstrap();

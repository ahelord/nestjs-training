import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { PostgresTypeOrmConfig } from './postgres-typeorm.config';
import { databaseProviders } from './database.service';

@Module({
  //  Complete Developer Node.js Dawid Udemy
  /*  imports: [
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useClass: PostgresTypeOrmConfig,
      }),
    ],*/
  imports: [...databaseProviders],
  exports: [...databaseProviders],
})

// need add Dynamic dependency into next dependency injection
export class DatabaseModule {}

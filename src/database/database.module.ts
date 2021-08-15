import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { PostgresTypeOrmConfig } from './postgres-typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresTypeOrmConfig,
    }),
  ],
})

// need add Dynamic dependency into next dependency injection
export class DatabaseModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConnectionOptions } from 'typeorm';
import PostgresConfig from '../config/postgres.config';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async function () {
      return PostgresConfig as ConnectionOptions;
    },
  }),
];

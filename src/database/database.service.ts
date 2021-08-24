import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { ConfigKeys } from '../config/config.keys';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres',
        host: config.getConfig(ConfigKeys.POSTGRES_HOST),
        username: config.getConfig(ConfigKeys.POSTGRES_USERNAME),
        port: 5432,
        database: config.getConfig(ConfigKeys.POSTGRES_DATABASE),
        password: config.getConfig(ConfigKeys.POSTGRES_PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        logging: true,
        synchronize: config.getConfig(ConfigKeys.TYPEORM_SYNC) === 'true',
      } as ConnectionOptions;
    },
  }),
];

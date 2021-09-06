import { ConfigKeys } from './config.keys';
import { ConfigService } from './config.service';
const configService = new ConfigService();

export const DatabaseConfig = {
  autoLoadEntities: true,
  type: 'postgres',
  host: configService.getConfig(ConfigKeys.POSTGRES_HOST),
  username: configService.getConfig(ConfigKeys.POSTGRES_USERNAME),
  port: 5432,
  database: configService.getConfig(ConfigKeys.POSTGRES_DATABASE),
  password: configService.getConfig(ConfigKeys.POSTGRES_PASSWORD),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
  logging: true,
  synchronize: configService.getConfig(ConfigKeys.TYPEORM_SYNC) === 'true',
  migrationsTableName: 'typeorm_migrations',
  cli: {
    migrationsDir: 'src/database/migrations',
  },

};

export default DatabaseConfig;

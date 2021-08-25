import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { SharedModule } from '../shared/shared.module';
import { LocationMappingService } from './location-mapping.service';

@Module({
  controllers: [LocationController],
  providers: [LocationService, LocationMappingService],
  imports: [TypeOrmModule.forFeature([Location]), SharedModule],
})
export class LocationModule {}

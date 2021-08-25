import { MappingService } from '../shared/mapping.service';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class LocationMappingService extends MappingService {
  addMapping(): void {
    automapper.createMap(Location.name, LocationDto.name);
  }
}

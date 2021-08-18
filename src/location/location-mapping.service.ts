import { MappingService } from '../common/mapping.service';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';

export class LocationMappingService extends MappingService {
  addMapping(): void {
    automapper.createMap(Location.name, LocationDto.name);
  }
}

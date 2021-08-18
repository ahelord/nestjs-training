import { MappingService } from '../common/mapping.service';
import { LocationDto } from './location.dto';

export class LocationMappingService extends MappingService {
  addMapping(): void {
    automapper.createMap(Location.name, LocationDto.name);
  }
}

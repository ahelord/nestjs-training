import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';
import { LocationListDto } from './location-list.dto';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { LocationDto } from './location.dto';

@Controller('locations')
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
    private readonly mappingRegistryService: MappingRegistryService,
  ) {}

  @Get('')
  public async getLocations(): Promise<LocationListDto> {
    const locations = await this.locationService.listLocations();
    const dtos = locations.map((location) =>
      this.mappingRegistryService.map<LocationDto>(
        Location.name,
        LocationDto.name,
        location,
      ),
    );
    return { locations: dtos };
  }

  @Get('colombia')
  getLocation(): string {
    return 'Bogota';
  }
}

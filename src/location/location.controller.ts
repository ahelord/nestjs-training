import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('')
  getLocations(): Promise<Location[]> {
    const locations = this.locationService.listLocations();
    return locations;
  }

  @Get('colombia')
  getLocation(): string {
    return 'Bogota';
  }
}

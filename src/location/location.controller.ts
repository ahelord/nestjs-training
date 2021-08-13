import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('')
  getLocations(): string[] {
    const locations = this.locationService.listLocations();
    return locations;
  }

  @Get('colombia')
  getLocation(): string {
    return 'Bogota';
  }
}

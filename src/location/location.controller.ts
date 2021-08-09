import { Controller, Get } from '@nestjs/common';

@Controller('location')
export class LocationController {
  @Get()
  getLocation(): string {
    return 'Bogota';
  }
}

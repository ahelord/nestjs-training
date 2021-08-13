import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  public listLocations(): string[] {
    return ['chile', 'colombia', 'peru'];
  }
}

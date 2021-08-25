import { Injectable } from '@nestjs/common';
import { MappingRegistryService } from './mapping-registry.service';

@Injectable()
export abstract class MappingService {
  // we are going to self register mappings in the register
  //we need inject register into all mappings services
  constructor(mappingRegistryService: MappingRegistryService) {
    mappingRegistryService.registerMappingService(this);
  }
  public abstract addMapping(): void;
}

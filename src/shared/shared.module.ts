import { Module } from '@nestjs/common';
import { MappingRegistryService } from './mapping-registry.service';
import { MapperService } from './mapper.service';

@Module({
  providers: [MappingRegistryService, MapperService],
  exports: [MappingRegistryService, MapperService],
})
export class SharedModule {}

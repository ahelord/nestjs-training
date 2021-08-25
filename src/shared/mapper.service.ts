import { Injectable } from '@nestjs/common';
import { TypeMapper } from 'ts-mapper';
import { User } from '../user/user.entity';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class MapperService extends TypeMapper {
  constructor() {
    super();
    this.config();
  }
  private config(): void {
    this.createMap<User, UserDto>()
      .map(
        (entity) => entity.id,
        (dto) => dto.id,
      )
      .map(
        (entity) => entity.username,
        (dto) => dto.username,
      )
      .map(
        (entity) => entity.favoriteBooks,
        (dto) => dto.favoriteBooks,
      )
      .map(
        (entity) => entity.favoriteBooks,
        (dto) => dto.favoriteBooks,
      )
      .map(
        (entity) => entity.roles,
        (dto) => dto.roles,
      );
  }
}

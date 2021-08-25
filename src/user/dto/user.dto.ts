import { isNotEmpty, IsNotEmpty } from 'class-validator';
import { Roles } from '../../role/role.entity';
import { RoleType } from '../../role/role-type.enum';
import { FavoriteBooks } from '../../books/favorite-books.entity';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  roles: RoleType[];

  @IsNotEmpty()
  favoriteBooks: FavoriteBooks[];
}

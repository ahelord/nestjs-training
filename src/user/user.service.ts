import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { MapperService } from '../shared/mapper.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { getConnection } from 'typeorm';
import { Role } from '../role/entities/role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly mapperService: MapperService,
  ) {}

  async get(id: number): Promise<UserDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const user: User = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return this.mapperService.map<User, UserDto>(user, new UserDto());
  }

  async getAll(): Promise<User[]> {
    const users: User[] = await this.userRepository.find();
    return users;
    // este mapper no sirve bien
    /*return this.mapperService.mapCollection<User, UserDto>(
      users,
      new UserDto(),
    );*/
  }

  async create(user: User) {
    const roleRepository = await getConnection().getRepository(Role);
    const roleGeneral = await roleRepository.findOne({
      where: { name: 'GENERAL' },
    });
    user.roles = [roleGeneral];
    const userCreated: User = await this.userRepository.save(user);
    return this.mapperService.map<User, UserDto>(userCreated, new UserDto());
  }

  // deberia ser un dto update el user
  async update(id: number, user: User): Promise<void> {
    await this.userRepository.update(id, user);
  }
  async delete(id: number): Promise<void> {
    const userExist = await this.userRepository.findOne(id);
    if (!userExist) {
      throw new NotFoundException();
    } else {
      await this.userRepository.delete({ id });
    }
  }
}

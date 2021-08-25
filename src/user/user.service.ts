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
    const user: User = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return this.mapperService.map<User, UserDto>(user, new UserDto());
  }

  async getAll(id: number): Promise<UserDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const user: User[] = await this.userRepository.find();
    if (!user) {
      throw new NotFoundException();
    }
    return this.mapperService.mapCollection<User, UserDto>(user, new UserDto());
  }

  async create(user: User) {
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

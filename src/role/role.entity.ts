import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
@Entity('roles')
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @ManyToMany((type) => User, (users) => users.roles)
  users: User[];
}

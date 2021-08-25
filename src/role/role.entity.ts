import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../user/users.entity';
@Entity('roles')
export class Roles extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @ManyToMany((type) => Users, (users) => users.roles)
  users: Users[];
}

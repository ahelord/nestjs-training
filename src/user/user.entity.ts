import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';
import { UserStatus } from './user-status.entity';
import { JoinColumn } from 'typeorm';
import { FavoriteBooks } from '../books/favorite-books.entity';
import { Role } from '../role/entities/role.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToOne(() => UserStatus, {
    onDelete: 'NO ACTION',
  })
  @JoinColumn()
  userStatus: UserStatus;

  @OneToMany(() => FavoriteBooks, (favoriteBooks) => favoriteBooks.user, {
    // cada que guardo en la instancia esta relacion cuando guarde usuarios se guarda automaticamente
    cascade: true,
    onDelete: 'NO ACTION',
    nullable: true,
    //eger cada vez que hagamos un select de nuestro user automatimente traiga el detalle
    eager: false,
  })
  favoriteBooks: FavoriteBooks[];

  @ManyToMany((type) => Role, (roles) => roles.users, { eager: true })
  @JoinTable({ name: 'users_roles' })
  roles: Role[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

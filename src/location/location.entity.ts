import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  private id: string;
  @Column({ type: 'varchar', comment: 'name of location' })
  private name: string;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//user table
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

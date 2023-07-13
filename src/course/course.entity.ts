import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rating } from '../rating/rating.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Rating, (rating) => rating.course)
  ratings: Rating[];
}

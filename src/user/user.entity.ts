import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rating } from '../rating/rating.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    // ограничение на длину имени
    length: 10,
  })
  name: string;

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings: Rating[];
}

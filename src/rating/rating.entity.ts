import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsInt, Min, Max } from 'class-validator';
import { User } from '../user/user.entity';
import { Course } from '../course/course.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsInt()
  @Min(0)
  @Max(10)
  points: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Course, (course) => course.id)
  course: Course;
}

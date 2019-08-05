import { Length, ValidateNested } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { TodoItem } from './todo-item';

@Entity({ name: 'todo_lists' })
export class TodoList {

  @PrimaryGeneratedColumn()
  public id!: number;

  @OneToMany((_type) => TodoItem, (todoItem) => todoItem.todoList, {
    cascade: true
  })
  @JoinColumn({ name: 'todo_list_id' })
  @ValidateNested()
  public todoItems!: TodoItem[];

  @Column({ nullable: false })
  @Length(1, 255)
  public name!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: false })
  public createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: false })
  public updatedAt!: Date;
}

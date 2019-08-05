import { Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { TodoList } from './todo-list';

@Entity({ name: 'todo_items' })
export class TodoItem {

  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne((_type) => TodoList, (todoList) => todoList.todoItems)
  @JoinColumn({ name: 'todo_list_id' })
  public todoList!: TodoList;

  @Column({ nullable: false })
  @Length(1, 255)
  public name!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: false })
  public createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: false })
  public updatedAt!: Date;
}

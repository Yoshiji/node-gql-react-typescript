import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateTodoItem1565017310762 implements MigrationInterface {

  public async up(queryRunner: QueryRunner) {
    await queryRunner.query(`
      CREATE TABLE todo_items (
        id SERIAL PRIMARY KEY,
        todo_list_id integer NOT NULL REFERENCES todo_lists,
        name varchar NOT NULL,
        created_at timestamp NOT NULL DEFAULT NOW(),
        updated_at timestamp NOT NULL DEFAULT NOW()
      );
    `);
  }

  public async down(queryRunner: QueryRunner) {
    await queryRunner.query(`
      DROP TABLE todo_items;
    `);
  }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodoLists1565016221423 implements MigrationInterface {

  public async up(queryRunner: QueryRunner) {
    await queryRunner.query(`
      CREATE TABLE todo_lists (
        id SERIAL PRIMARY KEY,
        name varchar NOT NULL,
        created_at timestamp NOT NULL DEFAULT NOW(),
        updated_at timestamp NOT NULL DEFAULT NOW()
      );
    `);
  }

  public async down(queryRunner: QueryRunner) {
    await queryRunner.query(`
      DROP TABLE todo_lists;
    `);
  }

}

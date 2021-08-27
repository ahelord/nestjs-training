import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertUserStatus1629849013381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO public.roles (name) VALUES('ADMIN');`);
    await queryRunner.query(
      `INSERT INTO public.roles (name) VALUES('AUTHOR');`,
    );
    await queryRunner.query(
      `INSERT INTO public.roles (name) VALUES('GENERAL');`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}

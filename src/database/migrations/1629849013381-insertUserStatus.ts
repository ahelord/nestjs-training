import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertUserStatus1629849013381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.users_status (name) VALUES('active');`,
    );
    await queryRunner.query(
      `INSERT INTO public.users_status (name) VALUES('inactive');`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}

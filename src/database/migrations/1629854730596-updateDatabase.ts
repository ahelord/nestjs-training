import {MigrationInterface, QueryRunner} from "typeorm";

export class updateDatabase1629854730596 implements MigrationInterface {
    name = 'updateDatabase1629854730596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorite_books" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_9ce5396a2b791984a4a5fd7d6da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "PK_37623035dbbec2f0a4b76ff4000" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_deeb1fe94ce2d111a6695a2880" ON "users_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_21db462422f1f97519a29041da" ON "users_roles" ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "favorite_books" ADD CONSTRAINT "FK_a7447237ded0bbb85db7edf014a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles" ADD CONSTRAINT "FK_deeb1fe94ce2d111a6695a2880e" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_roles" ADD CONSTRAINT "FK_21db462422f1f97519a29041da0" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_roles" DROP CONSTRAINT "FK_21db462422f1f97519a29041da0"`);
        await queryRunner.query(`ALTER TABLE "users_roles" DROP CONSTRAINT "FK_deeb1fe94ce2d111a6695a2880e"`);
        await queryRunner.query(`ALTER TABLE "favorite_books" DROP CONSTRAINT "FK_a7447237ded0bbb85db7edf014a"`);
        await queryRunner.query(`DROP INDEX "IDX_21db462422f1f97519a29041da"`);
        await queryRunner.query(`DROP INDEX "IDX_deeb1fe94ce2d111a6695a2880"`);
        await queryRunner.query(`DROP TABLE "users_roles"`);
        await queryRunner.query(`DROP TABLE "favorite_books"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class updateDatabase1627363471859 implements MigrationInterface {
    name = 'updateDatabase1627363471859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_status" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9d295cb2f8df33c080e23acfb8f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(25) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userStatusId" integer, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "REL_65d6e2212d2d112bbddf56326d" UNIQUE ("userStatusId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorite_books" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_9ce5396a2b791984a4a5fd7d6da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id")); COMMENT ON COLUMN "location"."name" IS 'name of location'`);
        await queryRunner.query(`CREATE TABLE "users_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "PK_37623035dbbec2f0a4b76ff4000" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_deeb1fe94ce2d111a6695a2880" ON "users_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_21db462422f1f97519a29041da" ON "users_roles" ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_65d6e2212d2d112bbddf56326df" FOREIGN KEY ("userStatusId") REFERENCES "users_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite_books" ADD CONSTRAINT "FK_a7447237ded0bbb85db7edf014a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles" ADD CONSTRAINT "FK_deeb1fe94ce2d111a6695a2880e" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_roles" ADD CONSTRAINT "FK_21db462422f1f97519a29041da0" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_roles" DROP CONSTRAINT "FK_21db462422f1f97519a29041da0"`);
        await queryRunner.query(`ALTER TABLE "users_roles" DROP CONSTRAINT "FK_deeb1fe94ce2d111a6695a2880e"`);
        await queryRunner.query(`ALTER TABLE "favorite_books" DROP CONSTRAINT "FK_a7447237ded0bbb85db7edf014a"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_65d6e2212d2d112bbddf56326df"`);
        await queryRunner.query(`DROP INDEX "IDX_21db462422f1f97519a29041da"`);
        await queryRunner.query(`DROP INDEX "IDX_deeb1fe94ce2d111a6695a2880"`);
        await queryRunner.query(`DROP TABLE "users_roles"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "favorite_books"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "users_status"`);
    }

}

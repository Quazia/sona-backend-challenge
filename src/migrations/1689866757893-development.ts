import {MigrationInterface, QueryRunner} from "typeorm";

export class development1689866757893 implements MigrationInterface {
    name = 'development1689866757893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "slug" ("id" character varying(6) NOT NULL DEFAULT 'C9HAJh', "url" character varying NOT NULL, "visitCount" integer NOT NULL, CONSTRAINT "PK_f972f08642fd0b16191e5a4fdb0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_roles_enum" AS ENUM('standard', 'premium')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "roles" "public"."user_roles_enum" NOT NULL DEFAULT 'standard', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "slug" ALTER COLUMN "id" SET DEFAULT 'U4uD63'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "slug" ALTER COLUMN "id" SET DEFAULT 'C9HAJh'`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_roles_enum"`);
        await queryRunner.query(`DROP TABLE "slug"`);
    }

}

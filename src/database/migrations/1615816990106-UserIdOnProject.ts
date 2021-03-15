import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export default class UserIdOnProject1615816990106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('projects', new TableForeignKey({
            name: 'ProjectUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('projects', 'ProjectUser');
        await queryRunner.dropColumn('projects', 'user_id');
    }

}

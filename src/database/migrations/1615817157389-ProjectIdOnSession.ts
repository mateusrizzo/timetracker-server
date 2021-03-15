import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export default class ProjectIdOnSession1615817157389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('sessions', new TableForeignKey({
            name: 'SessionProject',
            columnNames: ['project_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'projects',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('sessions', 'SessionProject');
        await queryRunner.dropColumn('sessions', 'project_id');
    }

}

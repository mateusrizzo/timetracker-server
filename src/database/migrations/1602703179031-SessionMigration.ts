import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class SessionMigration1602703179031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sessions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'project_id',
                        type: 'uuid'
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone',
                        default: 'now()'
                    }, 
                    {
                        name: 'time',
                        type: 'float'
                    }
                ]
            })
        );
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
        await queryRunner.dropTable('sessions');
    }

}

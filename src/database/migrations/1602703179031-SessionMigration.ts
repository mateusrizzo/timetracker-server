import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class SessionMigration1602703179031 implements MigrationInterface {

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
                        name: 'seconds',
                        type: 'integer'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sessions');
    }

}

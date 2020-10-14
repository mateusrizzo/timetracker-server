import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Timestamp} from 'typeorm';
import Project from './Project';


@Entity('sessions')
export default class Session{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    project_id: string

    @ManyToOne(() => Project)
    @JoinColumn({name: 'project_id'})
    project: Project

    @Column()
    date: Date

    @Column()
    time: Date
}
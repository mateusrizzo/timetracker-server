import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from 'typeorm';

import User from './User';

@Entity('projects')
export default class Project{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    user_id: string

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
}
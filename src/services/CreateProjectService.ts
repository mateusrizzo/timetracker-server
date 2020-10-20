import {getRepository} from 'typeorm';
import AppError from '../errors/AppError';

import Project from '../models/Project';
import User from '../models/User';


interface Request {
    name: string;
    user_id: string;
}

export default class CreateProjectService {
    public async execute({name, user_id}: Request): Promise<Project> {
        const projectsRepository = getRepository(Project);

        const project = projectsRepository.create({
            name,
            user_id,
        });

        await projectsRepository.save(project);

        return project;
    }
}
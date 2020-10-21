import {getRepository, getCustomRepository} from 'typeorm';
import AppError from '../errors/AppError';

import Project from '../models/Project';
import ProjectsRepository from '../repositories/ProjectsRepository';


interface Request {
    name: string;
    user_id: string;
}

export default class CreateProjectService {
    public async execute({name, user_id}: Request): Promise<Project> {
        const projectsRepository = getCustomRepository(ProjectsRepository);

        const project = projectsRepository.create({
            name,
            user_id,
        });

        await projectsRepository.save(project);

        return project;
    }
}
import {getCustomRepository} from 'typeorm';

import Project from '../models/Project';
import ProjectsRepository from '../repositories/ProjectsRepository';

import AppError from '../errors/AppError';

interface Request {
    name: string;
    id: string;
}

export default class UpdateProjectService {
    public async execute ({name, id}: Request): Promise<Project> {
        const projectsRepository = getCustomRepository(ProjectsRepository);

        const project = projectsRepository.findOne(id);

        if(!project) {
            throw new AppError("Project not found", 404);
        }

        const newProjectInfo = {
            name: name,
        }

        await projectsRepository.update(id, newProjectInfo);

        const updatedProject = await projectsRepository.findOne(id);

        return updatedProject;
    }
}
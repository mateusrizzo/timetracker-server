import {getRepository} from 'typeorm';

import Project from '../models/Project';

export default class CreateProjectService {
    public async execute({name}): Promise<Project> {
        const projectsRepository = getRepository(Project);

        const project = await projectsRepository.create({
            name
        });

        await projectsRepository.save(project);

        return project;
    }
}
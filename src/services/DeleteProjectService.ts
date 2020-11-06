import {getCustomRepository} from 'typeorm';

import AppError from '../errors/AppError';

import ProjectRepository from '../repositories/ProjectsRepository';

export default class DeleteProjectService {
    public async execute ({project_id}): Promise<void> {
        const projectRepository = getCustomRepository(ProjectRepository);

        const projectForDeletion = await projectRepository.findOne(project_id);

        if(!projectForDeletion) {
            throw new AppError('Project not found!', 404);
        }

        await projectRepository.remove(projectForDeletion);

        return;
    }
}
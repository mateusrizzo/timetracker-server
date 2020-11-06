import {getCustomRepository} from 'typeorm';

import AppError from '../errors/AppError';

import ProjectRepository from '../repositories/ProjectsRepository';

export default class DeleteProjectService {
    public async execute ({project_id}): Promise<void> {
        const projectRepositoy = getCustomRepository(ProjectRepository);

        const projectForDeletion = await projectRepositoy.findOne(project_id);

        if(!projectForDeletion) {
            throw new AppError('Project not found!', 404);
        }

        await projectRepositoy.remove(projectForDeletion);

        return;
    }
}
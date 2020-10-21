import {Router} from 'express';
import {getCustomRepository} from 'typeorm';

import testAuthentication from '../middleware/testAuthentication';
import ProjectsRepository from '../repositories/ProjectsRepository';

import CreateProjectService from '../services/CreateProjectService';

const projectsRoutes = Router();

projectsRoutes.get('/', testAuthentication, async (request, response) => {
    const user_id = request.user.id;

    const projectsRepository = getCustomRepository(ProjectsRepository);
    const projects = await projectsRepository.findByUser(user_id);

    return response.json(projects);

});

projectsRoutes.post('/', testAuthentication, async (request, response) => {
    const {name} = request.body;
    const user_id = request.user.id;

    const createProject = new CreateProjectService();

    const project = await createProject.execute({
        name,
        user_id
    });

    return response.json(project);

})

export default projectsRoutes;
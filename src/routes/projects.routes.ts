import {Router} from 'express';
import {getCustomRepository, getRepository} from 'typeorm';

import testAuthentication from '../middleware/testAuthentication';
import Project from '../models/Project';

import CreateProjectService from '../services/CreateProjectService';

const projectsRoutes = Router();

projectsRoutes.get('/', testAuthentication, async (request, response) => {
    const projectsRepository = getRepository(Project);
    const projects = await projectsRepository.find({
        where: {user_id: request.user.id}
    });

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
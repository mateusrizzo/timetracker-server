import {Router} from 'express';
import {getCustomRepository} from 'typeorm';

import testAuthentication from '../middleware/testAuthentication';
import ProjectsRepository from '../repositories/ProjectsRepository';

import CreateProjectService from '../services/CreateProjectService';
import UpdateProjectService from '../services/UpdateProjectService';

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

});

projectsRoutes.patch('/:id', testAuthentication, async (request, response) => {
    const {name} = request.body;
    const {id} = request.params; 

    const updateProject = new UpdateProjectService();

    const project = await updateProject.execute({
        name,
        id
    });

    return response.json(project);
    
})

export default projectsRoutes;
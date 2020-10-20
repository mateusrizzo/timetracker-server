import {Router} from 'express';

import testAuthentication from '../middleware/testAuthentication';

import CreateProjectService from '../services/CreateProjectService';

const projectsRoutes = Router();

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
import {Router} from 'express';

import testAuthentication from '../middleware/testAuthentication';

import CreateProjectService from '../services/CreateProjectService';

const projectsRoutes = Router();

projectsRoutes.post('/', testAuthentication, async (request, response) => {

    const {name} = request.body;

    const createProjectService = new CreateProjectService();

    const project = createProjectService.execute(name);

    return response.json(project);

})

export default projectsRoutes;
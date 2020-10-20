import {Router} from 'express';

import testAuthentication from '../middleware/testAuthentication';

const projectsRoutes = Router();

projectsRoutes.post('/', testAuthentication, async (request, response) => {
    
    const {name} = request.body;

})
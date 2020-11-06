import {Router} from 'express';

import testAuthentication from '../middleware/testAuthentication';

const sessionsRouter = Router();

sessionsRouter.post('/:id', testAuthentication, async(request, response) => {
    const {minutes, seconds} = request.body;
    const {project_id} = request.params;
});

export default sessionsRouter;

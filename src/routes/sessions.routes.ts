import {Router} from 'express';

import testAuthentication from '../middleware/testAuthentication';
import SessionsRepository from '../repositories/SessionsRepository';

import CreateSessionService from '../services/CreateSessionService';

const sessionsRouter = Router();

sessionsRouter.post('/:id', testAuthentication, async(request, response) => {
    const {minutes, seconds} = request.body;
    const {id} = request.params;

    const createSession = new CreateSessionService();

    const session = await createSession.execute({
        minutes,
        seconds,
        project_id: id
    });

    return response.json(session);
});

export default sessionsRouter;

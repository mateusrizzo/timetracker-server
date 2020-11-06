import {Router} from 'express';
import { getCustomRepository } from 'typeorm';

import testAuthentication from '../middleware/testAuthentication';
import SessionsRepository from '../repositories/SessionsRepository';

import CreateSessionService from '../services/CreateSessionService';
import DeleteSessionService from '../services/DeleteSessionService';

const sessionsRouter = Router();

sessionsRouter.get('/:id', testAuthentication, async(request, response) => {
    const {id} = request.params;

    const sessionsRepository = getCustomRepository(SessionsRepository);
    const sessions = await sessionsRepository.findByProject(id);

    return response.json(sessions);
});

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

sessionsRouter.delete('/:id', testAuthentication, async(request, response) => {
    const {id} = request.params;

    const deleteSession = new DeleteSessionService();

    await deleteSession.execute(id);

    response.status(204).send();
})

export default sessionsRouter;

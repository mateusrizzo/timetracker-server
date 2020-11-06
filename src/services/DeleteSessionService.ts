import {getCustomRepository} from 'typeorm';

import SessionsRepository from '../repositories/SessionsRepository';

import AppError from '../errors/AppError';

export default class DeleteSessionService {
    public async execute (session_id: string) {
        const sessionsRepository = getCustomRepository(SessionsRepository);

        const sessionForDeletion = await sessionsRepository.findOne(session_id);

        if(!sessionForDeletion){
            throw new AppError('Session not found!', 404);
        }

        await sessionsRepository.remove(sessionForDeletion);

        return;
    }
}
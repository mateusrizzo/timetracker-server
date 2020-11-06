import {getRepository} from 'typeorm';

import Session from '../models/Session';

import AppError from '../errors/AppError';

export default class CreateSessionService {
    public async execute ({minutes, seconds, project_id}) {
        const sessionsRepository = getRepository(Session);

        const session = sessionsRepository.create({
            minutes,
            seconds,
            project_id
        });

        await sessionsRepository.save(session);

        return session;

    }

}
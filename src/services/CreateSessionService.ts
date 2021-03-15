import {getRepository} from 'typeorm';

import Session from '../models/Session';

export default class CreateSessionService {
    public async execute ({seconds, project_id}) {
        const sessionsRepository = getRepository(Session);

        const session = sessionsRepository.create({
            seconds,
            project_id
        });

        await sessionsRepository.save(session);

        return session;

    }

}
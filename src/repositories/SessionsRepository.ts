import {EntityRepository, Repository} from 'typeorm';

import Session from '../models/Session';

@EntityRepository(Session)
class SessionsRepository extends Repository<Session> {
    public async findByProject(project_id): Promise<Session[]> {
        const foundSessions = await this.find({
            where: {project_id}
        });

        return foundSessions;
    }
}

export default SessionsRepository;
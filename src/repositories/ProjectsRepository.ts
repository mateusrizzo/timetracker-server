import {EntityRepository, Repository} from 'typeorm';

import Project from '../models/Project';

@EntityRepository(Project)
class ProjectsRepository extends Repository<Project>{
    public async findByUser(user_id: String): Promise<Project[]> {
        const foundProjects = await this.find({
            where: user_id
        });
        
        return foundProjects;   
    }
}

export default ProjectsRepository;
import {getRepository} from 'typeorm';

import Project from '../models/Project';

export default class CreateProjectService {
    public async execute({name}): Promise<Project> {

    }
}
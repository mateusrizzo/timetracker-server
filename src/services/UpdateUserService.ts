import {getRepository, UpdateResult} from 'typeorm';

import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
    user_id: string;
    name: string;
    email: string;
    password: string
}

export default class UpdateUserService {
    public async execute({user_id, name, email, password}: Request): Promise<UpdateResult> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(user_id);

        if(!user) {
            throw new AppError('User are not authenticated', 401);
        }

        const updatedUser = await usersRepository.update(user, {
            name,
            email,
            password
        });
        

        return updatedUser;
        

    }
}
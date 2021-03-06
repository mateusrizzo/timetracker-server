import {getRepository} from 'typeorm';

import User from '../models/User';

import AppError from '../errors/AppError';
import { hash } from 'bcryptjs';

interface Request {
    user_id: string;
    name: string;
    email: string;
    password: string;
}


export default class UpdateUserService {
    public async execute({user_id, name, email, password}: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(user_id);

        if(!user) {
            throw new AppError('User are not authenticated', 401);
        }

        if(!email) {
            email = user.email;
        }
        if(!name) {
            name = user.name;
        }
        if(!password) {
            password = user.password;
        } else {
            password = await hash(password, 10);
        }

        const updatedInfo = {
            name: name,
            email: email,
            password: password,
        }

        await usersRepository.update(user_id, updatedInfo);

        const updatedUser = await usersRepository.findOne(user_id);

        return updatedUser;
    }
}
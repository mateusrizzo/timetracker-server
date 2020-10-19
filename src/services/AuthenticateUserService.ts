import {getRepository} from 'typeorm';


import User from '../models/User';
import authConfig from '../config/auth';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

export default class AuthenticateUserService {
    public async execute ({email, password}: Request): Promise<void> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: {email}
        });

    }
}


import {getRepository} from 'typeorm';
import {hash} from 'bcryptjs';

import User from '../models/User';

interface Request {
    name: string;
    email: string;
    password: string;
}


export default class CreateUserService {
   public async execute ({name, email, password}: Request): Promise<User> {
        const userRepository = getRepository(User);

        const checkIfUserExists = await userRepository.findOne({
            where: {email}
        });

        if (checkIfUserExists) {
            throw new Error('User already exists');
        }

        const cryptoPassword = await hash(password, 10);

        const user = userRepository.create({
            name,
            email,
            password: cryptoPassword
        });

        await userRepository.save(user);

        return user;
    }
}
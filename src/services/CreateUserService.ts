import {getRepository} from 'typeorm';
import {hash} from 'bcryptjs';

import User from '../models/User';


export default class CreateUserService {
   public async execute ({name, email, password}) {
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
import {getRepository} from 'typeorm';

import AppError from '../errors/AppError';

import User from '../models/User';

export default class DeleteUserService {
    public async execute ({user_id}): Promise<void> {
        const userRepository = getRepository(User);

        const userForDeletion = await userRepository.findOne(user_id);

        if(!userForDeletion){
            throw new AppError('User not found!', 404);
        }

        await userRepository.remove(userForDeletion);

        return;

    }
}
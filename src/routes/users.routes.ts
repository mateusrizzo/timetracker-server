import {Router} from 'express';

import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';
import testAuthentication from '../middleware/testAuthentication';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    const {name, email, password} = request.body;

    const createUser = new CreateUserService();

    const user =  await createUser.execute({name, email, password});

    delete user.password;

    return response.json(user);
});

usersRouter.patch('/', testAuthentication, async (request, response) => {
    const {name, email, password} = request.body;

    const updateUserInfo = new UpdateUserService();
    const user = await updateUserInfo.execute({
        user_id: request.user.id,
        name,
        email,
        password
    });

    delete user.password;

    return response.json(user);
});

usersRouter.delete('/', testAuthentication, async (request, response) => {
    
    const deleteUserInfo = new DeleteUserService();

    await deleteUserInfo.execute({user_id: request.user.id});

    return response.status(204).send();
})



export default usersRouter;
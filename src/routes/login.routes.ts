import {Router} from 'express';

const loginRouter = Router();

loginRouter.post('/', async (request, response) => {
    const {email, password} = request.body;
})


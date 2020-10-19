import {Router} from 'express';

import usersRouter from './users.routes';
import loginRouter from './login.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', loginRouter);

export default routes;
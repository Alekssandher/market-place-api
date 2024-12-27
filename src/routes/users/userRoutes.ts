import { Router } from 'express'
import createController from 'modules/users/useCases/create/createController';

const userRoutes = Router();


userRoutes.post("/",  createController.handle);

export default userRoutes;
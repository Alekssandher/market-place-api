import { Router } from 'express'
import authMiddleware from 'middlewares/authMiddleware';
import paginationMiddleware from 'middlewares/paginationMiddleware';
import createController from 'modules/users/useCases/create/createController';
import findAllController from 'modules/users/useCases/findAll/findAllController';
import findByIdController from 'modules/users/useCases/findById/findByIdController';

const userRoutes = Router();


userRoutes.post("/",  createController.handle);

userRoutes.use(authMiddleware.execute);
userRoutes.get("/",  paginationMiddleware.execute ,findAllController.handle);
userRoutes.get("/findById/:id",  findByIdController.handle);

export default userRoutes;
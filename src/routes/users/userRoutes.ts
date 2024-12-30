import { Router } from 'express'
import authMiddleware from 'middlewares/authMiddleware';
import paginationMiddleware from 'middlewares/paginationMiddleware';
import addAddressController from 'modules/users/useCases/addAddress/addAddressController';
import createController from 'modules/users/useCases/create/createController';
import deleteController from 'modules/users/useCases/delete/deleteController';
import findAllController from 'modules/users/useCases/findAll/findAllController';
import findByIdController from 'modules/users/useCases/findById/findByIdController';
import updateController from 'modules/users/useCases/update/updateController';

const userRoutes = Router();


userRoutes.post("/create",  createController.handle);

userRoutes.use(authMiddleware.execute);
userRoutes.get("/findAll",  paginationMiddleware.execute ,findAllController.handle);
userRoutes.get("/findById/:id",  findByIdController.handle);
userRoutes.patch("/update", updateController.handle);
userRoutes.delete("/delete", deleteController.handle);
userRoutes.post("/add-address", addAddressController.handle);
export default userRoutes;
import { Router } from 'express'
import userRouts from './users/userRoutes';

const router = Router();

router.use("/users", userRouts);

export default router;
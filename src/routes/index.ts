import { Router } from 'express'
import userRouts from './users/userRoutes';
import authRouter from './auth/authRoutes';

const router = Router();

router.use("/users", userRouts);
router.use("/auth", authRouter);
export default router;
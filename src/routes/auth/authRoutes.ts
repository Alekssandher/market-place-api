import signinController from "../../modules/auth/useCases/signin/signinController";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/signin", signinController.handle);

export default authRouter;
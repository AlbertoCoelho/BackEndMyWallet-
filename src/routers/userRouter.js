import { Router } from "express";
import { createUser, signIn } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/sign-up", createUser);
userRouter.post("/sign-in", signIn );

export default userRouter;

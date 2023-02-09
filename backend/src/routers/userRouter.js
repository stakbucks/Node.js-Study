import express from "express";
import {
  handleUserEdit,
  handleUserDelete,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", handleUserEdit);
userRouter.get("/delete", handleUserDelete);

export default userRouter;

import express from "express";
import {
  handleUserEdit,
  handleUserDelete,
  isLoggedIn,
  logout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", handleUserEdit);
userRouter.get("/delete", handleUserDelete);
userRouter.get("/isLoggedIn", isLoggedIn);
userRouter.get("/logout",logout)

export default userRouter;

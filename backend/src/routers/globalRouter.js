import express from "express";
import { home, join, login, edit, search } from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/edit", edit);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;

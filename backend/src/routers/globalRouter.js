import express from "express";
import { home } from "../controllers/boardController";
import {
  join,
  login,
  edit,
  search,
  getAllUsers,
} from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/users", getAllUsers);
globalRouter.get("/edit", edit);
globalRouter.post("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;

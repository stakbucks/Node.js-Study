import express from "express";
import {
  boardEdit,
  boardShow,
  boardDelete,
  boardUpload,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/upload", boardUpload);
boardRouter.get("/:id(\\d+)", boardShow);
boardRouter.get("/:id(\\d+)/edit", boardEdit);
boardRouter.get("/:id(\\d+)/delete", boardDelete);

export default boardRouter;

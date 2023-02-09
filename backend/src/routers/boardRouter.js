import express from "express";
import {
  boardEdit,
  boardShow,
  boardDelete,
  boardUpload,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.post("/upload", boardUpload);
boardRouter.get("/:id", boardShow);
boardRouter.post("/:id/edit", boardEdit);
boardRouter.get("/:id/delete", boardDelete);

export default boardRouter;

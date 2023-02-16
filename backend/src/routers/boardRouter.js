import express from "express";
import {
  boardEdit,
  boardShow,
  boardDelete,
  boardUpload,
  boardSearch,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.post("/upload", boardUpload);
boardRouter.get("/search", boardSearch);
boardRouter.get("/:id", boardShow);
boardRouter.post("/:id/edit", boardEdit);
boardRouter.post("/:id/delete", boardDelete);

export default boardRouter;

import express from "express";
import cors from "cors";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import boardRouter from "./routers/boardRouter";
import bodyParser from "body-parser";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use(cors("http://localhost:3000"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/board", boardRouter);

export default app;

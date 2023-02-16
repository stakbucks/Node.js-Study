import express from "express";
import cors from "cors";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import boardRouter from "./routers/boardRouter";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);
app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  });
});
app.use("/add-one", (req, res, next) => {
  res.locals.name = "me";
  return res.redirect("http://localhost:3000/");
});

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/board", boardRouter);

export default app;

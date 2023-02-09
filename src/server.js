import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.get("/", logger, (req, res) => {
  res.send("hi");
});

app.get("/login", logger, (req, res) => {
  return res.send("Login here.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

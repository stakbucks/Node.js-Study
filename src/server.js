import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  console.log("Somebody is trying to go home.");
  return res.end("I love you");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

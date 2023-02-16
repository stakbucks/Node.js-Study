import "dotenv/config";
import "./db";
import "./models/Post";
import app from "./server";
import "./models/User";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

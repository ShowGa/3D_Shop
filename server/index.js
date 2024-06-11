import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E !" });
});

app.listen(8080, () => {
  console.log("Server listening to port 8080 !");
});

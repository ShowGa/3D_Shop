import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
// dalle api route
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E !" });
});

app.listen(8080, () => {
  console.log("Server listening to port 8080 !");
});

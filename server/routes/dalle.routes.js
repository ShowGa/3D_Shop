import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

// configuration
dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const router = express.Router();

router.post("/", async (req, res) => {
  // res.status(200).json({ message: "Hello from DALL-E Routes" });

  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    const image = response.data[0].url;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/ask", async (req, res) => {
  const { question, subject } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a tutor for ${subject}. Explain the answer step by step in a student-friendly way.`,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    // Access the answer safely
    const answer =
      response.choices?.[0]?.message?.content || "No answer returned.";

    res.json({ answer });
  } catch (error) {
    console.error("Error in /ask:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
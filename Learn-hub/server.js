import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Universal helper function to clean ALL formatting issues
function cleanLatex(text) {
  if (!text) return text;

  let cleaned = text;

  // ===== REMOVE ALL LaTeX SYMBOLS =====
  // Remove $$ and $ symbols
  cleaned = cleaned.replace(/\$\$/g, '');
  cleaned = cleaned.replace(/\$/g, '');

  // Remove \(, \), \[, \]
  cleaned = cleaned.replace(/\\\(/g, '');
  cleaned = cleaned.replace(/\\\)/g, '');
  cleaned = cleaned.replace(/\\\[/g, '');
  cleaned = cleaned.replace(/\\\]/g, '');

  // Remove \frac{}{} and convert to readable format
  cleaned = cleaned.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');

  // Convert common math commands before removing the rest
  cleaned = cleaned.replace(/\\times/g, '×');
  cleaned = cleaned.replace(/\\cdot/g, '×');
  cleaned = cleaned.replace(/\\div/g, '÷');
  cleaned = cleaned.replace(/\\pm/g, '±');

  // Remove all other LaTeX commands (\sqrt, \cdot, \times, etc.)
  cleaned = cleaned.replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, '');

  // ===== REMOVE MARKDOWN =====
  cleaned = cleaned.replace(/\*\*/g, '');
  cleaned = cleaned.replace(/\*/g, '');
  cleaned = cleaned.replace(/###/g, '');
  cleaned = cleaned.replace(/##/g, '');
  cleaned = cleaned.replace(/#/g, '');

  // ===== FIX EXPONENTS =====
  cleaned = cleaned.replace(/\^2/g, '²');
  cleaned = cleaned.replace(/\^3/g, '³');
  cleaned = cleaned.replace(/\^4/g, '⁴');
  cleaned = cleaned.replace(/\^5/g, '⁵');
  cleaned = cleaned.replace(/\^6/g, '⁶');
  cleaned = cleaned.replace(/\^7/g, '⁷');
  cleaned = cleaned.replace(/\^8/g, '⁸');
  cleaned = cleaned.replace(/\^9/g, '⁹');
  cleaned = cleaned.replace(/\^0/g, '⁰');

  // ===== FIX FORMATTING =====
  // Ensure proper spacing around operators
  cleaned = cleaned.replace(/([0-9])\s*\+\s*([0-9])/g, '$1 + $2');
  cleaned = cleaned.replace(/([0-9])\s*\*\s*([0-9])/g, '$1 × $2');
  cleaned = cleaned.replace(/([0-9])\s*\/\s*([0-9])/g, '$1 / $2');

  // ===== ADD LINE BREAKS =====
  // Add line breaks before steps
  cleaned = cleaned.replace(/(Step\s+\d+:)/gi, '\n\n$1');

  // Add line break before final answer
  cleaned = cleaned.replace(/(Final answer:)/gi, '\n\n$1');

  // ===== CLEAN UP EXTRA SPACES =====
  cleaned = cleaned.replace(/[ \t]+/g, ' ');
  cleaned = cleaned.replace(/ \n/g, '\n');
  cleaned = cleaned.replace(/\n /g, '\n');
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');

  return cleaned.trim();
}

app.post("/ask", async (req, res) => {
  const { question, subject, image } = req.body;

  try {
    let answer;

    if (image) {
      // Use qwen3:14b for vision/image questions
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "qwen3:14b",
          messages: [
            {
              role: "system",
              content: `You are a math tutor. Explain step by step. Use 'Step 1:', 'Step 2:'. Use plain text. Do not use $, LaTeX, or markdown. For images, first read the math problem carefully and include all visible operators like +, -, ×, ÷, /, and parentheses. If an operator is unclear, say it is unclear instead of guessing.`,
            },
            {
              role: "user",
              content: question,
              images: [image],
            },
          ],
          stream: false,
          options: { temperature: 0.1 },
        }),
      });
      const data = await response.json();
      answer = data.message?.content || "No answer returned.";
      answer = cleanLatex(answer);
      res.json({ answer });
    } else {
      // Use llama3.2:3b for text-only questions
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3.2:3b", 
          prompt: `You are a math tutor. Explain step by step. Use 'Step 1:', 'Step 2:'. Use plain text. Do not use $, LaTeX, or markdown
          Question: ${question}
          Answer:`,

          stream: false,
          options: { temperature: 0.7 },
        }),
      });
      const data = await response.json();
      answer = data.response || "No answer returned.";
      answer = cleanLatex(answer);
      res.json({ answer });
    }
  } catch (error) {
    console.error("Error in /ask:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log("🚀 Server running on http://localhost:3001"));

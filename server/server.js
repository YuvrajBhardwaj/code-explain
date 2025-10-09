import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import axios from "axios";

const app = express();

// 🧱 Security middleware
app.use(helmet());

// ✅ CORS setup — include both local + deployed frontend
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:3000",
      "https://code-explain-teal.vercel.app"
    ],
    credentials: true,
  })
);

// 🚦 Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later.",
});
app.use(limiter);

// 🧠 Parse incoming JSON
app.use(express.json({ limit: "10mb" }));

// 🧩 API endpoint
app.post("/api/explain-code", async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const messages = [
      {
        role: "user",
        content: `Please explain this ${language || ""} code in simple terms. Focus on what the code does, how it works, and the purpose of the main components:\n\n\`\`\`${language || ""}\n${code}\n\`\`\``,
      },
    ];

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct:free",
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer":
            process.env.FRONTEND_URL || "https://code-explain-teal.vercel.app",
          "X-Title": "Code Explainer AI",
        },
      }
    );

    const explanation = response.data.choices?.[0]?.message?.content;

    if (!explanation) {
      return res
        .status(500)
        .json({ error: "No explanation received from OpenRouter." });
    }

    res.status(200).json({ explanation });
  } catch (error) {
    console.error(
      "Code Explain API Error:",
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Server Error",
      details: error.message,
    });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

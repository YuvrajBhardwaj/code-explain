import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import axios from "axios"; // 1. Import axios

const app = express();

// ... (all your existing middleware: helmet, cors, limiter, express.json)
// ... (the code is the same as in your question, so I'll omit it for brevity)
app.use(helmet());
app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
        credentials: true
    })
)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again after some time."
})
app.use(limiter);
app.use(express.json({ limit: "10mb" }));


// The updated API endpoint
app.post("/api/explain-code", async (req, res) => {
    try {
        const { code, language } = req.body;

        if (!code) {
            return res.status(400).json({ error: "Code is required" });
        }

        // This part is the same - you're creating the prompt
        const messages = [
            {
                role: "user",
                content: `Please explain this ${language || ""} code in simple terms. Focus on what the code does, how it works, and the purpose of the main components:\n\n\`\`\`${language || ""}\n${code}\n\`\`\``
            }
        ];

        // --- NEW: Calling the OpenRouter API ---

        // 2. Make the POST request to OpenRouter
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                // 3. Choose a model. Check OpenRouter for available models (some are free!)
                // For example, "mistralai/mistral-7b-instruct:free" is a good free option.
                model: "mistralai/mistral-7b-instruct:free",
                messages: messages,
            },
            {
                // 4. Set the authorization headers
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    // These headers are recommended by OpenRouter for tracking
                    "HTTP-Referer": process.env.FRONTEND_URL || "http://localhost:3000",
                    "X-Title": "Code Explainer AI" // Can be your app's name
                }
            }
        );

        // 5. Extract the explanation from the OpenRouter response
        const explanation = response.data.choices[0].message.content;

        // 6. Send the explanation back to your frontend client
        res.status(200).json({ explanation: explanation });

    } catch (error) {
        // This will catch errors from the axios call as well
        console.error("Code Explain API Error: ", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Server Error", details: error.message });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
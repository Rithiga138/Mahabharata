import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini API client if API key is provided
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Decision Insight Endpoint
app.post("/api/explain-decision", async (req, res) => {
  const {
    scenarioTitle,
    dilemma,
    choiceLabel,
    choiceSummary,
    characterPerspective,
    fallbackInsight,
  } = req.body;

  try {
    const ai = getAi();
    if (!ai) {
      // Fallback if no API key is configured
      return res.json({
        ...fallbackInsight,
        isAiGenerated: false,
        note: "Curated scholarly analysis (configure GEMINI_API_KEY for dynamic real-time AI generation)."
      });
    }

    const prompt = `You are a distinguished classical scholar of Sanskrit epic literature and strategic leadership, specializing in the Mahābhārata's Bhīṣma Parva.
A student in an interactive university seminar has just made a difficult ethical/strategic decision in a simulated Kurukshetra scenario.

SCENARIO: ${scenarioTitle}
DILEMMA: ${dilemma}
STUDENT'S PERSPECTIVE: Experiencing through ${characterPerspective || "Arjuna"}'s lens.
STUDENT'S CHOICE: "${choiceLabel}"
CHOICE SUMMARY: ${choiceSummary}

Provide a structured, academic reflection on this choice. Do NOT invent facts or verses. Ground your response strictly in the critical edition of the Bhīṣma Parva and classical Indian decision theory (Dharma, Nīti, Nishkāma Karma, Loka-saṅgraha).

Respond with valid JSON conforming to this schema:
{
  "prioritization": "1-2 sentences on what core value or strategic dimension this choice immediately prioritises.",
  "strategicTradeOffs": "2 sentences analyzing the tangible strategic trade-offs, tactical advantages, or systemic vulnerabilities created.",
  "ethicalDimensions": "2 sentences examining the competing moral claims (e.g. Svadharma vs. Kula-dharma, deontology vs. consequentialism).",
  "longTermConsequences": "2 sentences on how this choice impacts the broader moral and political order beyond the immediate moment.",
  "epicParallels": "A direct historical/literary parallel from the Bhīṣma Parva or Bhagavad Gītā illustrating this exact dynamic."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are an academic expert in the Mahābhārata, Sanskrit epics, and strategic decision analysis. Produce thoughtful, objective, non-preachy educational analysis.",
      }
    });

    const text = response.text;
    if (text) {
      const parsed = JSON.parse(text);
      return res.json({
        ...parsed,
        isAiGenerated: true,
      });
    }

    return res.json({
      ...fallbackInsight,
      isAiGenerated: false,
    });
  } catch (error) {
    console.error("AI Explanation error, falling back to curated insight:", error);
    return res.json({
      ...fallbackInsight,
      isAiGenerated: false,
      note: "Curated scholarly analysis provided as fallback."
    });
  }
});

async function startServer() {
  // Vite dev middleware for development; static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Mahābhārata Educational Platform running at http://0.0.0.0:${PORT}`);
  });
}

startServer();

// node --version # Should be >= 18
// npm install @google/generative-ai express
import express from "express";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import dotenv from "dotenv";
import cors from "cors";
import { extractJSON } from "./functions.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-1.5-pro";

dotenv.configDotenv();

//Set CORS Policy
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  // const chat = model.startChat({ history: [] });

  const result = await model.generateContent(userInput);
  const response = await result.response.text();
  console.log(response);
  return response;
}

app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body?.userInput;

    if (!userInput) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const response = await runChat(userInput);

    if (response.includes("END_RESULT")) {
      console.log(extractJSON(response));
      res.json({ response: "DONE" });
    } else {
      res.json({ response });
    }
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    res
      .status(error.statusCode || 500)
      .json({ error: "Internal Server Error" });
  }
});

app.post("/scraplinkedIN", async (req, res) => {
  // PhantomBuster API configuration
  const API_KEY = "YOUR_PHANTOMBUSTER_API_KEY";
  const PHANTOM_ID = "YOUR_LINKEDIN_SEARCH_EXPORT_PHANTOM_ID";

  // LinkedIn search parameters
  const searchQuery = "YOUR_SEARCH_QUERY";
  const numberOfProfiles = 100; // Adjust as needed

  // Function to launch the PhantomBuster scraping job
  async function launchPhantomBusterJob() {
    try {
      const response = await axios.post(
        `https://api.phantombuster.com/api/v2/agents/${PHANTOM_ID}/launch`,
        {
          json: {
            searchUrl: `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(
              searchQuery
            )}`,
            numberOfProfilesPerLaunch: numberOfProfiles,
          },
        },
        {
          headers: {
            "X-Phantombuster-Key": API_KEY,
          },
        }
      );

      console.log("PhantomBuster job launched successfully:", response.data);
      return response.data.containerId;
    } catch (error) {
      console.error(
        "Error launching PhantomBuster job:",
        error.response ? error.response.data : error.message
      );
    }
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

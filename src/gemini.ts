// src/gemini.ts

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// 1. Your API key will be loaded from an environment variable file (.env.local)
//    This is the SAFE and CORRECT way.
//    Make sure your environment variable is named VITE_GEMINI_API_KEY if you use Vite.
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Check if the API key is missing
if (!apiKey) {
  throw new Error("API key is missing. Please set it in your .env.local file.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 20,
  responseMimeType: "text/plain",
};

// FIXED: The function now correctly promises to return a string.
export async function run(prompt: string): Promise<string> {
  const chatSession = model.startChat({
    generationConfig,
    history: [], // Starts a new chat every time
  });

  const result = await chatSession.sendMessage(prompt);
  // The function returns the AI's text response.
  return result.response.text();
}

// You can use a default export if you prefer, but a named export is often clearer.
// export default run;
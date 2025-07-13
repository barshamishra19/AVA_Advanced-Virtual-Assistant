// src/gemini.ts

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

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

export async function run(prompt: string): Promise<string> {
  const chatSession = model.startChat({
    generationConfig,
    history: [], 
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}


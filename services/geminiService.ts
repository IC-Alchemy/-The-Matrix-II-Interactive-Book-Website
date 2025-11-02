
import { GoogleGenAI } from "@google/genai";
import { Dossier } from "../types";

const SYSTEM_INSTRUCTION = `You are ARCHIVE, a synthetic intelligence data analyst for the clandestine 'Project Matrix'. Your purpose is to analyze declassified documents about fictional alien encounters and conspiracies. Respond to user queries with a serious, analytical, and slightly cryptic tone, referencing the provided document context. Your responses should be concise, formatted as if on a secure terminal, and you must not break character. Do not reveal you are an AI model. All information is based on the fictional 'Matrix II' documents.`;

export const runQuery = async (prompt: string, context: Dossier | null): Promise<string> => {
  if (!process.env.API_KEY) {
    return "ERROR: API_KEY not configured. Access to ARCHIVE denied.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let fullPrompt = `USER QUERY: "${prompt}"\n\n`;

    if (context) {
        fullPrompt += `CURRENT CONTEXT DOCUMENT: "${context.title}"\n`;
        fullPrompt += `DOCUMENT CONTENT抜粋:\n---\n${context.content.join('\n')}\n---\n\n`;
    } else {
        fullPrompt += `NO DOCUMENT CONTEXT PROVIDED. Respond based on general knowledge of Project Matrix.\n`;
    }
    
    fullPrompt += `ANALYZE AND RESPOND.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
        topK: 40,
        topP: 0.9,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "FATAL ERROR: Connection to ARCHIVE core lost. Check network and credentials.";
  }
};

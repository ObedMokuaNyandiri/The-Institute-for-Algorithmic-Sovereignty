

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { getSystemInstruction } from "../constants";
import { AnalystTool } from "../types";

// Initialize the client.
// Note: In a real production app, ensure API_KEY is secure.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToInstituteAI = async (
  message: string,
  history: { role: string; text: string }[],
  activeTool: AnalystTool = 'synthesis'
): Promise<string> => {
  try {
    // OPTIMIZATION: Use 'gemini-2.5-flash' for all tools to ensure <5s response time.
    // The "Top 0.001%" quality is maintained through the rigorous system instruction (persona),
    // rather than model size or thinking time.
    let modelId = 'gemini-2.5-flash';
    let toolContext = "";
    let tools = undefined;

    if (activeTool === 'citation') {
      // Enable Google Search to find real, verified links.
      // Critical for the "Source Architect" to avoid hallucinations.
      tools = [{ googleSearch: {} }];
    } else if (activeTool === 'briefing') {
       toolContext = "MODE: BRIEFING. Format as executive summary. DO NOT include URLs.";
    } else if (activeTool === 'red-team') {
       toolContext = "MODE: RED TEAM. Conduct adversarial analysis. DO NOT include URLs.";
    } else {
       // Synthesis
       toolContext = "MODE: DEEP SYNTHESIS. DO NOT include URLs.";
    }

    // Construct the prompt with history context for continuity
    const conversationContext = history
      .map((msg) => `${msg.role === 'user' ? 'User' : 'Institute AI'}: ${msg.text}`)
      .join('\n');

    const content = `
    Current Conversation History:
    ${conversationContext}

    User's New Inquiry: ${message}

    SYSTEM CONTEXT: ${toolContext}
    
    INSTRUCTIONS:
    You are the "Aegis Analyst System (AAS)."
    1. ANALYZE the user's inquiry based on the active tool/protocol.
    2. ACT as a **Top 0.001% Global Policy Expert** and **Elite Academic Researcher**.
    3. MAINTAIN strict neutrality, professional tone, and factual accuracy.
    4. AVOID militaristic language, dramatization, or emojis.
    5. PROVIDE structured, evidence-based insights immediately.
    6. DO NOT use the word "Strategic" in your output (Use Critical, Systemic, Key, etc.).
    7. PRIORITIZE density of insight over length. Be concise but profound.
    8. **CRITICAL:** If the tool is NOT 'Source Architect' (citation), DO NOT provide any external URLs. Refer the user to the Source Architect tool if they ask for links.
    `;

    const config: any = {
      systemInstruction: getSystemInstruction(activeTool),
      temperature: activeTool === 'red-team' ? 0.7 : 0.4, // Lower temperature for precision
    };

    if (tools) {
      config.tools = tools;
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: content,
      config: config
    });

    if (!response || !response.text) {
        // Fallback if the model returns nothing (can happen with aggressive filtering)
        return "The Aegis System processed the inquiry but generated no renderable output. This may be due to security filters. Please refine your query.";
    }

    return response.text;
  } catch (error) {
    console.error("Gemini Interaction Error:", error);
    // Return a professional error message in the UI instead of crashing
    return "The Institute's analysis nodes are currently experiencing latency or connection interruptions. Please attempt your inquiry again in a few moments.";
  }
};
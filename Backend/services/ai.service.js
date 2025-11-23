
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function generateAI(prompt) {
  const result = await model.generateContent({
    contents: prompt,
    // generationConfig: {
    //   responseMimeType: "application/json",
    //   temperature: 0.4,
    // },
  });


  return result.response.text();
}
console.log("API KEY:", process.env.GOOGLE_AI_KEY);

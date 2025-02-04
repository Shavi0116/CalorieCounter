import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3081;

const genAI = new GoogleGenerativeAI("API KEY"); 

app.use(cors());
app.use(express.json());

app.post('/get-calories', async (req, res) => {
    const { cal } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `You are a dietitian assisting users with nutritional information. You have to tell the approximate calories in ${cal}`;

        const result = await model.generateContent(prompt);

        let responseText = result.response.text();
        responseText = responseText.replace(/\*/g, '');

        res.json({ response: responseText });
    } catch (error) {
        console.error('Error generating content:', error.message);
        res.status(500).json({ error: 'An error occurred while processing your request. ' + error.message });
    }
});

// POST endpoint to generate a personalized diet plan
app.post("/generate-diet-plan", async (req, res) => {
    const { name, age, healthGoals, dietaryPreferences } = req.body;
  
    
    const basePrompt = `
  You are a professional dietitian. Based on the following user details, create a friendly and natural personalized diet plan:
  - Name: ${name || "User"}
  - Age: ${age || "unspecified"}
  - Health Goals: ${healthGoals || "general health improvement"}
  - Dietary Preferences: ${dietaryPreferences || "None"}
  
  Include:
  1. A suggested daily calorie goal.
  2. Example meals for breakfast, lunch, dinner, and snacks.
  3. Encouraging and practical tips for maintaining progress.
  
  Keep the tone supportive and conversational.`;
  
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
      let result = await model.generateContent(basePrompt);
      if (result.candidate_blocked_reason === "RECITATION") {
        const retryPrompt = `
  You are an expert dietitian. Create a personalized and flexible diet plan for:
  - Name: ${name || "User"}
  - Age: ${age || "unspecified"}
  - Goals: ${healthGoals || "general health improvement"}
  - Preferences: ${dietaryPreferences || "None"}
  
  Provide ideas for:
  - Total daily calories.
  - Example meals (breakfast, lunch, dinner, and snacks).
  - Lifestyle tips to meet health goals.
  Use creative and unique wording to avoid repetition.`;
  
        result = await model.generateContent(retryPrompt);
      }
  
      let responseText = result.response.text();
      responseText = responseText.replace(/\*/g, "").trim();
  
      res.json({ plan: responseText });
    } catch (error) {
      console.error("Error generating diet plan:", error.message);
      res.status(500).json({
        error: `An error occurred while processing your request. ${error.message}`,
      });
    }
  });
  

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

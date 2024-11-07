require('dotenv').config();
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1.45,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function generateQuotes() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: `Generate a JSON object representing a random quote with the following fields. First, generate a unique quote_text, and then base all other fields around the theme or sentiment of that quote.

1. quote_text: Write a unique quote with a theme that feels natural (e.g., inspirational, humorous, philosophical). Use human themes like love, success, happiness, wisdom, or humor for inspiration. Aim for a memorable tone.
2. author: Choose an author who would naturally align with the theme or tone of the quote (e.g., Mark Twain for humor, Albert Einstein for wisdom, or a fictional name if desired).
3. category: Assign a category that best matches the quote's theme, choosing from ['inspiration', 'motivation', 'wisdom', 'humor', 'life', 'philosophy'].
4. language: Set this to 'en' (for English).
5. date_added: Generate a random recent date, formatted in ISO 8601 (e.g., 2024-11-04T10:30:00Z).
6. popularity_score: Randomly select an integer from 1 to 100, representing popularity.
7. tags: Choose 1 to 3 single-word tags related to the quote's content or sentiment, such as 'happiness', 'success', 'wisdom', etc.
8. source: Provide a source that would suit the quote’s origin (e.g., the name of a book, speech, or article where it could be found, such as a fictional title or an actual work associated with the author if known).

Return the full quote as a JSON object.`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `{
  "quote_text": "The best way to predict the future is to create it.",
  "author": "Abraham Lincoln",
  "category": "motivation",
  "language": "en",
  "date_added": "2024-11-05T15:22:00Z",
  "popularity_score": 87,
  "tags": ["future", "action", "change"],
  "source": "Gettysburg Address"
}`,
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: `Generate a JSON object representing a random quote with the following fields. First, generate a unique quote_text, and then base all other fields around the theme or sentiment of that quote.

            1. quote_text: Write a unique quote with a theme that feels natural (e.g., inspirational, humorous, philosophical). Use human themes like love, success, happiness, wisdom, or humor for inspiration. Aim for a memorable tone.
            2. author: Choose an author who would naturally align with the theme or tone of the quote (e.g., Mark Twain for humor, Albert Einstein for wisdom, or a fictional name if desired).
            3. category: Assign a category that best matches the quote's theme, choosing from ['inspiration', 'motivation', 'wisdom', 'humor', 'life', 'philosophy'].
            4. language: Set this to 'en' (for English).
            5. date_added: Generate a random recent date, formatted in ISO 8601 (e.g., 2024-11-04T10:30:00Z).
            6. popularity_score: Randomly select an integer from 1 to 100, representing popularity.
            7. tags: Choose 1 to 3 single-word tags related to the quote's content or sentiment, such as 'happiness', 'success', 'wisdom', etc.
            8. source: Provide a source that would suit the quote’s origin (e.g., the name of a book, speech, or article where it could be found, such as a fictional title or an actual work associated with the author if known).
            
            Return the full quote as a JSON object.`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `{
  "quote_text": "The most important thing is to enjoy your life - to be happy - it's all that matters.",
  "author": "Audrey Hepburn",
  "category": "inspiration",
  "language": "en",
  "date_added": "2024-11-06T11:45:00Z",
  "popularity_score": 92,
  "tags": ["happiness", "life", "joy"],
  "source": "Interview with The New York Times"
}`,
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: `Generate a JSON object representing a random quote with the following fields. First, generate a unique quote_text, and then base all other fields around the theme or sentiment of that quote.

            1. quote_text: Write a unique quote with a theme that feels natural (e.g., inspirational, humorous, philosophical). Use human themes like love, success, happiness, wisdom, or humor for inspiration. Aim for a memorable tone.
            2. author: Choose an author who would naturally align with the theme or tone of the quote (e.g., Mark Twain for humor, Albert Einstein for wisdom, or a fictional name if desired).
            3. category: Assign a category that best matches the quote's theme, choosing from ['inspiration', 'motivation', 'wisdom', 'humor', 'life', 'philosophy'].
            4. language: Set this to 'en' (for English).
            5. date_added: Generate a random recent date, formatted in ISO 8601 (e.g., 2024-11-04T10:30:00Z).
            6. popularity_score: Randomly select an integer from 1 to 100, representing popularity.
            7. tags: Choose 1 to 3 single-word tags related to the quote's content or sentiment, such as 'happiness', 'success', 'wisdom', etc.
            8. source: Provide a source that would suit the quote’s origin (e.g., the name of a book, speech, or article where it could be found, such as a fictional title or an actual work associated with the author if known).
            
            Return the full quote as a JSON object.`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `{
  "quote_text": "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  "author": "Steve Jobs",
  "category": "motivation",
  "language": "en",
  "date_added": "2024-11-07T17:08:00Z",
  "popularity_score": 98,
  "tags": ["passion", "work", "purpose"],
  "source": "Stanford Commencement Speech, 2005"
}`,
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: `Generate a JSON object representing a random quote with the following fields. First, generate a unique quote_text, and then base all other fields around the theme or sentiment of that quote.

            1. quote_text: Write a unique quote with a theme that feels natural (e.g., inspirational, humorous, philosophical). Use human themes like love, success, happiness, wisdom, or humor for inspiration. Aim for a memorable tone.
            2. author: Choose an author who would naturally align with the theme or tone of the quote (e.g., Mark Twain for humor, Albert Einstein for wisdom, or a fictional name if desired).
            3. category: Assign a category that best matches the quote's theme, choosing from ['inspiration', 'motivation', 'wisdom', 'humor', 'life', 'philosophy'].
            4. language: Set this to 'en' (for English).
            5. date_added: Generate a random recent date, formatted in ISO 8601 (e.g., 2024-11-04T10:30:00Z).
            6. popularity_score: Randomly select an integer from 1 to 100, representing popularity.
            7. tags: Choose 1 to 3 single-word tags related to the quote's content or sentiment, such as 'happiness', 'success', 'wisdom', etc.
            8. source: Provide a source that would suit the quote’s origin (e.g., the name of a book, speech, or article where it could be found, such as a fictional title or an actual work associated with the author if known).
            
            Return the full quote as a JSON object.`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `{
  "quote_text": "Life is not about finding yourself. Life is about creating yourself.",
  "author": "George Bernard Shaw",
  "category": "philosophy",
  "language": "en",
  "date_added": "2024-11-08T09:12:00Z",
  "popularity_score": 75,
  "tags": ["identity", "self-discovery", "growth"],
  "source": "Man and Superman"
}`,
          },
        ],
      },
    ],
  });

  try {
    const result = await chatSession.sendMessage(process.env.PROMPT);
    
    if (result && result.response && result.response.text()) {
      let responseText = result.response.text();
      
      responseText = responseText.replace(/```json|```/g, '');
      
      const generatedData = JSON.parse(responseText);
      return generatedData;
    } else {
      console.error("Empty or invalid response from AI.");
      return null;
    }
  } catch (error) {
    console.error("Error during generation or parsing:", error);
    return null;
  }
}

module.exports = generateQuotes;
export default async function handler(req, res) {
  // Add CORS headers for the Chrome Extension to access this API
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing GROQ_API_KEY' });

  const { text } = req.body;

  if (!text || text.length < 10) {
    return res.status(400).json({ error: 'No text provided to parse' });
  }

  const systemPrompt = `You are an expert culinary AI. Your job is to extract core grocery ingredients from a block of raw webpage text.
Ignore ad copy, stories, styling, or instructions. Focus ONLY on the food ingredients.
Standardize the names to simple, common grocery store forms (e.g., "1 cup finely chopped red onions" -> "red onion", "2 tbsp olive oil" -> "olive oil").

Respond ONLY with a valid JSON array of strings and nothing else. No markdown, no backticks.
Example Output: ["red onion", "olive oil", "chicken breast", "sea salt"]`;

  // We truncate the text to prevent token overflow (first 5000 chars is usually enough for a recipe ingredients list)
  const userText = text.substring(0, 5000);
  const userPrompt = `Extract the grocery ingredients from this text:\n\n${userText}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.1, // extremely low temp for strict entity extraction
        max_tokens: 500
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Groq API error');

    let responseText = data.choices[0].message.content.trim();
    // Strip markdown code fences if present
    responseText = responseText.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    
    let ingredients = [];
    try {
      ingredients = JSON.parse(responseText);
    } catch (parseError) {
      // Fallback if AI messes up the array format slightly
      ingredients = responseText.split('\n').map(i => i.replace(/^-\s*/, '').replace(/[\[\]"]/g, '').trim()).filter(Boolean);
    }

    // Ensure we don't return an absurdly long list if the AI hallucinates
    ingredients = ingredients.slice(0, 20);

    return res.status(200).json({ ingredients });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

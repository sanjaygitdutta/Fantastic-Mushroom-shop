export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing GROQ_API_KEY' });

  const { ingredients = [], servings = 2, dietary = '' } = req.body;

  if (!ingredients.length) {
    return res.status(400).json({ error: 'No ingredients provided' });
  }

  const systemPrompt = `You are Chef Aika, a world-class AI chef assistant for the Fantastic Food platform.`;

  const userPrompt = `Create a recipe using these ingredients: ${ingredients.join(', ')}.
Servings: ${servings}${dietary ? `. Dietary preference: ${dietary}` : ''}.

Respond ONLY with valid JSON like this (no markdown, no extra text):
{
  "name": "Recipe Name",
  "description": "Short appetizing description (2 sentences max).",
  "ingredients_used": ["200g item with quantity", "2 tbsp item"],
  "instructions": ["Step 1: ...", "Step 2: ...", "Step 3: ..."],
  "prep_time": 10,
  "cook_time": 20,
  "servings": ${servings},
  "tips": "One helpful chef tip."
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 600
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Groq API error');

    let text = data.choices[0].message.content.trim();
    // Strip markdown code fences if present
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    const recipe = JSON.parse(text);
    return res.status(200).json(recipe);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

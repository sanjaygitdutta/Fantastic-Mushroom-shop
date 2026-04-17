export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing GROQ_API_KEY environment variable.' });

  const { budget = 1500, dietary = 'None', familySize = 2, days = 7 } = req.body;

  const systemPrompt = `You are a frugal, highly skilled Indian AI Chef and Grocery Planner. Your job is to create extremely practical, healthy ${days}-day meal plans that strictly fit within a tight Indian grocery budget constraint.`;

  const userPrompt = `Create a ${days}-day meal plan for ${familySize} people focusing on ${dietary} dietary preferences. 
The total weekly grocery budget MUST STAY UNDER ₹${budget} INR.

Respond ONLY with valid JSON exactly matching this structure (do not include markdown code block syntax):
{
  "estimatedCost": 1200,
  "savingsTip": "Buy whole spices and grind them at home...",
  "shoppingList": [
    { "item": "Toor Dal", "quantity": "1 kg" },
    { "item": "Tomato", "quantity": "1 kg" }
  ],
  "days": [
    {
      "day": 1,
      "breakfast": { "name": "Poha", "ingredients": ["poha", "onion", "peanuts"] },
      "lunch": { "name": "Dal Tadka & Rice", "ingredients": ["toor dal", "rice", "ghee"] },
      "dinner": { "name": "Aloo Gobi & Roti", "ingredients": ["potato", "cauliflower", "wheat flour"] }
    }
  ]
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.6,
        max_tokens: 4000
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch from Groq API');
    }

    let text = data.choices[0].message.content.trim();
    // Safely strip markdown code blocks if the model hallucinates them despite instructions
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    
    // Attempt parse
    const mealPlan = JSON.parse(text);

    return res.status(200).json(mealPlan);

  } catch (error) {
    console.error('Groq Meal Planner Error:', error);
    return res.status(500).json({ error: error.message });
  }
}

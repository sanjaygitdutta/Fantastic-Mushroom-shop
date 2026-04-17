export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing GROQ_API_KEY' });

  const { food } = req.body;
  if (!food) return res.status(400).json({ error: 'Food name required' });

  const prompt = `You are a certified FSSAI nutrition expert. Provide comprehensive nutrition info for: "${food}".

Respond ONLY with valid JSON (no markdown) matching this EXACT structure:
{
  "name": "Paneer (Cottage Cheese)",
  "servingSize": "100g",
  "healthScore": "B",
  "healthScoreReason": "High protein but high in saturated fat",
  "calories": 265,
  "macros": {
    "protein": 18,
    "carbs": 3,
    "fat": 20,
    "fiber": 0,
    "sugar": 2
  },
  "micronutrients": [
    { "name": "Calcium", "amount": "208mg", "dailyValue": "21%" },
    { "name": "Vitamin B12", "amount": "0.8mcg", "dailyValue": "33%" }
  ],
  "allergens": ["Dairy", "Lactose"],
  "warnings": ["High saturated fat — limit if you have heart disease"],
  "healthierAlternative": {
    "name": "Tofu",
    "reason": "Same protein with 40% fewer calories and less saturated fat",
    "searchQuery": "tofu"
  },
  "dietarySuitability": {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "diabeticFriendly": false,
    "heartHealthy": false
  },
  "benefits": [
    "Excellent source of complete protein",
    "Good for bone health due to high calcium"
  ]
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.2,
        max_tokens: 2000
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Groq API error');

    let text = data.choices[0].message.content.trim();
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    const result = JSON.parse(text);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Nutrition info error:', err);
    return res.status(500).json({ error: err.message });
  }
}

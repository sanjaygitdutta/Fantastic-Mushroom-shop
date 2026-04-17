export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing GROQ_API_KEY' });

  const { festival, familySize = 4, budget = 5000, dietary = 'None' } = req.body;
  if (!festival) return res.status(400).json({ error: 'Festival name required' });

  const prompt = `You are an expert Indian family grocery planner. Generate a complete bulk shopping list for the Indian festival "${festival}" for a family of ${familySize} people with a budget of ₹${budget}.
${dietary !== 'None' ? `Dietary preference: ${dietary}` : ''}

Respond ONLY with valid JSON (no markdown code blocks) exactly matching this structure:
{
  "festival": "${festival}",
  "essentialItems": [
    { "item": "Ghee", "quantity": "500g", "estimatedCost": 350, "purpose": "For making sweets and prasad" }
  ],
  "sweets": [
    { "item": "Dry Fruits Mix", "quantity": "500g", "estimatedCost": 280, "purpose": "For halwa and gifting" }
  ],
  "decorations": [
    { "item": "Marigold Flowers", "quantity": "500g", "estimatedCost": 80, "purpose": "For pooja and decoration" }
  ],
  "totalEstimatedCost": 4200,
  "budgetTip": "Buy dry fruits in bulk from wholesale market to save 30%",
  "festivalTip": "Best day to buy: 2 days before the festival when markets are stocked"
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
        max_tokens: 3000
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Groq API error');

    let text = data.choices[0].message.content.trim();
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    const result = JSON.parse(text);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Festival planner error:', err);
    return res.status(500).json({ error: err.message });
  }
}

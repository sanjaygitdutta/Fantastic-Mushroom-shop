export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing GROQ_API_KEY' });

  const { items, prices } = req.body;
  if (!items || !prices) return res.status(400).json({ error: 'Items and prices required' });

  const prompt = `You are an expert grocery shopping assistant. The user has built a basket with these items: ${items.join(', ')}.
Here are the total prices across platforms: ${JSON.stringify(prices)}.
Analyze this data and provide a "Smart Group Buy" recommendation.

Respond ONLY with valid JSON exactly matching this structure:
{
  "recommendationText": "It's best to order everything from Zepto to save on delivery fees, but buy the exotic vegetables from BigBasket.",
  "platformSplit": [
    { "platform": "Zepto", "itemsToBuy": "All basic groceries", "reason": "Cheapest total basket price" },
    { "platform": "BigBasket", "itemsToBuy": "Fresh produce", "reason": "Often better quality for vegetables" }
  ],
  "estimatedSavings": "₹150 by splitting the order"
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 1500
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Groq API error');

    let text = data.choices[0].message.content.trim();
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    const result = JSON.parse(text);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Group Buy error:', err);
    return res.status(500).json({ error: err.message });
  }
}

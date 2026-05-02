import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 });

  const { items, prices } = (await req.json());
  if (!items || !prices) return NextResponse.json({ error: 'Items and prices required' }, { status: 400 });

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
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error('Group Buy error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

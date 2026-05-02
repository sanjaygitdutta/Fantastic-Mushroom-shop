import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 });

  const { imageBase64 } = (await req.json());
  if (!imageBase64) return NextResponse.json({ error: 'No image provided' }, { status: 400 });

  try {
    // Use llama-3.2-11b-vision-preview for image analysis
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.2-11b-vision-preview',
        messages: [{
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Look at this image and list ONLY the food ingredients and grocery items you can see. Return ONLY a JSON array of ingredient names as simple strings, nothing else. Example: ["eggs", "tomatoes", "onion", "milk"]. Be concise.'
            },
            {
              type: 'image_url',
              image_url: {
                url: imageBase64.startsWith('data:') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`
              }
            }
          ]
        }],
        temperature: 0.3,
        max_tokens: 200
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Vision API error');

    let text = data.choices[0].message.content.trim();
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '').replace(/^```\s*/i, '');
    const ingredients = JSON.parse(text);
    return NextResponse.json({ ingredients }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

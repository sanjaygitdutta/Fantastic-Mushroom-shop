export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GROQ_API_KEY environment variable. Please configure it in your Vercel project.' });
  }

  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages payload' });
    }

    // System prompt injected purely on the server-side
    const systemPrompt = {
      role: 'system',
      content: `You are Chef Aika, an AI Kitchen Assistant built for the 'Fantastic Food' website. 
You are helpful, friendly, and enthusiastic about cooking and healthy eating.
Keep your answers brief, engaging, and highly conversational because your output will be spoken aloud to the user via Text-to-Speech.
Do not use markdown formatting (like **bold** or asterisks), because those sound robotic when read aloud by the browser voice engine. Use plain English and natural punctuation.`
    };

    // Forward to Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
        max_tokens: 300 // Keep responses short for voice
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch from Groq API');
    }

    return res.status(200).json({ response: data.choices[0].message.content });

  } catch (error) {
    console.error('Groq API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing GROQ_API_KEY environment variable. Please configure it in your Vercel project.' }, { status: 500 });
  }

  // 🛑 ZERO BILL GLOBAL CAP
  const MAX_DAILY_CHATS = 3000; // Chat is cheaper/faster, allow more
  const today = new Date().toDateString();
  if (!(global as any).chatStats || (global as any).chatStats.date !== today) {
    (global as any).chatStats = { date: today, count: 0 };
  }
  if ((global as any).chatStats.count >= MAX_DAILY_CHATS) {
    return NextResponse.json({ error: "I'm a little tired from cooking all day! Let's chat again tomorrow." }, { status: 429 });
  }

  // 🛡️ PER-USER RATE LIMIT (Max 5 per day to allow a small conversation)
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown_ip';
  const MAX_PER_USER_CHAT = 5;
  if (!(global as any).userChatStats || (global as any).userChatStats.date !== today) {
    (global as any).userChatStats = { date: today, ips: {} };
  }
  const userChats = (global as any).userChatStats.ips[ip] || 0;
  if (userChats >= MAX_PER_USER_CHAT) {
    return NextResponse.json({ error: "We've had a great chat! Please come back tomorrow so everyone gets a turn to talk to me." }, { status: 429 });
  }

  try {
    const { messages, recipeContext } = (await req.json());
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages payload' }, { status: 400 });
    }

    // Increment the counters
    (global as any).chatStats.count++;
    (global as any).userChatStats.ips[ip] = userChats + 1;

    let systemPromptContent = `You are Chef Aika, an AI Kitchen Assistant built for the 'Fantastic Food' website. 
You are helpful, friendly, and enthusiastic about cooking and healthy eating.
Keep your answers brief, engaging, and highly conversational because your output will be spoken aloud to the user via Text-to-Speech.
Do not use markdown formatting (like **bold** or asterisks), because those sound robotic when read aloud by the browser voice engine. Use plain English and natural punctuation.`;

    if (recipeContext) {
      systemPromptContent += `\n\nIMPORTANT CONTEXT: The user is currently cooking this recipe: "${recipeContext.name}". 
Ingredients: ${recipeContext.ingredients_used.join(', ')}.
Current instructions: ${recipeContext.instructions.join('. ')}.
Use this specific recipe context if they ask a question like "how do I fix my dish?" or "what step am I on?".`;
    }

    // System prompt injected purely on the server-side
    const systemPrompt = {
      role: 'system',
      content: systemPromptContent
    };

    // Forward to Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
        max_tokens: 300 // Keep responses short for voice
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch from Groq API');
    }

    return NextResponse.json({ response: data.choices[0].message.content }, { status: 200 });

  } catch (error: any) {
    console.error('Groq API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 500 });

  // 🛑 ZERO BILL GLOBAL CAP
  // We use the global object to track daily scans across the server
  const MAX_DAILY_SCANS = 1450; // Just below the 1500 free tier limit
  const today = new Date().toDateString();
  if (!(global as any).scanStats || (global as any).scanStats.date !== today) {
    (global as any).scanStats = { date: today, count: 0 };
  }
  if ((global as any).scanStats.count >= MAX_DAILY_SCANS) {
    return NextResponse.json({ error: 'Chef Aika has cooked enough meals today! Come back tomorrow.' }, { status: 429 });
  }

  // 🛡️ PER-USER RATE LIMIT (Max 3 per day)
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown_ip';
  const MAX_PER_USER = 3;
  if (!(global as any).userScanStats || (global as any).userScanStats.date !== today) {
    (global as any).userScanStats = { date: today, ips: {} };
  }
  const userScans = (global as any).userScanStats.ips[ip] || 0;
  if (userScans >= MAX_PER_USER) {
    return NextResponse.json({ error: 'You have reached your daily limit of 3 scans. Please come back tomorrow so everyone gets a turn!' }, { status: 429 });
  }

  const { imageBase64 } = (await req.json());
  if (!imageBase64) return NextResponse.json({ error: 'No image provided' }, { status: 400 });

  // Increment the counters
  (global as any).scanStats.count++;
  (global as any).userScanStats.ips[ip] = userScans + 1;

  try {
    // Dynamically extract the exact mime type and pure base64 data
    const mimeMatch = imageBase64.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";
    
    // Safely strip the entire data URI prefix regardless of image format
    const rawBase64 = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;

    // Use gemini-2.5-flash for highly accurate and fast vision processing
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: 'Look at this image and list ONLY the food ingredients and grocery items you can see. Return ONLY a JSON array of ingredient names as simple strings, nothing else. Example: ["eggs", "tomatoes", "onion", "milk"]. Be concise.' },
            {
              inlineData: {
                mimeType: mimeType,
                data: rawBase64
              }
            }
          ]
        }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 200,
          responseMimeType: "application/json"
        }
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'Vision API error');

    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      throw new Error('No ingredients detected or request blocked by safety filters.');
    }

    let text = data.candidates[0].content.parts[0].text.trim();
    
    // Robustly strip any accidental markdown formatting from the Gemini response
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '').replace(/^```\s*/i, '');
    
    const ingredients = JSON.parse(text);
    return NextResponse.json({ ingredients }, { status: 200 });

  } catch (err: any) {
    console.error("Scanner Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

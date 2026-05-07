import { NextResponse } from 'next/server';

import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Missing GROQ_API_KEY environment variable.' }, { status: 500 });

  const { budget = 1500, dietary = 'None', familySize = 2, days = 7 } = (await req.json());

  // 1. Calculate user constraints
  const totalMeals = familySize * days * 3;
  const budgetPerMeal = budget / totalMeals;

  // 2. Fetch Live Market Data from our new database
  let marketContext = "";
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
    
    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      const { data: cheapItems, error } = await supabase
        .from('live_prices')
        .select('item_name, price, unit')
        .eq('in_stock', true)
        .order('price', { ascending: true })
        .limit(6);
        
      if (!error && cheapItems && cheapItems.length > 0) {
        const itemString = cheapItems.map(i => `${i.item_name} (₹${i.price}/${i.unit || 'unit'})`).join(', ');
        
        marketContext = `\n--- LIVE MARKET DATA ---\nThe absolute cheapest fresh ingredients in the market today are: ${itemString}. `;
        
        if (budgetPerMeal <= 40) {
            marketContext += `The user's budget is EXTREMELY TIGHT (₹${Math.round(budgetPerMeal)} per meal). You MUST forcefully design recipes entirely around these cheap ingredients to keep costs down.`;
        } else if (budgetPerMeal <= 80) {
            marketContext += `The user's budget is moderate (₹${Math.round(budgetPerMeal)} per meal). Try to use a few of these cheap ingredients to save them money, but keep the meals varied.`;
        } else {
            marketContext += `The user has a generous budget (₹${Math.round(budgetPerMeal)} per meal). You can ignore the cheap ingredients and focus purely on premium, diverse meals.`;
        }
      }
    }
  } catch (err) {
    console.warn("Market context fetch failed, proceeding without live data.", err);
  }

  // 3. Construct AI Personality and Data
  const systemPrompt = `You are a frugal, highly skilled Indian AI Chef and Grocery Planner. Your job is to create extremely practical, healthy ${days}-day meal plans that strictly fit within a tight Indian grocery budget constraint.`;

  const userPrompt = `Create a ${days}-day meal plan for ${familySize} people focusing on ${dietary} dietary preferences. 
The total weekly grocery budget MUST STAY UNDER ₹${budget} INR.${marketContext}

Respond ONLY with valid JSON exactly matching this structure (do not include markdown code block syntax or backticks):
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
    // Safely strip markdown code blocks
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    
    // Attempt parse
    const mealPlan = JSON.parse(text);

    return NextResponse.json(mealPlan, { status: 200 });

  } catch (error: any) {
    console.error('Groq Meal Planner Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

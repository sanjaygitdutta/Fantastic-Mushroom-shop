import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    // Secure verification
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const { recipeId, imageUrl } = await request.json();

    if (!recipeId || !imageUrl) {
      return NextResponse.json({ error: 'Missing recipeId or imageUrl' }, { status: 400 });
    }

    // Initialize Supabase client with the Service Role key to bypass RLS
    const { createClient } = require('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabaseAdmin
      .from('recipe_image_overrides')
      .upsert({
        id: recipeId,
        image_url: imageUrl,
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' });

    if (error) {
      console.error('Supabase upsert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

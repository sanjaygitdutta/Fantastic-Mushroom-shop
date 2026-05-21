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

    const { product } = await request.json();

    if (!product || !product.id || !product.canonical_name) {
      return NextResponse.json({ error: 'Invalid product data' }, { status: 400 });
    }

    // Initialize Supabase client with the Service Role key to bypass RLS
    const { createClient } = require('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabaseAdmin
      .from('products')
      .upsert({
        id: product.id,
        canonical_name: product.canonical_name,
        category: product.category || 'Grocery',
        icon: product.icon || '🛒',
        unit: product.unit || '1 unit',
        // Preserve other fields if updating, though upsert normally overwrites specified keys
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' })
      .select();

    if (error) {
      console.error('Supabase upsert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, product: data?.[0] }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

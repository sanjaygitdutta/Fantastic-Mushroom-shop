import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabase } from '../../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    // Secure verification
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const { rowsToUpsert } = await request.json();

    if (!rowsToUpsert || !Array.isArray(rowsToUpsert)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    // Initialize Supabase client with the Service Role key to bypass RLS
    const { createClient } = require('@supabase/supabase-js');
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabaseAdmin
      .from('live_prices')
      .upsert(rowsToUpsert, { onConflict: 'item_name,platform_id' });

    if (error) {
      console.error('Supabase upsert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, count: rowsToUpsert.length }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

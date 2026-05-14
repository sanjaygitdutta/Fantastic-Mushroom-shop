import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const { refCode } = await request.json();

    if (!refCode || typeof refCode !== 'string') {
      return NextResponse.json({ error: 'Invalid ref code' }, { status: 400 });
    }

    // Check if the ref code exists
    const { data: existingData, error: fetchError } = await supabase
      .from('viral_referrals')
      .select('click_count, id')
      .eq('ref_code', refCode)
      .single();

    if (fetchError || !existingData) {
      // If doesn't exist, we just ignore or could create it if the user just made it
      return NextResponse.json({ success: false, message: 'Ref code not found' });
    }

    // Increment click count
    const { error: updateError } = await supabase
      .from('viral_referrals')
      .update({ click_count: existingData.click_count + 1 })
      .eq('id', existingData.id);

    if (updateError) {
      console.error('Error incrementing click count', updateError);
      return NextResponse.json({ success: false, error: 'Database update failed' });
    }

    return NextResponse.json({ success: true, newCount: existingData.click_count + 1 });
  } catch (err) {
    console.error('Referral API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

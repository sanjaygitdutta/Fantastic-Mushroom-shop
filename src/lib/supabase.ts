import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://imqwmcgeokxnydovxwha.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseKey) {
  console.warn("Supabase Anon Key is missing! Check your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

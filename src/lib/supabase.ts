import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dsbfjxlavhevsblcwaez.supabase.co';
// Provide a dummy key if the environment variable is missing to prevent createClient from throwing a fatal runtime error.
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy-key-to-prevent-fatal-crash';

if (supabaseKey === 'dummy-key-to-prevent-fatal-crash') {
  console.warn("Supabase Anon Key is missing! Check your .env.local file or Vercel Environment Variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    fetch: (url, options) => {
      return fetch(url, { ...options, cache: 'no-store' });
    }
  }
});

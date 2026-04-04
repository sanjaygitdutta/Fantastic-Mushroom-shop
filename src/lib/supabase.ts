import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://imqwmcgeokxnydovxwha.supabase.co';
const supabaseKey = 'sb_publishable_4-RH2_Xk2j19YRzA_0nXmw_Wh5mGUvO';

export const supabase = createClient(supabaseUrl, supabaseKey);

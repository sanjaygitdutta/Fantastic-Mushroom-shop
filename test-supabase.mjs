import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://imqwmcgeokxnydovxwha.supabase.co',
  'sb_publishable_4-RH2_Xk2j19YRzA_0nXmw_Wh5mGUvO'
);

async function run() {
  const { data, error } = await supabase
    .from('product_overrides')
    .upsert({ product_id: 'test_product3', stock: 0 }, { onConflict: 'product_id' })
    .select();
    
  console.log('Stock UPSERT result:', { data, error });
}

run();

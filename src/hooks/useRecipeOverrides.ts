import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useRecipeOverrides() {
  const [overrides, setOverrides] = useState<Record<string, string>>({});

  useEffect(() => {
    async function loadOverrides() {
      try {
        const { data } = await supabase
          .from('recipe_image_overrides')
          .select('id, image_url');
        
        if (data) {
          const map: Record<string, string> = {};
          for (const item of data) {
            map[item.id] = item.image_url;
          }
          setOverrides(map);
        }
      } catch (err) {
        console.error('Error fetching recipe image overrides:', err);
      }
    }
    loadOverrides();
  }, []);

  return overrides;
}

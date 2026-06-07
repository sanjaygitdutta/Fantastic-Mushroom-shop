-- Run this in your Supabase SQL Editor to create the table for manual recipe image overrides

CREATE TABLE IF NOT EXISTS recipe_image_overrides (
  id text PRIMARY KEY,
  image_url text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE recipe_image_overrides ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid duplicate errors
DROP POLICY IF EXISTS "Public read overrides" ON recipe_image_overrides;

-- Create policy to allow public read access
CREATE POLICY "Public read overrides" ON recipe_image_overrides FOR SELECT USING (true);

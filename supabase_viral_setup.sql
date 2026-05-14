-- Run this in your Supabase SQL Editor to create the table for the viral loop

CREATE TABLE viral_referrals (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  ref_code text UNIQUE NOT NULL,
  click_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE viral_referrals ENABLE ROW LEVEL SECURITY;

-- Allow public read access (so anyone can see their own click count)
CREATE POLICY "Public read access" ON viral_referrals FOR SELECT USING (true);

-- Allow public insert access (so the website can register new users)
CREATE POLICY "Public insert access" ON viral_referrals FOR INSERT WITH CHECK (true);

-- Allow public update access (so the website can increment clicks)
CREATE POLICY "Public update access" ON viral_referrals FOR UPDATE USING (true);

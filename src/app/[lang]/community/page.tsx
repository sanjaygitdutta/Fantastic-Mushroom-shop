import { Suspense } from 'react';
import CommunityFeed from '../../../views/CommunityFeed';
import type { CommunityPost } from '../../../views/CommunityFeed';
import { supabase } from '../../../lib/supabase';
import type { Metadata } from 'next';

type Props = {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const postId = searchParams.post as string;

  if (postId && !postId.startsWith('aika')) {
    const { data: post } = await supabase
      .from('community_posts')
      .select('*')
      .eq('id', postId)
      .single();

    if (post) {
      return {
        title: `${post.recipe_name} by ${post.user_name} | Fantastic Food`,
        description: `Check out this amazing recipe for ${post.recipe_name} on Fantastic Food!`,
        openGraph: {
          title: `${post.recipe_name} by ${post.user_name}`,
          description: `A delicious community recipe on Fantastic Food.`,
          images: post.photo_url ? [post.photo_url] : [],
        },
      };
    }
  }

  return {
    title: 'Community Recipes & Creations | Fantastic Food',
    description: 'Discover and share amazing mushroom recipes with the Fantastic Food community. Buy fresh ingredients directly from our recipes!',
  };
}

export default async function Page() {
  // Fetch initial posts on the server for SEO!
  const { data: initialPosts } = await supabase
    .from('community_posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  // Parse cooksnaps just like client does so HTML matches
  const safeInitialPosts = (initialPosts || []).map(d => ({
    ...d,
    cooksnaps: 0 // SSR shouldn't use Math.random() to avoid hydration mismatch
  })) as CommunityPost[];

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <CommunityFeed initialPosts={safeInitialPosts} />
    </Suspense>
  );
}

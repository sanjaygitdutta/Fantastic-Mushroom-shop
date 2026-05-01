'use client';
import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';

const BlogDirectory = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  return (
    <>
      <SEO 
        title="Grocery Deals, Coupons & Price Insights Blog | Fantastic Food"
        description="Read the latest insights on how to save money on grocery delivery in India. Zepto vs Blinkit, coupon codes, and price drops."
        canonicalUrl="https://www.fantasticfood.in/blog"
      />

      <div className="pt-24 pb-16 bg-cream-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-black font-display text-forest-900 mb-6 tracking-tight">
              {t('blog_deals', { defaultValue: 'Deals &' })} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">{t('blog_market_insights', { defaultValue: 'Market Insights' })}</span>
            </h1>
            <p className="text-xl text-forest-600 mb-8 leading-relaxed">
              {t('blog_directory_desc', { defaultValue: 'Discover the latest grocery coupons, delivery hacks, and data-driven price comparisons to help you save more on every order.' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => {
              const tPost = post.translations?.[lang] || post;
              const displayTitle = tPost.title || post.title;
              const displayDescription = tPost.description || post.description;

              return (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="bg-white rounded-3xl p-6 border border-forest-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-forest-50 text-forest-700 rounded-full border border-forest-100">
                    {post.tags[0]}
                  </span>
                  <span className="text-xs text-forest-400 font-medium">
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold font-display text-forest-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {displayTitle}
                </h2>
                
                <p className="text-forest-600 mb-6 flex-grow line-clamp-3">
                  {displayDescription}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-forest-50 mt-auto">
                  <span className="text-sm font-medium text-forest-500 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center text-xs">AI</span>
                    {post.author}
                  </span>
                  <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform">
                    {t('button_read_more', { defaultValue: 'Read →' })}
                  </span>
                </div>
              </Link>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogDirectory;

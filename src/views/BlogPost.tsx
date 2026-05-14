'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogPosts';

const BlogPost = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  const router = useRouter();
  useEffect(() => {
    if (!post) router.replace('/blog');
  }, [post, router]);

  if (!post) {
    return null;
  }

  const lang = i18n.language;
  const tPost = post.translations?.[lang] || post;
  
  const displayTitle = tPost.title || post.title;
  const displayDescription = tPost.description || post.description;
  const displayContent = tPost.content || post.content;

  // Schema for Google News/Article ranking
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: displayTitle,
    description: displayDescription,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: new Date(post.date).toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Fantastic Food',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fantasticfood.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.fantasticfood.in/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEO 
        title={`${displayTitle} | Fantastic Food`}
        description={displayDescription}
        canonicalUrl={`https://www.fantasticfood.in/blog/${post.slug}`}
        structuredData={articleSchema}
      />

      <article className="pt-24 pb-16 bg-cream-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          
          <Link href="/blog" className="text-forest-500 hover:text-amber-600 font-medium flex items-center gap-2 mb-8">
            {t('blog_back', { defaultValue: '← Back to Blog' })}
          </Link>

          <header className="mb-12">
            <div className="flex gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-6 leading-tight">
              {displayTitle}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-forest-600 pb-8 border-b border-forest-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  AI
                </div>
                <div>
                  <p className="font-bold text-forest-900">{post.author}</p>
                  <p className="text-xs">{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-forest max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-forest-100 mb-12">
            <ReactMarkdown
               components={{
                h2: ({node, ...props}) => <h2 className="text-2xl font-black font-display text-forest-900 mt-8 mb-4 border-b border-forest-100 pb-2" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold text-forest-800 mt-6 mb-3" {...props} />,
                p: ({node, ...props}) => <p className="text-forest-700 leading-relaxed mb-6" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 text-forest-700 mb-6 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 text-forest-700 mb-6 space-y-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-black text-forest-900" {...props} />,
              }}
            >
              {displayContent}
            </ReactMarkdown>
            
            {/* Action Card Funnel */}
            <div className="mt-12 bg-linear-to-br from-forest-900 to-forest-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-black font-display mb-3">{t('blog_stop_overpaying', { defaultValue: 'Stop overpaying for groceries.' })}</h3>
              <p className="text-forest-200 mb-6">{t('blog_compare_desc', { defaultValue: 'Instantly compare live prices across Blinkit, Zepto, and Swiggy Instamart before you buy.' })}</p>
              <Link href="/compare" className="inline-block bg-amber-500 hover:bg-amber-400 text-forest-900 font-bold px-8 py-4 rounded-xl transition-transform hover:-translate-y-1">
                {t('blog_compare_btn', { defaultValue: 'Compare Live Prices Now' })}
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
};

export default BlogPost; // refresh

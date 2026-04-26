'use client';
// Enhanced SEO Component with full OG, Twitter, JSON-LD, and Hreflang support
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n/dictionary';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  structuredData?: object | object[];
}

const DEFAULT_OG_IMAGE = 'https://www.fantasticfood.in/og-image.jpg';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = 'Fantastic Food — Compare grocery prices across 7 apps in India',
  ogType = 'website',
  structuredData,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'en';

  useEffect(() => {
    // ── HTML Lang Attribute ────────────────────────────
    document.documentElement.lang = `${currentLang}-IN`;

    const fullTitle = title.includes('Fantastic Food') ? title : `${title} | Fantastic Food`;
    document.title = fullTitle;

    let pageUrl = canonicalUrl || window.location.href;
    if (canonicalUrl && currentLang !== 'en') {
      const urlObj = new URL(canonicalUrl);
      urlObj.pathname = `/${currentLang}${urlObj.pathname === '/' ? '' : urlObj.pathname}`;
      pageUrl = urlObj.toString();
    }

    const setMeta = (attr: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string, hreflang?: string) => {
      let el = document.querySelector(`link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ':not([hreflang])'}`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (hreflang) el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Core meta ──────────────────────────────────────
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');
    setMeta('name', 'author', 'Fantastic Food');
    setMeta('name', 'language', `${currentLang}-IN`);
    if (keywords) setMeta('name', 'keywords', keywords);

    // ── Open Graph ─────────────────────────────────────
    setMeta('property', 'og:title',       fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type',        ogType);
    setMeta('property', 'og:url',         pageUrl);
    setMeta('property', 'og:image',       ogImage);
    setMeta('property', 'og:image:width',  '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt',    ogImageAlt);
    setMeta('property', 'og:site_name',   'Fantastic Food');
    setMeta('property', 'og:locale',      `${currentLang}_IN`);

    // ── Twitter Cards ──────────────────────────────────
    setMeta('name', 'twitter:card',        'summary_large_image');
    setMeta('name', 'twitter:title',       fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image',       ogImage);
    setMeta('name', 'twitter:site',        '@fantasticfoodin');

    // ── Canonical & Hreflang ───────────────────────────
    if (pageUrl) {
      setLink('canonical', pageUrl);
      
      // Inject hreflang tags for ALL supported languages to link their SEO ranking
      // This is the #1 most important step for scaling regional SEO
      SUPPORTED_LANGUAGES.forEach(lang => {
        // Build language specific URL by injecting the language prefix into the pathname
        const baseUrl = canonicalUrl || window.location.href;
        const urlObj = new URL(baseUrl);
        if (lang.code !== 'en') {
          urlObj.pathname = `/${lang.code}${urlObj.pathname === '/' ? '' : urlObj.pathname}`;
        }
        const localizedUrl = urlObj.toString();
        
        // Use 'x-default' for english, and standard codes for others
        const hreflangCode = lang.code === 'en' ? 'x-default' : `${lang.code}-in`;
        setLink('alternate', localizedUrl, hreflangCode);
      });
    }

    // ── JSON-LD Structured Data ────────────────────────
    // Supports single object OR array — injects as @graph for Google compatibility
    if (structuredData) {
      const id = 'seo-structured-data-jsonld';
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': dataArray });
    }

    return () => {
      // Clean up on page navigation so stale schema doesn't persist
      document.getElementById('seo-structured-data-jsonld')?.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogImageAlt, ogType, structuredData, currentLang]);

  return null;
};

export default SEO;

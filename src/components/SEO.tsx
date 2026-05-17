'use client';
// Enhanced SEO Component with full OG, Twitter, JSON-LD, and Hreflang support
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useRegion } from '../utils/region';

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
  const { region } = useRegion();
  const currentLang = i18n.language?.substring(0, 2) || 'en';
  const isSG = region?.toUpperCase() === 'SG';

  useEffect(() => {
    const targetCountry = isSG ? 'SG' : 'IN';
    const localeCode = isSG ? 'SG' : 'IN';

    // ── HTML Lang Attribute ────────────────────────────
    document.documentElement.lang = `${currentLang}-${targetCountry}`;

    const fullTitle = title.includes('Fantastic Food') ? title : `${title} | Fantastic Food`;
    document.title = fullTitle;

    // ── Canonical URL Construction ─────────────────────
    // Strip any ?lang= query param that may exist from old links/redirects
    const rawUrl = canonicalUrl || window.location.href;
    const urlObj = new URL(rawUrl);
    urlObj.searchParams.delete('lang'); // kill ?lang=te, ?lang=mr etc.

    // Strip any existing language prefix from path to avoid double-prefixing (/hi/hi/...)
    const LANG_CODES = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'zh-CN', 'ms'];
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    if (LANG_CODES.includes(pathParts[0])) {
      pathParts.shift(); // remove existing lang prefix
    }
    const cleanPath = '/' + pathParts.join('/');

    // Now inject correct language prefix for non-English
    if (currentLang !== 'en') {
      urlObj.pathname = `/${currentLang}${cleanPath === '/' ? '' : cleanPath}`;
    } else {
      urlObj.pathname = cleanPath || '/';
    }

    // Preserve region tag in canonical for SG pages so Google knows the canonical of SG version is the one with parameter
    if (isSG) {
      urlObj.searchParams.set('region', 'SG');
    } else {
      urlObj.searchParams.delete('region');
    }

    let pageUrl = urlObj.toString();

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
    setMeta('name', 'language', `${currentLang}-${targetCountry}`);
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
    setMeta('property', 'og:locale',      `${currentLang}_${localeCode}`);

    // ── Twitter Cards ──────────────────────────────────
    setMeta('name', 'twitter:card',        'summary_large_image');
    setMeta('name', 'twitter:title',       fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image',       ogImage);
    setMeta('name', 'twitter:site',        '@fantasticfoodin');

    // ── Canonical & Hreflang alternate Map ───────────────────────────
    if (pageUrl) {
      setLink('canonical', pageUrl);
      
      const targets = [
        { hreflang: 'en-SG', langCode: 'en', targetRegion: 'SG' },
        { hreflang: 'zh-SG', langCode: 'zh-CN', targetRegion: 'SG' },
        { hreflang: 'ms-SG', langCode: 'ms', targetRegion: 'SG' },
        { hreflang: 'en-IN', langCode: 'en', targetRegion: 'IN' },
        { hreflang: 'hi-IN', langCode: 'hi', targetRegion: 'IN' },
        { hreflang: 'bn-IN', langCode: 'bn', targetRegion: 'IN' },
        { hreflang: 'mr-IN', langCode: 'mr', targetRegion: 'IN' },
        { hreflang: 'te-IN', langCode: 'te', targetRegion: 'IN' },
        { hreflang: 'ta-IN', langCode: 'ta', targetRegion: 'IN' },
        { hreflang: 'x-default', langCode: 'en', targetRegion: 'IN' },
      ];

      targets.forEach(({ hreflang, langCode, targetRegion }) => {
        const baseUrl = canonicalUrl || window.location.href;
        const hrefObj = new URL(baseUrl);
        hrefObj.search = ''; // clear search

        // Strip any existing language prefix from path
        const hrefParts = hrefObj.pathname.split('/').filter(Boolean);
        if (LANG_CODES.includes(hrefParts[0])) hrefParts.shift();
        const hrefClean = '/' + hrefParts.join('/');

        // Add lang prefix for non-English
        if (langCode !== 'en') {
          hrefObj.pathname = `/${langCode}${hrefClean === '/' ? '' : hrefClean}`;
        } else {
          hrefObj.pathname = hrefClean || '/';
        }

        // Add region tag for SG target URLs
        if (targetRegion === 'SG') {
          hrefObj.searchParams.set('region', 'SG');
        }

        const localizedUrl = hrefObj.toString();
        setLink('alternate', localizedUrl, hreflang);
      });
    }

    // ── JSON-LD Structured Data ────────────────────────
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
      document.getElementById('seo-structured-data-jsonld')?.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogImageAlt, ogType, structuredData, currentLang, isSG]);

  return null;
};

export default SEO;

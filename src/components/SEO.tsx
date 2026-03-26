// Enhanced SEO Component with JSON-LD Structured Data
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  // For product comparison pages
  structuredData?: object;
}

const SEO = ({ title, description, keywords, canonicalUrl, structuredData }: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes('Fantastic Food') ? title : `${title} | Fantastic Food`;
    document.title = fullTitle;

    const setMeta = (attr: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, attrVal); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
      el.setAttribute('href', href);
    };

    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    setMeta('property', 'og:title',       fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type',        'website');
    setMeta('property', 'og:site_name',   'Fantastic Food');
    setMeta('property', 'twitter:title',  fullTitle);
    setMeta('property', 'twitter:description', description);
    setMeta('name',     'robots',         'index, follow');

    if (canonicalUrl) setLink('canonical', canonicalUrl);

    // Inject / update JSON-LD structured data
    if (structuredData) {
      const id = 'structured-data-jsonld';
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Clean up JSON-LD on unmount
      if (structuredData) {
        document.getElementById('structured-data-jsonld')?.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, structuredData]);

  return null;
};

export default SEO;

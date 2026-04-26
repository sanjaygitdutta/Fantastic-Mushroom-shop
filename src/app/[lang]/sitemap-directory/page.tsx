'use client';
import { Suspense } from 'react';
import SitemapDirectory from '../../../views/SitemapDirectory';
export default function Page() {
  return <Suspense fallback={<div className="min-h-screen" />}><SitemapDirectory /></Suspense>;
}

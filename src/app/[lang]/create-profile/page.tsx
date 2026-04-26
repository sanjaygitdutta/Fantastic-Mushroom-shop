'use client';
import { Suspense } from 'react';
import CreateProfile from '../../../views/CreateProfile';
export default function Page() {
  return <Suspense fallback={<div className="min-h-screen" />}><CreateProfile /></Suspense>;
}

'use client';
import { Suspense } from 'react';
import Disclaimer from '../../../views/Disclaimer';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Disclaimer />
    </Suspense>
  );
}

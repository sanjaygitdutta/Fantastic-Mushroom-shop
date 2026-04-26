'use client';

import { Suspense } from 'react';
import B2B from '../../../views/B2B';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <B2B />
    </Suspense>
  );
}

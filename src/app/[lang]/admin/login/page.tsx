'use client';

import { Suspense } from 'react';
import AdminLogin from '../../../../views/admin/AdminLogin';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900"><div className="w-8 h-8 border-4 border-gray-700 border-t-amber-500 rounded-full animate-spin" /></div>}>
      <AdminLogin />
    </Suspense>
  );
}

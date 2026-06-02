'use client';

import { Suspense } from 'react';
import AdminRoute from '../../../../views/admin/AdminRoute';
import ManageMessages from '../../../../views/admin/ManageMessages';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-cream-50"><div className="w-10 h-10 border-4 border-forest-100 border-t-forest-900 rounded-full animate-spin" /></div>}>
      <AdminRoute>
        <ManageMessages />
      </AdminRoute>
    </Suspense>
  );
}

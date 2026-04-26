'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// AdminRoute is now used as a layout wrapper — not a React Router Outlet.
// It checks localStorage for admin access and redirects to /admin/login if not found.
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const hasAdminAccess = localStorage.getItem('mushroom_admin') === 'true';
    if (!hasAdminAccess) {
      router.replace('/admin/login');
    }
  }, [router]);

  // Render children optimistically; the useEffect redirect will fire if not admin
  return <>{children}</>;
};

export default AdminRoute;

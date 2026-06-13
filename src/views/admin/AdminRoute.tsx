'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// AdminRoute secures the layout wrapper by verifying the HttpOnly cookie via the server.
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/admin/check-auth', { cache: 'no-store' });
        if (res.ok) {
          setIsAuthorized(true);
        } else {
          router.replace('/admin/login');
        }
      } catch (error) {
        router.replace('/admin/login');
      }
    };
    checkAuth();
  }, [router]);

  // Show nothing while verifying to prevent content flash
  if (isAuthorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-8 h-8 border-4 border-gray-700 border-t-amber-500 rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminRoute;

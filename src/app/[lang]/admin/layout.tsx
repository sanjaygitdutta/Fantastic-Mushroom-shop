'use client';

import { usePathname } from 'next/navigation';
import AdminLayout from '../../../views/admin/AdminLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname.includes('/admin/login');

  if (isLoginPage) {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}

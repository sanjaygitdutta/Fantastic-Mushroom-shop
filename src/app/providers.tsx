'use client';

import { AuthProvider } from '../context/AuthContext';
import { ProductProvider } from '../context/ProductContext';
import { WishlistProvider } from '../context/WishlistContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProductProvider>
      <AuthProvider>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </AuthProvider>
    </ProductProvider>
  );
}

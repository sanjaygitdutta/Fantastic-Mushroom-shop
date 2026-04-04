import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';
import type { Product } from '../data/products';
import { supabase } from '../lib/supabase';

// ── Types ──────────────────────────────────────────────────────────────────────
interface ProductOverride {
  product_id: string;
  stock?: number | null;
  custom_image?: string | null;
  price?: number | null;
}

interface ProductContextType {
  products: Product[];
  updateProduct: (id: string, updates: Partial<Product>) => void;
  updateMultipleProducts: (updatesMap: Record<string, Partial<Product>>) => void;
  deleteProduct: (id: string) => void;
  addProduct: (product: Product) => void;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
/** Merge Supabase overrides on top of the hardcoded product list */
const mergeOverrides = (base: Product[], overrides: ProductOverride[]): Product[] =>
  base.map(p => {
    const o = overrides.find(ov => ov.product_id === p.id);
    if (!o) return p;
    return {
      ...p,
      ...(o.stock !== null && o.stock !== undefined ? { stock: o.stock } : {}),
      ...(o.custom_image ? { image: o.custom_image } : {}),
      ...(o.price !== null && o.price !== undefined ? { price: Number(o.price) } : {}),
    };
  });

// ── Context ────────────────────────────────────────────────────────────────────
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all overrides from Supabase and merge with base products
  const loadProducts = async () => {
    try {
      const { data: overrides, error } = await supabase
        .from('product_overrides')
        .select('*');

      if (error) {
        console.error('Supabase fetch error:', error);
        setProducts(initialProducts); // graceful fallback
      } else {
        setProducts(mergeOverrides(initialProducts, overrides ?? []));
      }
    } catch (err) {
      console.error('Network error loading products:', err);
      setProducts(initialProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();

    // 🔴 Realtime subscription — all open tabs/browsers update instantly
    const channel = supabase
      .channel('product_overrides_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'product_overrides' },
        () => loadProducts()
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  // Save a single product's override to Supabase
  const saveOverride = async (id: string, updates: Partial<Product>) => {
    const row: Partial<ProductOverride> & { product_id: string } = { product_id: id };
    if (updates.stock !== undefined) row.stock = updates.stock;
    if (updates.image !== undefined) row.custom_image = updates.image;
    if (updates.price !== undefined) row.price = updates.price;

    const { error } = await supabase
      .from('product_overrides')
      .upsert(row, { onConflict: 'product_id' });

    if (error) console.error('Supabase upsert error:', error);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    // Instant local state update (no flicker)
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    // Persist to Supabase → syncs to ALL customers worldwide
    saveOverride(id, updates);
  };

  const updateMultipleProducts = (updatesMap: Record<string, Partial<Product>>) => {
    setProducts(prev =>
      prev.map(p => updatesMap[p.id] ? { ...p, ...updatesMap[p.id] } : p)
    );
    Object.entries(updatesMap).forEach(([id, updates]) => saveOverride(id, updates));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100">
        <div className="w-12 h-12 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <ProductContext.Provider value={{ products, updateProduct, updateMultipleProducts, deleteProduct, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

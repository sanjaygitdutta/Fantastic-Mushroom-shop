import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';
import type { Product } from '../data/products';

interface ProductContextType {
  products: Product[];
  updateProduct: (id: string, updates: Partial<Product>) => void;
  updateMultipleProducts: (updatesMap: Record<string, Partial<Product>>) => void;
  deleteProduct: (id: string) => void;
  addProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadFromStorage = () => {
    const stored = localStorage.getItem('mushroom_products');
    if (stored) {
      try {
        const parsed: Product[] = JSON.parse(stored);
        // Restore any custom-uploaded images stored in separate keys
        const withImages = parsed.map(p => {
          const customImg = localStorage.getItem(`product_img_${p.id}`);
          if (customImg) return { ...p, image: customImg };
          // If placeholder, try to resolve from initial data
          if (p.image === `__custom__${p.id}` || p.image === '') {
            const initial = initialProducts.find(ip => ip.id === p.id);
            return { ...p, image: initial?.image || p.image };
          }
          return p;
        });
        setProducts(withImages);
      } catch (e) {
        setProducts(initialProducts);
      }
    } else {
      setProducts(initialProducts);
      // Save product list keeping original image paths (only base64 is stored separately)
      try { localStorage.setItem('mushroom_products', JSON.stringify(initialProducts)); } catch { /* ignore */ }
    }
  };

  useEffect(() => {
    loadFromStorage();
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'mushroom_products' || (e.key && e.key.startsWith('product_img_'))) {
        loadFromStorage();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    // Store images separately so the main JSON never overflows
    newProducts.forEach(p => {
      if (p.image && p.image.startsWith('data:')) {
        try {
          localStorage.setItem(`product_img_${p.id}`, p.image);
        } catch (e) {
          console.error('Image too large even for individual key', e);
        }
      }
    });
    // Save product list without base64 blobs
    const slim = newProducts.map(p => ({
      ...p,
      image: p.image.startsWith('data:') ? `__custom__${p.id}` : p.image
    }));
    try {
      localStorage.setItem('mushroom_products', JSON.stringify(slim));
    } catch (e) {
      console.error('Failed to save products list:', e);
    }
    // Always update React state with full images so UI updates immediately
    setProducts(newProducts);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    const newProducts = products.map((p) =>
      p.id === id ? { ...p, ...updates } : p
    );
    saveProducts(newProducts);
  };

  const updateMultipleProducts = (updatesMap: Record<string, Partial<Product>>) => {
    const newProducts = products.map((p) => {
      if (updatesMap[p.id]) {
        return { ...p, ...updatesMap[p.id] };
      }
      return p;
    });
    saveProducts(newProducts);
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter((p) => p.id !== id);
    saveProducts(newProducts);
  };

  const addProduct = (product: Product) => {
    const newProducts = [product, ...products];
    saveProducts(newProducts);
  };

  if (products.length === 0) {
    // Show a minimal loader while data hydrates from localStorage
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

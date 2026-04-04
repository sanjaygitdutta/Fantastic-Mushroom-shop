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

  useEffect(() => {
    // Load from local storage or fallback to initial hardcoded list
    const stored = localStorage.getItem('mushroom_products');
    if (stored) {
      try {
        setProducts(JSON.parse(stored));
      } catch (e) {
        setProducts(initialProducts);
      }
    } else {
      setProducts(initialProducts);
      localStorage.setItem('mushroom_products', JSON.stringify(initialProducts));
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    try {
        localStorage.setItem('mushroom_products', JSON.stringify(newProducts));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
        alert('Storage limit exceeded! The image you uploaded is too large for the browser memory. Please use a smaller image under 2MB.');
    }
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
      return null; // Render nothing during initial load
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

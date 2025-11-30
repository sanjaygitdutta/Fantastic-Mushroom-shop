import { createContext, useContext, useState } from 'react';
import type { ReactNode, FC } from 'react';
import type { Product } from '../data/products';

export interface CartItem extends Product {
    quantity: number;
    selectedWeight?: number; // Weight in grams for weight-based products
    isCustomWeight?: boolean; // True if custom weight was used
    calculatedPrice: number; // Actual price based on weight/quantity
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, weight?: number, isCustom?: boolean) => void;
    removeFromCart: (productId: string, weight?: number) => void;
    updateQuantity: (productId: string, quantity: number, weight?: number) => void;
    clearCart: () => void;
    cartTotal: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper function to calculate price based on weight
const calculateWeightPrice = (product: Product, weight: number): number => {
    if (product.unit === 'grams' && product.weightOptions) {
        return (product.price * weight) / 1000; // price per kg * (weight in grams / 1000)
    }
    return product.price;
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: Product, weight?: number, isCustom: boolean = false) => {
        // For weight-based products, use default weight if not provided
        const selectedWeight = weight || (product.weightOptions && product.weightOptions[1]) || undefined;
        const calculatedPrice = selectedWeight
            ? calculateWeightPrice(product, selectedWeight)
            : product.price;

        setItems(prev => {
            const existing = prev.find(item =>
                item.id === product.id && item.selectedWeight === selectedWeight
            );

            if (existing) {
                return prev.map(item =>
                    item.id === product.id && item.selectedWeight === selectedWeight
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, {
                ...product,
                quantity: 1,
                selectedWeight,
                isCustomWeight: isCustom,
                calculatedPrice
            }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: string, weight?: number) => {
        setItems(prev => prev.filter(item =>
            !(item.id === productId && item.selectedWeight === weight)
        ));
    };

    const updateQuantity = (productId: string, quantity: number, weight?: number) => {
        if (quantity < 1) {
            removeFromCart(productId, weight);
            return;
        }
        setItems(prev => prev.map(item =>
            item.id === productId && item.selectedWeight === weight
                ? { ...item, quantity }
                : item
        ));
    };

    const cartTotal = items.reduce((total, item) =>
        total + (item.calculatedPrice * item.quantity), 0
    );

    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            isCartOpen,
            setIsCartOpen,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

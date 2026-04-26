'use client';
import { useSearchParams } from 'next/navigation';

import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductContext';

const ProductGrid = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const { products } = useProducts();

    const filteredProducts = category
        ? products.filter(p => p.category === category)
        : products;

    const getTitle = () => {
        if (!category) return 'Curated Selection';
        const titles: Record<string, string> = {
            'fresh': 'Fresh Mushrooms',
            'dried': 'Dried Mushrooms',
            'snacks': 'Snacks & Ready-to-Eat',
            'ready-to-cook': 'Ready-to-Cook & Meal Kits',
            'spices': 'Spices, Sauces & Oils',
            'grow': 'Grow Kits & Learning',
            'gift': 'Gifts & Bundles',
            'merch': 'Merchandise & Fun'
        };
        return titles[category] || 'Products';
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-mushroom-900 mb-4">{getTitle()}</h2>
                <p className="text-mushroom-700 max-w-2xl mx-auto">
                    {category
                        ? `Explore our premium selection of ${getTitle().toLowerCase()}.`
                        : "Hand-picked for quality and potency. Whether you're a gourmet chef or a wellness enthusiast, we have something special for you."
                    }
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;

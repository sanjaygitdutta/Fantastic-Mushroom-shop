import { useState } from 'react';
import { products } from '../../data/products';
import ProductEditor from '../../components/ProductEditor';
import { Save, CheckCircle } from 'lucide-react';

const ManageProducts = () => {
    const [productUpdates, setProductUpdates] = useState<Record<string, { image?: string; price?: number }>>({});
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const categories = [
        { id: 'all', name: 'All Products', count: products.length },
        { id: 'fresh', name: 'Fresh Mushrooms', count: products.filter(p => p.category === 'fresh').length },
        { id: 'dried', name: 'Dried Mushrooms', count: products.filter(p => p.category === 'dried').length },
        { id: 'snacks', name: 'Snacks', count: products.filter(p => p.category === 'snacks').length },
        { id: 'ready-to-cook', name: 'Ready-to-Cook', count: products.filter(p => p.category === 'ready-to-cook').length },
        { id: 'spices', name: 'Spices & Sauces', count: products.filter(p => p.category === 'spices').length },
        { id: 'grow', name: 'Grow & Learn', count: products.filter(p => p.category === 'grow').length },
        { id: 'gift', name: 'Gifts & Bundles', count: products.filter(p => p.category === 'gift').length },
        { id: 'merch', name: 'Merch & Fun', count: products.filter(p => p.category === 'merch').length },
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    const handleImageUpdate = (productId: string, url: string) => {
        setProductUpdates(prev => ({
            ...prev,
            [productId]: { ...prev[productId], image: url }
        }));
    };

    const handlePriceUpdate = (productId: string, price: number) => {
        setProductUpdates(prev => ({
            ...prev,
            [productId]: { ...prev[productId], price }
        }));
    };

    const handleSaveAll = () => {
        console.log('Saving all updates:', productUpdates);
        // Here you would save to Supabase/database
        alert(`✅ ${Object.keys(productUpdates).length} products updated successfully!`);
    };

    const hasChanges = Object.keys(productUpdates).length > 0;

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-mushroom-50 to-forest-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Manage Products 🍄
                    </h1>
                    <p className="text-gray-600">
                        Upload images and edit prices for each product
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-8 bg-white rounded-xl shadow-md p-4">
                    <div className="flex flex-wrap gap-3">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${activeCategory === category.id
                                        ? 'bg-forest-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name}
                                <span className="ml-2 text-sm opacity-75">({category.count})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Save Button (Sticky) */}
                {hasChanges && (
                    <div className="fixed bottom-6 right-6 z-50">
                        <button
                            onClick={handleSaveAll}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-lg transition-all hover:scale-105"
                        >
                            <Save className="w-6 h-6" />
                            Save {Object.keys(productUpdates).length} Changes
                        </button>
                    </div>
                )}

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <ProductEditor
                            key={product.id}
                            productId={product.id}
                            productName={product.name}
                            currentImage={product.image}
                            currentPrice={product.price}
                            onImageUpdate={(url) => handleImageUpdate(product.id, url)}
                            onPriceUpdate={(price) => handlePriceUpdate(product.id, price)}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">
                            No products in this category yet.
                        </p>
                    </div>
                )}

                {/* Summary */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        Summary
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-forest-700">{filteredProducts.length}</div>
                            <div className="text-sm text-gray-600">Products Showing</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-mushroom-600">{Object.keys(productUpdates).length}</div>
                            <div className="text-sm text-gray-600">Changes Pending</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">
                                {Object.values(productUpdates).filter(u => u.image).length}
                            </div>
                            <div className="text-sm text-gray-600">Images Updated</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">
                                {Object.values(productUpdates).filter(u => u.price).length}
                            </div>
                            <div className="text-sm text-gray-600">Prices Updated</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;

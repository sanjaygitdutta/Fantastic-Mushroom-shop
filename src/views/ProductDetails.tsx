'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';

import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { Plus, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Reviews from '../components/Reviews';
import WeightSelector from '../components/WeightSelector';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../utils/region';
import SEO from '../components/SEO';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const { addToCart } = useCart();
    const { t } = useTranslation();
    const { region } = useRegion();
    const isSG = region?.toUpperCase() === 'SG';
    const product = products.find(p => p.id === id);

    // State for weight selection
    const [selectedWeight, setSelectedWeight] = useState<number>(
        product?.weightOptions ? product.weightOptions[1] : 0 // Default to 500g
    );
    const [customWeight, setCustomWeight] = useState<number | null>(null);

    if (!product) {
        return <div className="min-h-screen pt-24 text-center">Product not found</div>;
    }

    const handleWeightChange = (weight: number, isCustom: boolean) => {
        setSelectedWeight(weight);
        if (isCustom) {
            setCustomWeight(weight);
        } else {
            setCustomWeight(null);
        }
    };

    const handleAddToCart = () => {
        if (product.weightOptions && product.unit === 'grams') {
            addToCart(product, selectedWeight, customWeight !== null);
        } else {
            addToCart(product);
        }
    };

    // Calculate display price for weight-based products
    const displayPrice = product.weightOptions && product.unit === 'grams'
        ? ((product.price * selectedWeight) / 1000).toFixed(2)
        : product.price.toFixed(2);

    const priceLabel = product.weightOptions && product.unit === 'grams'
        ? `${isSG ? '$' : '₹'}${displayPrice} (for ${selectedWeight}g)`
        : `${isSG ? '$' : '₹'}${displayPrice}`;

    return (
        <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-20">
            <SEO
                title={t(isSG ? 'product_seo_title_sg' : 'product_seo_title', { name: product.name, defaultValue: `${product.name} | Fantastic Mushroom Shop` })}
                description={t(isSG ? 'product_seo_desc_sg' : 'product_seo_desc', { name: product.name, desc: product.description, defaultValue: `Buy fresh and organic ${product.name} online at Fantastic Mushroom Shop. ${product.description}` })}
                canonicalUrl={isSG ? `https://www.fantasticfood.in/product/${product.id}?region=SG` : `https://www.fantasticfood.in/product/${product.id}`}
                keywords={isSG
                  ? `buy ${product.name} Singapore, organic ${product.name} SG, culinary mushrooms Singapore`
                  : `buy ${product.name}, organic ${product.name}, fresh mushrooms online`}
            />
            <Link href="/" className="inline-flex items-center text-mushroom-600 hover:text-forest-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square rounded-3xl overflow-hidden bg-mushroom-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-sm font-semibold mb-4 uppercase tracking-wider">
                            {product.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-mushroom-900 mb-4">{product.name}</h1>
                        <div className="flex items-center gap-2 mb-6">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-mushroom-900">{product.rating}</span>
                            <span className="text-mushroom-400">•</span>
                            <span className="text-mushroom-500">128 Reviews</span>
                        </div>
                        <p className="text-3xl font-bold text-forest-900 mb-8">
                            {priceLabel}
                            {product.weightOptions && (
                                <span className="text-sm text-gray-500 block mt-1">
                                    Base: {isSG ? '$' : '₹'}{product.price}/kg
                                </span>
                            )}
                        </p>
                    </div>

                    <p className="text-lg text-mushroom-700 leading-relaxed mb-10">
                        {product.description}
                        <br /><br />
                        Sustainably harvested and carefully packaged to preserve freshness and potency. Perfect for culinary masterpieces or daily wellness routines.
                    </p>

                    {/* Weight Selector */}
                    {product.weightOptions && product.unit === 'grams' && (
                        <div className="mb-8">
                            <WeightSelector
                                product={product}
                                selectedWeight={selectedWeight}
                                customWeight={customWeight}
                                onWeightChange={handleWeightChange}
                            />
                        </div>
                    )}

                    <button
                        onClick={handleAddToCart}
                        className="w-full md:w-auto px-12 py-4 bg-forest-900 text-white font-bold rounded-xl hover:bg-forest-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-forest-900/20"
                    >
                        <Plus className="w-5 h-5" />
                        Add to Cart
                    </button>

                    <div className="border-t border-mushroom-200 pt-6 mt-8">
                        <h3 className="text-lg font-semibold text-forest-900 mb-4">Description</h3>
                        <p className="text-gray-700 leading-relaxed">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <Reviews productId={product.id} />
        </div>
    );
};

export default ProductDetails;

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Product } from '../data/products';
import ProductCard from './ProductCard';
import MediaUpload from './MediaUpload';

interface CategoryTemplateProps {
    title: string;
    description: string;
    icon: ReactNode;
    products: Product[];
    primaryColor: string;
    accentColor: string;
    gradientFrom: string;
    gradientTo: string;
    showUpload?: boolean;
}

const CategoryTemplate = ({
    title,
    description,
    icon,
    products,
    primaryColor,
    accentColor,
    gradientFrom,
    gradientTo,
    showUpload = false
}: CategoryTemplateProps) => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section
                className="relative py-20 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
                }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: primaryColor }} />
                    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: accentColor }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})` }}
                            >
                                <span className="text-4xl">{icon}</span>
                            </div>
                        </div>

                        <h1
                            className="text-5xl md:text-6xl font-bold mb-6"
                            style={{ color: primaryColor }}
                        >
                            {title}
                        </h1>

                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Products Grid - 3 columns */}
                    <div className="lg:col-span-3">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {products.length} Products Available
                            </h2>
                        </div>

                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">
                                    No products available in this category yet.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Upload Section */}
                    {showUpload && (
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <MediaUpload
                                    productId="category-upload"
                                    onUploadComplete={(url) => console.log('Uploaded:', url)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CategoryTemplate;

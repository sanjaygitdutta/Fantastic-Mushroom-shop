'use client';
import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const SpicesSauces = () => {
    const spiceProducts = products.filter(p => p.category === 'spices');

    return (
        <CategoryTemplate
            title="Spices & Sauces"
            description="Exotic mushroom-infused spices and sauces! Elevate your cooking with our premium blends. Rich, flavorful, and aromatic!"
            icon="🍄"
            products={spiceProducts}
            primaryColor="#A855F7"
            accentColor="#7C3AED"
            gradientFrom="#F3E8FF"
            gradientTo="#E9D5FF"
            showUpload={true}
        />
    );
};

export default SpicesSauces;

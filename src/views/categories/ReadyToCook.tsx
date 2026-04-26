'use client';
import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const ReadyToCook = () => {
    const readyToCookProducts = products.filter(p => p.category === 'ready-to-cook');

    return (
        <CategoryTemplate
            title="Ready-to-Cook"
            description="Pre-prepared mushroom meals that save you time! Just heat and eat. Homemade quality, restaurant taste!"
            icon="🍄"
            products={readyToCookProducts}
            primaryColor="#EF4444"
            accentColor="#DC2626"
            gradientFrom="#FEE2E2"
            gradientTo="#FECACA"
            showUpload={true}
        />
    );
};

export default ReadyToCook;

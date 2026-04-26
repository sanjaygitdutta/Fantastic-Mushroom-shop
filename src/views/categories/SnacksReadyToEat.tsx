'use client';
import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const SnacksReadyToEat = () => {
    const snackProducts = products.filter(p => p.category === 'snacks');

    return (
        <CategoryTemplate
            title="Snacks & Ready-to-Eat"
            description="Delicious mushroom snacks ready to enjoy! Perfect for any time cravings. Healthy, tasty, and convenient!"
            icon="🍄"
            products={snackProducts}
            primaryColor="#FACC15"
            accentColor="#F59E0B"
            gradientFrom="#FEF9C3"
            gradientTo="#FEF3C7"
            showUpload={true}
        />
    );
};

export default SnacksReadyToEat;

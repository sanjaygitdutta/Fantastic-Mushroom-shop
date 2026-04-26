'use client';
import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const FreshMushrooms = () => {
    const freshProducts = products.filter(p => p.category === 'fresh');

    return (
        <CategoryTemplate
            title="Fresh Mushrooms"
            description="Handpicked, organic fresh mushrooms grown with care in our village. 100% chemical-free and bursting with flavor!"
            icon="🍄"
            products={freshProducts}
            primaryColor="#84CC16"
            accentColor="#06B6D4"
            gradientFrom="#ECFCCB"
            gradientTo="#CFFAFE"
            showUpload={true}
        />
    );
};

export default FreshMushrooms;

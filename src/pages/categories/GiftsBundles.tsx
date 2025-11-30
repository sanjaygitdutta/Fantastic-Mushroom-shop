import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const GiftsBundles = () => {
    const giftProducts = products.filter(p => p.category === 'gift');

    return (
        <CategoryTemplate
            title="Gifts & Bundles"
            description="Thoughtfully curated mushroom gift sets perfect for loved ones! Premium packaging, organic quality. Give the gift of health!"
            icon="🍄"
            products={giftProducts}
            primaryColor="#F472B6"
            accentColor="#EC4899"
            gradientFrom="#FCE7F3"
            gradientTo="#FBCFE8"
            showUpload={true}
        />
    );
};

export default GiftsBundles;

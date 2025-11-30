import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const GrowLearn = () => {
    const growProducts = products.filter(p => p.category === 'grow');

    return (
        <CategoryTemplate
            title="Grow & Learn"
            description="Discover the art of mushroom cultivation! Educational kits, workshops, and resources to start your own mushroom farm. Learn from our village expertise!"
            icon="🍄"
            products={growProducts}
            primaryColor="#3B82F6"
            accentColor="#14B8A6"
            gradientFrom="#DBEAFE"
            gradientTo="#CCFBF1"
            showUpload={true}
        />
    );
};

export default GrowLearn;

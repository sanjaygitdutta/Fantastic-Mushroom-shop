import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const DriedMushrooms = () => {
    const driedProducts = products.filter(p => p.category === 'dried');

    return (
        <CategoryTemplate
            title="Dried Mushrooms"
            description="Preserved at peak freshness, our dried mushrooms offer concentrated flavor and extended shelf life. Perfect for your pantry!"
            icon="🍄"
            products={driedProducts}
            primaryColor="#F59E0B"
            accentColor="#EA580C"
            gradientFrom="#FEF3C7"
            gradientTo="#FFEDD5"
            showUpload={true}
        />
    );
};

export default DriedMushrooms;

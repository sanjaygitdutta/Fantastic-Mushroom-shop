import CategoryTemplate from '../../components/CategoryTemplate';
import { products } from '../../data/products';

const MerchFun = () => {
    const merchProducts = products.filter(p => p.category === 'merch');

    return (
        <CategoryTemplate
            title="Merch & Fun"
            description="Show your love for mushrooms! Trendy merchandise, apparel, and accessories. Stylish, unique, and fun!"
            icon="🍄"
            products={merchProducts}
            primaryColor="#06B6D4"
            accentColor="#F472B6"
            gradientFrom="#CFFAFE"
            gradientTo="#FCE7F3"
            showUpload={true}
        />
    );
};

export default MerchFun;

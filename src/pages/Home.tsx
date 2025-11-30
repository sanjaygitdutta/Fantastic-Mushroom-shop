import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import MushroomLifecycleBackground from '../components/MushroomLifecycleBackground';

const Home = () => {
    return (
        <>
            <MushroomLifecycleBackground />
            <div className="relative z-10">
                <Hero />
                <div id="products">
                    <ProductGrid />
                </div>
            </div>
        </>
    );
};

export default Home;

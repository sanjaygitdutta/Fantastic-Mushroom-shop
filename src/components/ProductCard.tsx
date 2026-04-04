import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plus, Star, Heart } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const isLiked = isInWishlist(product.id);

    const toggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isLiked) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product.id);
        }
    };

    // 3D Tilt Setup
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        // Throw confetti from the button's position
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = (rect.left + rect.width / 2) / window.innerWidth;
        const cy = (rect.top + rect.height / 2) / window.innerHeight;
        
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { x: cx, y: cy },
            colors: ['#10B981', '#F59E0B', '#166534'],
            disableForReducedMotion: true,
            zIndex: 100
        });
        
        addToCart(product);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d",
                perspective: "1000px" 
            }}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-mushroom-300/30 will-change-transform"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                </Link>
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <button
                        onClick={toggleWishlist}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm"
                    >
                        <Heart className={`w-4 h-4 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} />
                    </button>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-semibold text-forest-900 shadow-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {product.rating}
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs font-bold text-forest-500 uppercase tracking-wider mb-1">{product.category}</p>
                        <Link to={`/product/${product.id}`}>
                            <h3 className="text-lg font-bold text-mushroom-900 leading-tight group-hover:text-forest-700 transition-colors">
                                {product.name}
                            </h3>
                        </Link>
                        {product.weightOptions && product.weightOptions.length > 0 && (
                            <div className="text-xs text-forest-700 mt-1.5 font-semibold bg-forest-50 border border-forest-100 px-2 py-1 rounded-md inline-block shadow-sm">
                                Available in: {product.weightOptions.join(', ')} {product.unit || 'grams'}
                            </div>
                        )}
                    </div>
                    <span className="text-lg font-bold text-forest-900">
                        ₹{product.price}
                    </span>
                </div>

                <p className="text-mushroom-700 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <button
                    onClick={handleAddToCart}
                    className="w-full py-3 bg-mushroom-100 text-mushroom-900 font-semibold rounded-xl hover:bg-forest-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;

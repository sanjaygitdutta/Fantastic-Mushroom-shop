import { motion } from 'framer-motion';
import { Plus, Star, Heart } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';

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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-mushroom-300/30"
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
                    </div>
                    <span className="text-lg font-bold text-forest-900">
                        ₹{product.price}
                    </span>
                </div>

                <p className="text-mushroom-700 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 bg-mushroom-100 text-mushroom-900 font-semibold rounded-xl hover:bg-forest-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;

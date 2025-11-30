import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';

const Recipes = () => {
    return (
        <div className="min-h-screen pt-20 bg-mushroom-50">
            {/* Hero */}
            <div className="bg-forest-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Fungi Kitchen
                    </motion.h1>
                    <p className="text-xl text-mushroom-200 max-w-2xl mx-auto">
                        Discover delicious ways to cook with our premium mushrooms. From quick snacks to gourmet feasts.
                    </p>
                </div>
            </div>

            {/* Recipe Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe, index) => (
                        <motion.div
                            key={recipe.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-mushroom-100 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest-900 uppercase tracking-wide">
                                    {recipe.difficulty}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {recipe.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">{recipe.title}</h3>
                                <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {recipe.prepTime}
                                    </div>
                                    <div className="flex items-center">
                                        <ChefHat className="w-4 h-4 mr-1" />
                                        {recipe.cookTime}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-4 h-4 mr-1" />
                                        {recipe.servings} pp
                                    </div>
                                </div>
                                <Link
                                    to={`/recipes/${recipe.id}`}
                                    className="inline-flex items-center text-forest-600 font-bold hover:text-forest-800 transition-colors"
                                >
                                    View Recipe <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recipes;

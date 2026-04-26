'use client';
import { Plus, Trash2, Search } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useProducts } from '../../context/ProductContext';

const Products = () => {
    const { products, updateProduct, deleteProduct: deleteContextProduct } = useProducts();

    const toggleAvailability = (id: string, currentStock: number) => {
        updateProduct(id, { stock: currentStock > 0 ? 0 : 15 });
        toast.success(currentStock > 0 ? 'Marked as Out of Stock globally' : 'Marked as Available globally');
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;
        deleteContextProduct(id);
        toast.success('Product deleted from global store');
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-mushroom-900">Products</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-forest-900 text-white font-semibold rounded-xl hover:bg-forest-800 transition-colors">
                    <Plus className="w-5 h-5" />
                    Add Product
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-mushroom-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-mushroom-100 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-mushroom-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-mushroom-200 focus:outline-none focus:ring-2 focus:ring-forest-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-mushroom-50 text-mushroom-600 font-semibold text-sm">
                            <tr>
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Stock</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-mushroom-100">
                            {products.length === 0 ? (
                                <tr><td colSpan={5} className="px-6 py-8 text-center text-mushroom-500">No products found</td></tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-mushroom-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover bg-mushroom-100" />
                                                <span className="font-medium text-mushroom-900">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-mushroom-600">{product.category}</td>
                                        <td className="px-6 py-4 font-medium text-mushroom-900">₹{product.price}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${(product.stock ?? 15) > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                }`}>
                                                {(product.stock ?? 15) > 0 ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button 
                                                    onClick={() => toggleAvailability(product.id, product.stock ?? 15)}
                                                    title={(product.stock ?? 15) > 0 ? "Mark Out of Stock" : "Mark Available"}
                                                    className={`px-3 py-1 text-xs rounded-lg transition-colors font-semibold border ${
                                                        (product.stock ?? 15) > 0 
                                                        ? 'border-orange-200 text-orange-600 hover:bg-orange-50' 
                                                        : 'border-green-200 text-green-600 hover:bg-green-50'
                                                    }`}
                                                >
                                                    {(product.stock ?? 15) > 0 ? 'Make Unavailable' : 'Make Available'}
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="p-2 text-mushroom-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;

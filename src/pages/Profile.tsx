import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const navigate = useNavigate();
    const { user, logout, isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleSignOut = () => {
        logout();
        navigate('/');
    };

    if (!user) return <div className="min-h-screen pt-24 text-center">Loading...</div>;

    return (
        <div className="min-h-screen pt-24 px-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-mushroom-200 p-8 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-mushroom-900">My Profile</h1>
                    <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        Sign Out
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-mushroom-500">Email / Phone</label>
                        <p className="text-lg font-medium text-mushroom-900">{user?.identifier}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-mushroom-500">User ID</label>
                        <p className="text-sm font-mono text-mushroom-700 bg-mushroom-50 p-2 rounded">{user?.id}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-mushroom-200 p-8">
                <h2 className="text-2xl font-bold text-mushroom-900 mb-6">Order History</h2>
                {user?.orders && user.orders.length > 0 ? (
                    <div className="space-y-4">
                        {user.orders.map((order) => (
                            <div key={order.id} className="border border-mushroom-100 rounded-xl p-4 hover:bg-mushroom-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="font-bold text-mushroom-900">{order.id}</p>
                                        <p className="text-sm text-mushroom-500">{order.date}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                            'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-mushroom-600">{order.items.length} items</span>
                                    <span className="font-bold text-forest-700">₹{order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-mushroom-500 italic">No orders yet.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;

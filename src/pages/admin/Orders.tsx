import { useState, useEffect } from 'react';
import { Eye, Search } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { toast } from 'react-hot-toast';

const Orders = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const { data, error } = await supabase
            .from('orders')
            .select('*, profiles(email, full_name)')
            .order('created_at', { ascending: false });

        if (error) {
            toast.error('Error fetching orders');
        } else {
            setOrders(data || []);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from('orders')
            .update({ status })
            .eq('id', id);

        if (error) {
            toast.error('Error updating status');
        } else {
            toast.success('Status updated');
            fetchOrders();
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-mushroom-900 mb-8">Orders</h1>

            <div className="bg-white rounded-2xl border border-mushroom-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-mushroom-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-mushroom-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-mushroom-200 focus:outline-none focus:ring-2 focus:ring-forest-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-mushroom-50 text-mushroom-600 font-semibold text-sm">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-mushroom-100">
                            {loading ? (
                                <tr><td colSpan={6} className="px-6 py-8 text-center text-mushroom-500">Loading...</td></tr>
                            ) : orders.length === 0 ? (
                                <tr><td colSpan={6} className="px-6 py-8 text-center text-mushroom-500">No orders found</td></tr>
                            ) : (
                                orders.map((order) => (
                                    <tr key={order.id} className="hover:bg-mushroom-50/50 transition-colors">
                                        <td className="px-6 py-4 font-mono text-sm text-mushroom-600">#{order.id.slice(0, 8)}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-mushroom-900">{order.profiles?.full_name || 'Guest'}</div>
                                            <div className="text-sm text-mushroom-500">{order.profiles?.email}</div>
                                        </td>
                                        <td className="px-6 py-4 text-mushroom-600">
                                            {new Date(order.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-mushroom-900">${order.total}</td>
                                        <td className="px-6 py-4">
                                            <select
                                                value={order.status}
                                                onChange={(e) => updateStatus(order.id, e.target.value)}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold border-none focus:ring-2 focus:ring-forest-500 cursor-pointer ${order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                                        order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-yellow-100 text-yellow-700'
                                                    }`}
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="shipped">Shipped</option>
                                                <option value="delivered">Delivered</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 text-mushroom-400 hover:text-forest-600 hover:bg-forest-50 rounded-lg transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
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

export default Orders;

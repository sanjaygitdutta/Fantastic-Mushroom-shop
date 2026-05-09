'use client';
import { DollarSign, Package, ShoppingBag, Users } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className="bg-white p-6 rounded-2xl border border-mushroom-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${color}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-mushroom-500 bg-mushroom-50 px-2 py-1 rounded-lg">
                +12% this week
            </span>
        </div>
        <h3 className="text-mushroom-500 font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-mushroom-900">{value}</p>
    </div>
);

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-mushroom-900 mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Revenue"
                    value="$12,450"
                    icon={DollarSign}
                    color="bg-forest-500"
                />
                <StatCard
                    title="Total Orders"
                    value="156"
                    icon={ShoppingBag}
                    color="bg-blue-500"
                />
                <StatCard
                    title="Products"
                    value="24"
                    icon={Package}
                    color="bg-orange-500"
                />
                <StatCard
                    title="Customers"
                    value="89"
                    icon={Users}
                    color="bg-purple-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-mushroom-200 shadow-sm">
                    <h2 className="text-lg font-bold text-mushroom-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a 
                            href="./admin/prices"
                            className="flex items-center gap-3 p-4 bg-forest-900 text-white rounded-xl hover:bg-black transition-all hover:scale-105"
                        >
                            <DollarSign className="w-6 h-6" />
                            <div className="text-left">
                                <div className="font-bold">Price Manager</div>
                                <div className="text-xs text-forest-300">Update Live Grocery Prices</div>
                            </div>
                        </a>
                        <a 
                            href="./admin/products"
                            className="flex items-center gap-3 p-4 bg-orange-100 text-orange-900 rounded-xl hover:bg-orange-200 transition-all hover:scale-105 border border-orange-200"
                        >
                            <Package className="w-6 h-6" />
                            <div className="text-left">
                                <div className="font-bold">Mushroom Shop</div>
                                <div className="text-xs text-orange-600">Edit Shop Inventory</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-mushroom-200 shadow-sm">
                    <h2 className="text-lg font-bold text-mushroom-900 mb-4">Recent Activity</h2>
                    <p className="text-mushroom-500 italic">No recent activity to show.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

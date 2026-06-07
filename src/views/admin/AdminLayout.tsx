'use client';
import Link from 'next/link';

import { LayoutDashboard, Package, ShoppingCart, LogOut, Edit3, Calendar, DollarSign, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useRouter, usePathname } from 'next/navigation';
import { toast } from 'react-hot-toast';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        toast.success('Signed out');
        router.push('/login');
    };

    const navItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Overview' },
        { path: '/admin/recipes', icon: ImageIcon, label: 'Recipe Images' },
        { path: '/admin/prices', icon: DollarSign, label: 'Grocery Prices' },
        { path: '/admin/products', icon: Package, label: 'Products' },
        { path: '/admin/orders', icon: ShoppingCart, label: 'Orders' },
        { path: '/admin/messages', icon: MessageSquare, label: 'Messages' },
        { path: '/admin/manage-products', icon: Edit3, label: 'Manage Products' },
        { path: '/admin/manage-subscriptions', icon: Calendar, label: 'Manage Subscriptions' },
    ];

    return (
        <div className="min-h-screen bg-mushroom-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-mushroom-200 fixed h-full">
                <div className="p-6 border-b border-mushroom-100">
                    <span className="text-2xl font-bold text-forest-900 tracking-tight">
                        Fungi<span className="text-mushroom-500">Admin</span>
                    </span>
                </div>

                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                    ? 'bg-forest-50 text-forest-900 font-semibold'
                                    : 'text-mushroom-600 hover:bg-mushroom-50 hover:text-mushroom-900'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        );
                    })}

                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors mt-8"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;

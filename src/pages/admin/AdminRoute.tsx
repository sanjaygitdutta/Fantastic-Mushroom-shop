import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AdminRoute = () => {
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        // Independent admin check
        const hasAdminAccess = localStorage.getItem('mushroom_admin') === 'true';
        setIsAdmin(hasAdminAccess);
    }, []);

    if (isAdmin === null) return <div className="p-8 text-center text-white bg-gray-900 min-h-screen">Loading secure portal...</div>;

    return isAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminRoute;

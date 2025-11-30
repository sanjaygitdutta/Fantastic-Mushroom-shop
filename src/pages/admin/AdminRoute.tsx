import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

const AdminRoute = () => {
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAdmin = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            // For now, allow any logged-in user or check specific email
            // In production, check user role in 'profiles' table
            if (user) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        };
        checkAdmin();
    }, []);

    if (isAdmin === null) return <div className="p-8 text-center">Loading...</div>;

    return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;

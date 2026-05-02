'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export interface UserAddress {
    building: string;
    state: string;
    pinCode: string;
}

export interface UserProfile {
    name: string;
    age: string;
    email?: string;
    phone?: string;
    address: UserAddress;
    dietaryPreference?: string;
    familySize?: number;
    avatarUrl?: string;
}

export interface Order {
    id: string;
    date: string;
    items: any[];
    total: number;
    status: 'Processing' | 'Shipped' | 'Delivered';
}

export interface User {
    id: string;
    identifier: string; // email or phone
    profile?: UserProfile;
    orders: Order[];
}

interface AuthContextType {
    user: User | null;
    login: (identifier: string, password: string) => Promise<void>;
    signup: (identifier: string, password: string) => Promise<void>;
    logout: () => void;
    updateProfile: (profile: UserProfile) => void;
    addOrder: (order: Order) => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {},
    signup: async () => {},
    logout: () => {},
    updateProfile: () => {},
    addOrder: () => {},
    isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('mushroom_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (identifier: string, _password: string) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockUser: User = {
            id: 'user_' + Date.now(),
            identifier,
            orders: []
        };

        const storedProfile = localStorage.getItem(`profile_${identifier}`);
        if (storedProfile) {
            mockUser.profile = JSON.parse(storedProfile);
        }

        // Load orders if any (mock persistence)
        const storedOrders = localStorage.getItem(`orders_${identifier}`);
        if (storedOrders) {
            mockUser.orders = JSON.parse(storedOrders);
        }

        setUser(mockUser);
        localStorage.setItem('mushroom_user', JSON.stringify(mockUser));
        toast.success('Welcome back!');
    };

    const signup = async (identifier: string, _password: string) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newUser: User = {
            id: 'user_' + Date.now(),
            identifier,
            orders: []
        };

        setUser(newUser);
        localStorage.setItem('mushroom_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('mushroom_user');
        toast.success('Signed out successfully');
    };

    const updateProfile = (profile: UserProfile) => {
        if (!user) return;

        const updatedUser = { ...user, profile };
        setUser(updatedUser);
        localStorage.setItem('mushroom_user', JSON.stringify(updatedUser));
        localStorage.setItem(`profile_${user.identifier}`, JSON.stringify(profile));

        toast.success('Profile updated!');
    };

    const addOrder = (order: Order) => {
        if (!user) return;

        const updatedOrders = [order, ...user.orders];
        const updatedUser = { ...user, orders: updatedOrders };

        setUser(updatedUser);
        localStorage.setItem('mushroom_user', JSON.stringify(updatedUser));
        localStorage.setItem(`orders_${user.identifier}`, JSON.stringify(updatedOrders));
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, updateProfile, addOrder, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

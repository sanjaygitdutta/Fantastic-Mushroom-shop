'use client';
import { useState } from 'react';
import SubscriptionEditor from '../../components/SubscriptionEditor';
import { Save, CheckCircle } from 'lucide-react';

interface SubscriptionPlan {
    id: string;
    name: string;
    price: number;
    image?: string;
    features: string[];
    color?: string; // Color theme for each plan
}

const ManageSubscriptions = () => {
    const [plans, setPlans] = useState<SubscriptionPlan[]>([
        {
            id: 'starter',
            name: 'Starter Box',
            price: 2499.00,
            color: '#10B981', // Emerald Green
            image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80',
            features: [
                '2 varieties of fresh mushrooms',
                '1 dried mushroom pack',
                'Recipe card',
                'Free shipping',
                'Delivery: Weekly'
            ]
        },
        {
            id: 'family',
            name: 'Family Feast',
            price: 4199.00,
            color: '#F59E0B', // Amber
            image: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=800&q=80',
            features: [
                '4 varieties of fresh mushrooms',
                '2 dried mushroom packs',
                '1 gourmet sauce/pickle',
                'Recipe booklet',
                'Free shipping',
                'Delivery: Bi-weekly'
            ]
        },
        {
            id: 'chef',
            name: 'Chef\'s Choice',
            price: 7499.00,
            color: '#A855F7', // Purple
            image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=800&q=80',
            features: [
                'Premium selection (Truffles/Morels)',
                'Exotic dried mushrooms',
                'Truffle oil & seasonings',
                'Exclusive chef recipes',
                'Priority shipping',
                'Delivery: Weekly'
            ]
        },
        {
            id: 'seasonal',
            name: 'Seasonal Special',
            price: 3999.00,
            color: '#EC4899', // Pink
            image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=800&q=80',
            features: [
                'Seasonal mushroom varieties',
                'Fresh harvest every season',
                'Seasonal recipe collection',
                'Farm-to-table guarantee',
                'Free shipping',
                'Delivery: Every other day'
            ]
        },
        {
            id: 'yearly',
            name: 'Yearly Premium',
            price: 49999.00,
            color: '#3B82F6', // Blue
            image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
            features: [
                'All mushroom varieties year-round',
                '12 months premium access',
                'Exclusive member events',
                'Free cooking workshops',
                'Priority customer support',
                'Delivery: Every other day',
                'Best value - Save 25%'
            ]
        }
    ]);

    const [hasChanges, setHasChanges] = useState(false);

    const handlePlanUpdate = (index: number, updatedPlan: SubscriptionPlan) => {
        const newPlans = [...plans];
        newPlans[index] = updatedPlan;
        setPlans(newPlans);
        setHasChanges(true);
    };

    const handleSaveAll = () => {
        console.log('Saving all subscription plans:', plans);
        // Here you would save to Supabase/database
        alert(`✅ All ${plans.length} subscription plans updated successfully!`);
        setHasChanges(false);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-forest-50 to-mushroom-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Manage Subscription Plans 📦
                    </h1>
                    <p className="text-gray-600">
                        Edit plan names, prices, images, and features
                    </p>
                </div>

                {/* Save Button (Sticky) */}
                {hasChanges && (
                    <div className="fixed bottom-6 right-6 z-50">
                        <button
                            onClick={handleSaveAll}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-lg transition-all hover:scale-105"
                        >
                            <Save className="w-6 h-6" />
                            Save All Changes
                        </button>
                    </div>
                )}

                {/* Plans Grid - 5 Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
                    {plans.map((plan, index) => (
                        <SubscriptionEditor
                            key={plan.id}
                            plan={plan}
                            onUpdate={(updatedPlan) => handlePlanUpdate(index, updatedPlan)}
                        />
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        Subscription Plans Summary
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-forest-50 rounded-lg">
                            <div className="text-3xl font-bold text-forest-700">{plans.length}</div>
                            <div className="text-sm text-gray-600">Total Plans</div>
                        </div>
                        <div className="text-center p-4 bg-mushroom-50 rounded-lg">
                            <div className="text-3xl font-bold text-mushroom-600">
                                ₹{Math.min(...plans.map(p => p.price)).toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600">Starting Price</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-3xl font-bold text-purple-600">
                                ₹{Math.max(...plans.map(p => p.price)).toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-600">Premium Price</div>
                        </div>
                    </div>

                    {/* Feature Count */}
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {plans.map(plan => (
                            <div
                                key={plan.id}
                                className="text-center p-3 rounded-lg shadow-md border-2"
                                style={{
                                    backgroundColor: `${plan.color}15`,
                                    borderColor: plan.color
                                }}
                            >
                                <div className="font-bold text-gray-900 text-sm">{plan.name}</div>
                                <div className="text-xs text-gray-600 mt-1">{plan.features.length} features</div>
                                <div
                                    className="text-xs font-semibold mt-1"
                                    style={{ color: plan.color }}
                                >
                                    ₹{plan.price.toFixed(0)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                    <h4 className="font-bold text-blue-900 mb-3">💡 Quick Tips:</h4>
                    <ul className="space-y-2 text-blue-800 text-sm">
                        <li>✓ <strong>Change Image:</strong> Hover over plan image → Click "Change Image"</li>
                        <li>✓ <strong>Edit Name:</strong> Click ✏️ icon next to plan name</li>
                        <li>✓ <strong>Edit Price:</strong> Click ✏️ icon next to price</li>
                        <li>✓ <strong>Add Feature:</strong> Click + button in features section</li>
                        <li>✓ <strong>Remove Feature:</strong> Hover over feature → Click trash icon</li>
                        <li>✓ <strong>Save:</strong> Click green "Save All Changes" button when done</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageSubscriptions;

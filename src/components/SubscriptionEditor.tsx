'use client';
import { useState } from 'react';
import { Upload, X, Check, Edit2, Save, Plus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubscriptionPlan {
    id: string;
    name: string;
    price: number;
    image?: string;
    features: string[];
}

interface SubscriptionEditorProps {
    plan: SubscriptionPlan;
    onUpdate?: (updatedPlan: SubscriptionPlan) => void;
}

const SubscriptionEditor = ({ plan, onUpdate }: SubscriptionEditorProps) => {
    const [isEditingPrice, setIsEditingPrice] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [newPrice, setNewPrice] = useState(plan.price.toString());
    const [newName, setNewName] = useState(plan.name);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [features, setFeatures] = useState<string[]>(plan.features);
    const [newFeature, setNewFeature] = useState('');
    const [isAddingFeature, setIsAddingFeature] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockUrl = URL.createObjectURL(file);
        setUploadedImage(mockUrl);
        updatePlan({ image: mockUrl });
        setIsUploading(false);
    };

    const handlePriceSave = () => {
        const price = parseFloat(newPrice);
        if (!isNaN(price) && price > 0) {
            updatePlan({ price });
            setIsEditingPrice(false);
        }
    };

    const handleNameSave = () => {
        if (newName.trim()) {
            updatePlan({ name: newName.trim() });
            setIsEditingName(false);
        }
    };

    const handleAddFeature = () => {
        if (newFeature.trim()) {
            const updatedFeatures = [...features, newFeature.trim()];
            setFeatures(updatedFeatures);
            updatePlan({ features: updatedFeatures });
            setNewFeature('');
            setIsAddingFeature(false);
        }
    };

    const handleRemoveFeature = (index: number) => {
        const updatedFeatures = features.filter((_, i) => i !== index);
        setFeatures(updatedFeatures);
        updatePlan({ features: updatedFeatures });
    };

    const updatePlan = (updates: Partial<SubscriptionPlan>) => {
        const updatedPlan = {
            ...plan,
            name: newName,
            price: parseFloat(newPrice),
            image: uploadedImage || plan.image,
            features,
            ...updates
        };
        onUpdate?.(updatedPlan);
    };

    const displayImage = uploadedImage || plan.image || 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden"
        >
            {/* Plan Image */}
            <div className="relative group h-48 bg-linear-to-br from-forest-100 to-mushroom-100">
                <img
                    src={displayImage}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label
                        htmlFor={`upload-sub-${plan.id}`}
                        className="cursor-pointer bg-white/90 hover:bg-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Upload className="w-4 h-4 text-forest-600" />
                        <span className="text-sm font-medium text-gray-900">
                            {isUploading ? 'Uploading...' : 'Change Image'}
                        </span>
                    </label>
                    <input
                        id={`upload-sub-${plan.id}`}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                    />
                </div>

                {uploadedImage && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
                        <Check className="w-4 h-4" />
                    </div>
                )}
            </div>

            <div className="p-6">
                {/* Plan Name */}
                {isEditingName ? (
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="flex-1 px-3 py-2 text-xl font-bold border-2 border-forest-400 rounded-lg focus:outline-none focus:border-forest-600"
                            autoFocus
                        />
                        <button
                            onClick={handleNameSave}
                            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                        >
                            <Save className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => {
                                setIsEditingName(false);
                                setNewName(plan.name);
                            }}
                            className="p-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{newName}</h3>
                        <button
                            onClick={() => setIsEditingName(true)}
                            className="p-2 bg-mushroom-100 hover:bg-mushroom-200 text-mushroom-700 rounded-lg"
                        >
                            <Edit2 className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Price Editor */}
                {isEditingPrice ? (
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-2xl font-bold text-gray-700">₹</span>
                        <input
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            className="flex-1 px-4 py-2 text-xl font-bold border-2 border-forest-400 rounded-lg focus:outline-none focus:border-forest-600"
                            step="0.01"
                            min="0"
                            autoFocus
                        />
                        <span className="text-gray-600">/ month</span>
                        <button
                            onClick={handlePriceSave}
                            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                        >
                            <Save className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => {
                                setIsEditingPrice(false);
                                setNewPrice(plan.price.toString());
                            }}
                            className="p-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-baseline justify-between mb-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-forest-900">₹{parseFloat(newPrice).toFixed(2)}</span>
                            <span className="text-gray-500">/ month</span>
                        </div>
                        <button
                            onClick={() => setIsEditingPrice(true)}
                            className="p-2 bg-mushroom-100 hover:bg-mushroom-200 text-mushroom-700 rounded-lg"
                        >
                            <Edit2 className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Features List */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h4 className="font-bold text-gray-700">Plan Features:</h4>
                        <button
                            onClick={() => setIsAddingFeature(true)}
                            className="p-1.5 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group"
                        >
                            <span className="text-sm text-gray-700">✓ {feature}</span>
                            <button
                                onClick={() => handleRemoveFeature(index)}
                                className="opacity-0 group-hover:opacity-100 p-1 bg-red-100 hover:bg-red-200 text-red-600 rounded transition-opacity"
                            >
                                <Trash2 className="w-3 h-3" />
                            </button>
                        </div>
                    ))}

                    {isAddingFeature && (
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newFeature}
                                onChange={(e) => setNewFeature(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleAddFeature()}
                                placeholder="New feature..."
                                className="flex-1 px-3 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                                autoFocus
                            />
                            <button
                                onClick={handleAddFeature}
                                className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                            >
                                Add
                            </button>
                            <button
                                onClick={() => {
                                    setIsAddingFeature(false);
                                    setNewFeature('');
                                }}
                                className="px-3 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>

                {/* Status Indicators */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {uploadedImage && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Image Updated
                        </span>
                    )}
                    {parseFloat(newPrice) !== plan.price && !isEditingPrice && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                            Price Changed
                        </span>
                    )}
                    {newName !== plan.name && !isEditingName && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                            Name Changed
                        </span>
                    )}
                    {features.length !== plan.features.length && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                            Features Modified
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SubscriptionEditor;

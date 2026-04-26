'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface WeightSelectorProps {
    product: Product;
    selectedWeight: number;
    customWeight: number | null;
    onWeightChange: (weight: number, isCustom: boolean) => void;
}

export default function WeightSelector({
    product,
    selectedWeight,
    customWeight,
    onWeightChange
}: WeightSelectorProps) {
    const [isCustom, setIsCustom] = useState(false);
    const [customInput, setCustomInput] = useState('');

    if (!product.weightOptions || !product.unit || product.unit !== 'grams') {
        return null; // Only show for weight-based products
    }

    const calculatePrice = (weight: number) => {
        return ((product.price * weight) / 1000).toFixed(2);
    };

    const handlePresetSelect = (weight: number) => {
        setIsCustom(false);
        setCustomInput('');
        onWeightChange(weight, false);
    };

    const handleCustomInput = (value: string) => {
        setIsCustom(true);
        setCustomInput(value);
        const weight = parseInt(value);
        if (weight >= 100 && weight <= 10000) {
            onWeightChange(weight, true);
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Weight
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {product.weightOptions.map((weight) => (
                        <motion.button
                            key={weight}
                            type="button"
                            onClick={() => handlePresetSelect(weight)}
                            className={`px-4 py-3 rounded-lg border-2 transition-all ${selectedWeight === weight && !isCustom
                                ? 'border-mushroom-600 bg-mushroom-50 text-mushroom-700'
                                : 'border-gray-200 hover:border-mushroom-300'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="text-sm font-semibold">{weight}g</div>
                            <div className="text-xs text-gray-600">
                                ₹{calculatePrice(weight)}
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {product.allowCustomWeight && (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Custom Weight (100g - 10kg)
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            min="100"
                            max="10000"
                            step="50"
                            value={customInput}
                            onChange={(e) => handleCustomInput(e.target.value)}
                            onFocus={() => setIsCustom(true)}
                            placeholder="Enter grams"
                            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-mushroom-500 focus:outline-none"
                        />
                        <div className="flex items-center px-4 py-2 bg-gray-50 rounded-lg border-2 border-gray-200 min-w-[100px]">
                            <span className="text-sm font-semibold text-gray-700">
                                {customInput && parseInt(customInput) >= 100 && parseInt(customInput) <= 10000
                                    ? `₹${calculatePrice(parseInt(customInput))}`
                                    : '₹0.00'}
                            </span>
                        </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                        Enter your preferred quantity in grams
                    </p>
                </div>
            )}

            <div className="bg-mushroom-50 border border-mushroom-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Selected:</span>
                    <span className="text-lg font-bold text-mushroom-700">
                        {isCustom && customWeight ? customWeight : selectedWeight}g = ₹
                        {calculatePrice(isCustom && customWeight ? customWeight : selectedWeight)}
                    </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    Base price: ₹{product.price}/kg
                </p>
            </div>
        </div>
    );
}

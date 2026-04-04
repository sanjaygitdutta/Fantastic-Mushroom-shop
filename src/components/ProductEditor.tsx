import { useState } from 'react';
import { Upload, X, Check, Edit2, Save } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductEditorProps {
    productId: string;
    productName: string;
    currentImage: string;
    currentPrice: number;
    currentWeightOptions?: number[];
    unit?: string;
    onImageUpdate?: (url: string) => void;
    onPriceUpdate?: (price: number) => void;
}

const ProductEditor = ({
    productId,
    productName,
    currentImage,
    currentPrice,
    currentWeightOptions,
    unit,
    onImageUpdate,
    onPriceUpdate
}: ProductEditorProps) => {
    const [isEditingPrice, setIsEditingPrice] = useState(false);
    const [newPrice, setNewPrice] = useState(currentPrice.toString());
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [imageUrlInput, setImageUrlInput] = useState(currentImage);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);

        // Compress image using canvas before storing in localStorage
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = new Image();
            img.onload = () => {
                // Resize to max 800px width while maintaining aspect ratio
                const MAX_WIDTH = 800;
                const scale = Math.min(1, MAX_WIDTH / img.width);
                const canvas = document.createElement('canvas');
                canvas.width = img.width * scale;
                canvas.height = img.height * scale;

                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Compress to JPEG at 75% quality (~5-10x smaller than original)
                const compressed = canvas.toDataURL('image/jpeg', 0.75);
                setUploadedImage(compressed);
                setImageUrlInput('Custom Upload');
                onImageUpdate?.(compressed);
                setIsUploading(false);
            };
            img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
    };

    const handlePriceSave = () => {
        const price = parseFloat(newPrice);
        if (!isNaN(price) && price > 0) {
            onPriceUpdate?.(price);
            setIsEditingPrice(false);
        }
    };

    const handleImageSave = () => {
        setUploadedImage(imageUrlInput);
        onImageUpdate?.(imageUrlInput);
    };

    const displayImage = uploadedImage || currentImage;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-md border-2 border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
        >
            {/* Product Image */}
            <div className="relative group">
                <img
                    src={displayImage}
                    alt={productName}
                    className="w-full h-48 object-cover"
                />

                {/* Upload Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label
                        htmlFor={`upload-${productId}`}
                        className="cursor-pointer bg-white/90 hover:bg-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Upload className="w-4 h-4 text-mushroom-600" />
                        <span className="text-sm font-medium text-gray-900">
                            {isUploading ? 'Uploading...' : 'Change Image'}
                        </span>
                    </label>
                    <input
                        id={`upload-${productId}`}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                    />
                </div>

                {uploadedImage && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                        <Check className="w-4 h-4" />
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-2">
                    {productName}
                </h3>

                {currentWeightOptions && currentWeightOptions.length > 0 && (
                    <div className="text-xs text-gray-500 mb-3 font-semibold bg-gray-100 px-2 py-1 rounded inline-block shadow-sm">
                        Weights: {currentWeightOptions.join(', ')} {unit || 'grams'}
                    </div>
                )}

                {/* Text URL Editor */}
                <div className="mb-3 space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Image File Name (e.g. /my-image.jpg)</label>
                    <div className="flex items-center gap-1">
                        <input
                            type="text"
                            value={imageUrlInput}
                            onChange={(e) => setImageUrlInput(e.target.value)}
                            className="flex-1 px-2 py-1.5 text-xs rounded border border-gray-300 focus:outline-none focus:border-forest-500 bg-gray-50"
                        />
                        <button 
                            onClick={handleImageSave}
                            className="bg-forest-600 hover:bg-forest-700 text-white p-1.5 rounded disabled:opacity-50"
                            disabled={imageUrlInput === (uploadedImage || currentImage)}
                        >
                            <Save className="w-3 h-3" />
                        </button>
                    </div>
                </div>

                {/* Price Editor */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                    {isEditingPrice ? (
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-700">₹</span>
                            <input
                                type="number"
                                value={newPrice}
                                onChange={(e) => setNewPrice(e.target.value)}
                                className="flex-1 px-3 py-2 border-2 border-forest-400 rounded-lg focus:outline-none focus:border-forest-600"
                                step="0.01"
                                min="0"
                                autoFocus
                            />
                            <button
                                onClick={handlePriceSave}
                                className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                            >
                                <Save className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => {
                                    setIsEditingPrice(false);
                                    setNewPrice(currentPrice.toString());
                                }}
                                className="p-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-forest-900">
                                ₹{parseFloat(newPrice).toFixed(2)}
                            </span>
                            <button
                                onClick={() => setIsEditingPrice(true)}
                                className="p-2 bg-mushroom-100 hover:bg-mushroom-200 text-mushroom-700 rounded-lg transition-colors"
                            >
                                <Edit2 className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Status Indicators */}
                <div className="mt-3 flex gap-2 text-xs">
                    {uploadedImage && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Image Updated
                        </span>
                    )}
                    {parseFloat(newPrice) !== currentPrice && !isEditingPrice && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                            Price Changed
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProductEditor;

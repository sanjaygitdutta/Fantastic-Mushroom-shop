'use client';
import { useState } from 'react';
import { Upload, X, Image as ImageIcon, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaUploadProps {
    productId: string;
    onUploadComplete?: (url: string) => void;
}

const MediaUpload = ({ productId, onUploadComplete }: MediaUploadProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            handleFiles(files);
        }
    };

    const handleFiles = async (files: File[]) => {
        setIsUploading(true);

        // Simulate upload - Replace with actual Supabase upload
        for (const file of files) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockUrl = URL.createObjectURL(file);
            setUploadedFiles(prev => [...prev, mockUrl]);
            onUploadComplete?.(mockUrl);
        }

        setIsUploading(false);
    };

    const removeFile = (url: string) => {
        setUploadedFiles(prev => prev.filter(f => f !== url));
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5 text-mushroom-500" />
                Upload Media
            </h3>

            {/* Upload Area */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${isDragging
                    ? 'border-mushroom-500 bg-mushroom-50'
                    : 'border-gray-300 hover:border-mushroom-400'
                    }`}
            >
                <input
                    type="file"
                    id={`file-upload-${productId}`}
                    className="hidden"
                    accept="image/*,video/*"
                    multiple
                    onChange={handleFileInput}
                />

                <label
                    htmlFor={`file-upload-${productId}`}
                    className="cursor-pointer flex flex-col items-center"
                >
                    <div className="w-16 h-16 bg-gradient-to-br from-mushroom-100 to-forest-100 rounded-full flex items-center justify-center mb-4">
                        <Upload className="w-8 h-8 text-mushroom-600" />
                    </div>

                    <p className="text-gray-700 font-semibold mb-2">
                        Drop files here or click to browse
                    </p>
                    <p className="text-sm text-gray-500">
                        Supports: Images & Videos
                    </p>
                </label>
            </div>

            {/* Uploading Status */}
            {isUploading && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent" />
                    <span className="text-blue-700 font-medium">Uploading...</span>
                </div>
            )}

            {/* Uploaded Files */}
            <AnimatePresence>
                {uploadedFiles.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6"
                    >
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            Uploaded Media ({uploadedFiles.length})
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {uploadedFiles.map((url, index) => (
                                <motion.div
                                    key={url}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="relative group"
                                >
                                    <img
                                        src={url}
                                        alt={`Upload ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                                    />
                                    <button
                                        onClick={() => removeFile(url)}
                                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tips */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 flex items-start gap-2">
                    <ImageIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                        <strong>Tip:</strong> Upload high-quality images (min 800x800px) and short videos (&lt;30s) for best results.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default MediaUpload;

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, X, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { toast } from 'react-hot-toast';

interface VoiceAssistantProps {
    onClose: () => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ onClose }) => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [response, setResponse] = useState('Hi! I\'m Shroom, your AI mushroom shopping assistant. Try saying "show me fresh mushrooms" or "add shiitake to cart".');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const recognitionRef = useRef<any>(null);
    const navigate = useNavigate();
    const { addToCart, items } = useCart();

    useEffect(() => {
        // Initialize Web Speech API
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setTranscript(transcript);
                processCommand(transcript);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
                speak('Sorry, I didn\'t catch that. Please try again.');
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
            setResponse(text);
        }
    };

    const processCommand = (command: string) => {
        const lowerCommand = command.toLowerCase();

        // Navigate commands
        if (lowerCommand.includes('go to') || lowerCommand.includes('show me') || lowerCommand.includes('navigate to')) {
            if (lowerCommand.includes('home')) {
                navigate('/');
                speak('Taking you to the home page.');
            } else if (lowerCommand.includes('cart') || lowerCommand.includes('shopping cart')) {
                navigate('/');
                speak(`You have ${items.length} items in your cart.`);
            } else if (lowerCommand.includes('checkout')) {
                if (items.length === 0) {
                    speak('Your cart is empty. Please add some products first.');
                } else {
                    navigate('/checkout');
                    speak('Taking you to checkout.');
                }
            } else if (lowerCommand.includes('subscription')) {
                navigate('/subscription');
                speak('Showing subscription plans.');
            } else if (lowerCommand.includes('fresh mushroom')) {
                navigate('/category/fresh');
                speak('Showing fresh mushrooms.');
            } else if (lowerCommand.includes('dried mushroom')) {
                navigate('/category/dried');
                speak('Showing dried mushrooms.');
            } else if (lowerCommand.includes('recipe')) {
                navigate('/recipes');
                speak('Showing recipes.');
            }
            return;
        }

        // Add to cart commands
        if (lowerCommand.includes('add') && lowerCommand.includes('cart')) {
            const foundProduct = products.find(p =>
                lowerCommand.includes(p.name.toLowerCase())
            );

            if (foundProduct) {
                addToCart(foundProduct);
                speak(`Added ${foundProduct.name} to your cart.`);
                toast.success(`${foundProduct.name} added to cart!`, { icon: '🛒' });
            } else {
                speak('Sorry, I couldn\'t find that product. Try saying the full product name.');
            }
            return;
        }

        // Product search
        if (lowerCommand.includes('find') || lowerCommand.includes('search for')) {
            const matchingProducts = products.filter(p =>
                lowerCommand.includes(p.name.toLowerCase())
            );

            if (matchingProducts.length > 0) {
                const productList = matchingProducts.map(p => p.name).join(', ');
                speak(`I found these products: ${productList}. Would you like to add any to cart?`);
            } else {
                speak('No products found. Try describing what you\'re looking for.');
            }
            return;
        }

        // List products
        if (lowerCommand.includes('what') && (lowerCommand.includes('available') || lowerCommand.includes('have'))) {
            const categories = ['fresh mushrooms', 'dried mushrooms', 'snacks', 'spices', 'subscriptions'];
            speak(`We have ${categories.join(', ')}. What are you interested in?`);
            return;
        }

        // Cart info
        if (lowerCommand.includes('cart') || lowerCommand.includes('my items')) {
            if (items.length === 0) {
                speak('Your cart is empty.');
            } else {
                const itemNames = items.map(item => item.name).join(', ');
                speak(`You have ${items.length} items in your cart: ${itemNames}`);
            }
            return;
        }

        // Help
        if (lowerCommand.includes('help') || lowerCommand.includes('what can you do')) {
            speak('I can help you browse products, add items to cart, and checkout. Try saying "show me fresh mushrooms", "add shiitake to cart", or "go to checkout".');
            return;
        }

        // Default fallback
        speak('I didn\'t understand that. Try saying "help" to see what I can do.');
    };

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            try {
                recognitionRef.current?.start();
                setIsListening(true);
                setTranscript('');
            } catch (error) {
                console.error('Error starting recognition:', error);
                speak('Sorry, voice recognition is not available in your browser.');
            }
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-br from-forest-50 to-mushroom-50 rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative border-2 border-forest-200"
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/50 transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <Package className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-forest-900 mb-2">
                            Shroom 🍄
                        </h2>
                        <p className="text-gray-600">
                            Your AI Shopping Assistant
                        </p>
                    </div>

                    {/* Response Display */}
                    <div className="bg-white rounded-2xl p-6 mb-6 min-h-[120px] shadow-inner">
                        <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-full ${isSpeaking ? 'bg-green-100' : 'bg-gray-100'}`}>
                                <Volume2 className={`w-5 h-5 ${isSpeaking ? 'text-green-600 animate-pulse' : 'text-gray-400'}`} />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-800 leading-relaxed">{response}</p>
                            </div>
                        </div>
                    </div>

                    {/* Transcript */}
                    {transcript && (
                        <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
                            <p className="text-sm text-blue-600 font-medium mb-1">You said:</p>
                            <p className="text-gray-800 italic">"{transcript}"</p>
                        </div>
                    )}

                    {/* Microphone Button */}
                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={toggleListening}
                            className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all transform hover:scale-105 relative ${isListening
                                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {isListening ? (
                                <MicOff className="w-12 h-12 text-white" />
                            ) : (
                                <Mic className="w-12 h-12 text-white" />
                            )}
                            {!isListening && (
                                <span className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                            )}
                        </button>
                        <p className="text-sm font-medium text-gray-700">
                            {isListening ? 'Listening... Speak now' : 'Tap to speak'}
                        </p>
                    </div>

                    {/* Quick Commands */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Try saying:</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="text-xs bg-white rounded-lg p-2 text-gray-600">
                                "Show me fresh mushrooms"
                            </div>
                            <div className="text-xs bg-white rounded-lg p-2 text-gray-600">
                                "Add shiitake to cart"
                            </div>
                            <div className="text-xs bg-white rounded-lg p-2 text-gray-600">
                                "Go to checkout"
                            </div>
                            <div className="text-xs bg-white rounded-lg p-2 text-gray-600">
                                "What's in my cart?"
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default VoiceAssistant;

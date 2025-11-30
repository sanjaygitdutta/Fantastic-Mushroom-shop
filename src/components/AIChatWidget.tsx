import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hi! I\'m your Fantastic Mushroom assistant. How can I help you today?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const quickReplies = [
        'Product recommendations',
        'Shipping info',
        'Nutritional benefits',
        'Recipe ideas'
    ];

    const handleSend = () => {
        if (!inputText.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');

        // Simulate bot response
        setIsTyping(true);
        setTimeout(() => {
            const botResponse = generateBotResponse(inputText);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            }]);
            setIsTyping(false);
        }, 1000);
    };

    const generateBotResponse = (userInput: string): string => {
        const input = userInput.toLowerCase();

        if (input.includes('shipping') || input.includes('delivery')) {
            return 'We offer free shipping on orders over $50! Standard delivery takes 3-5 business days. Express shipping is available for $9.99.';
        }
        if (input.includes('recipe') || input.includes('cook')) {
            return 'Great question! Check out our Recipes section for delicious mushroom dishes. Some popular ones include  Truffle Risotto, Mushroom Wellington, and Shiitake Stir-fry!';
        }
        if (input.includes('nutrition') || input.includes('health')) {
            return 'Mushrooms are nutritional powerhouses! They\'re rich in B-vitamins, antioxidants, and fiber. Each variety has unique benefits - check individual product pages for specific details.';
        }
        if (input.includes('recommend') || input.includes('suggest')) {
            return 'I\'d recommend starting with our Organic Button Mushrooms for versatility, or Fresh Shiitake for rich umami flavor. What type of dish are you planning to make?';
        }
        if (input.includes('weight') || input.includes('quantity')) {
            return 'You can customize weight for all our fresh and dried mushrooms! Choose from 250g, 500g, 750g, 1kg, or enter a custom amount. Prices adjust automatically.';
        }

        return 'Thanks for your question! Our team will get back to you shortly. Is there anything else I can help you with? Try asking about shipping, recipes, or nutritional benefits!';
    };

    const handleQuickReply = (reply: string) => {
        setInputText(reply);
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-forest-600 hover:bg-forest-700 text-white p-4 rounded-full shadow-2xl transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                        1
                    </span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-mushroom-200 overflow-hidden flex flex-col"
                        style={{ height: '500px', maxHeight: '80vh' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-forest-600 to-forest-700 text-white p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold">Mushroom Assistant</h3>
                                <p className="text-xs text-forest-100">Always here to help</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-mushroom-50/30">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${message.sender === 'user'
                                            ? 'bg-forest-600 text-white rounded-br-none'
                                            : 'bg-white border border-mushroom-200 text-gray-800 rounded-bl-none'
                                            }`}
                                    >
                                        {message.text}
                                        <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-forest-100' : 'text-gray-400'}`}>
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-mushroom-200 px-4 py-2 rounded-2xl rounded-bl-none">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Replies */}
                        {messages.length <= 2 && (
                            <div className="px-4 py-2 border-t border-mushroom-100 bg-white">
                                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickReplies.map((reply) => (
                                        <button
                                            key={reply}
                                            onClick={() => handleQuickReply(reply)}
                                            className="text-xs px-3 py-1 bg-mushroom-100 hover:bg-mushroom-200 text-gray-700 rounded-full transition-colors"
                                        >
                                            {reply}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-mushroom-100 bg-white">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 border-2 border-mushroom-200 rounded-full focus:border-forest-500 focus:outline-none"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputText.trim()}
                                    className="p-2 bg-forest-600 hover:bg-forest-700 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatWidget;

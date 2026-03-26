import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Message = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  actionLink?: {
    text: string;
    url: string;
  };
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm your Fantastic Food Assistant 🌱. What are you looking to buy today, or what recipe are you planning?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateResponse = (userText: string) => {
    const text = userText.toLowerCase();
    
    setTimeout(() => {
      let response: Message = { id: Date.now().toString(), role: 'assistant', content: '' };

      if (text.includes('mushroom')) {
        response.content = "We have the best organic mushrooms in town! We grow them locally on our own farm. Would you like to check out our fresh stock?";
        response.actionLink = { text: "Shop Fresh Mushrooms", url: "/mushroom-shop" };
      } else if (text.includes('recipe') || text.includes('cook')) {
        response.content = "I love cooking! I can suggest some great recipes. Do you want to see our curated list of mushroom recipes?";
        response.actionLink = { text: "View Recipes", url: "/recipes" };
      } else if (text.includes('cheap') || text.includes('compare') || text.includes('price')) {
        response.content = "You're in the right place. I can compare prices across Blinkit, Zepto, Swiggy, and BigBasket. What specific item should I search for?";
      } else {
        // Generic food catch-all
        const searchWord = text.split(' ').find(w => w.length > 2 && !['the','and','for','buy','some','need'].includes(w)) || text;
        response.content = `I can help you find the best deals on ${searchWord}! Let's compare prices across all platforms so you don't overpay.`;
        response.actionLink = { text: `Compare prices for "${searchWord}"`, url: `/compare?q=${encodeURIComponent(searchWord)}` };
      }

      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);
    
    simulateResponse(userMessage);
  };

  const handleActionClick = (url: string) => {
    setIsOpen(false);
    navigate(url);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-16 right-0 w-[350px] sm:w-[380px] h-[500px] bg-cream-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-forest-200"
            >
              {/* Header */}
              <div className="bg-forest-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-moss-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide">Fantastic Assistant</h3>
                    <p className="text-[10px] text-forest-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-moss-400 rounded-full animate-pulse"></span> Online
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-forest-800 rounded-lg transition-colors text-forest-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === 'user' 
                        ? 'bg-forest-600 text-white rounded-br-sm' 
                        : 'bg-white text-forest-900 border border-forest-100 rounded-bl-sm shadow-sm'
                    }`}>
                      <p className="leading-relaxed">{msg.content}</p>
                      
                      {msg.actionLink && (
                        <button 
                          onClick={() => handleActionClick(msg.actionLink!.url)}
                          className="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg transition-colors w-full justify-center"
                        >
                          <Sparkles className="w-3 h-3" />
                          {msg.actionLink.text}
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-forest-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-forest-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-forest-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-forest-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 bg-white border-t border-forest-100">
                <div className="flex items-center gap-2 bg-cream-100 rounded-full pl-4 pr-1.5 py-1.5 border border-forest-100 focus-within:border-forest-300 transition-colors">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent border-none outline-none text-sm text-forest-900 placeholder-forest-400"
                  />
                  <button 
                    type="submit"
                    disabled={!input.trim()}
                    className={`p-2 rounded-full transition-colors ${
                      input.trim() 
                        ? 'bg-forest-600 text-white hover:bg-forest-700' 
                        : 'bg-forest-100 text-forest-300'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-forest-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-forest-700 transition-all border-4 border-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
};

export default AIAssistant;

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Mic, MicOff, Volume2 } from 'lucide-react';

type Message = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
};

// Declare SpeechRecognition interfaces for TypeScript
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Chef Aika. How can I help you cook or shop today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Voice Input State
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  
  // Voice Output State
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Setup Speech Recognition on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const _recognition = new SpeechRecognition();
        _recognition.continuous = false;
        _recognition.interimResults = false;
        _recognition.lang = 'en-US';

        _recognition.onstart = () => {
          setIsListening(true);
        };

        _recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          // Auto-send when voice is recognized
          handleSendVoice(transcript);
        };

        _recognition.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setIsListening(false);
        };

        _recognition.onend = () => {
          setIsListening(false);
        };

        setRecognition(_recognition);
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const speakText = (text: string) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    // Slightly faster and higher pitched for a more "virtual assistant" feel
    utterance.rate = 1.1; 
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  };

  const fetchAIResponse = async (userText: string) => {
    try {
      // Map existing messages to API format
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      // Append newest user message
      chatHistory.push({ role: 'user', content: userText });

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory })
      });

      if (!res.ok) {
        throw new Error('API Error');
      }

      const data = await res.json();
      
      const responseMsg: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.response
      };

      setMessages(prev => [...prev, responseMsg]);
      speakText(data.response);

    } catch (err) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I'm having trouble connecting to my brain right now! Please try again later."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendVoice = (transcript: string) => {
    if (!transcript.trim()) return;
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: transcript }]);
    setInput('');
    setIsTyping(true);
    fetchAIResponse(transcript);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);
    
    fetchAIResponse(userMessage);
  };

  const toggleListening = () => {
    if (!recognition) {
       alert("Your browser does not support voice input. Please try Chrome or Safari.");
       return;
    }
    
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
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
              className="absolute bottom-16 right-0 w-[350px] sm:w-[380px] h-[560px] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-forest-200"
              style={{ background: '#FEFDF7' }}
            >
              {/* Header — deep forest green gradient matching site navbar */}
              <div className="flex items-center justify-between px-4 py-3" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1A3C2B 100%)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-md" style={{ background: 'linear-gradient(135deg, #F4A23C, #D6AD60)' }}>
                    🍳
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white tracking-wide">Chef Aika</h3>
                    <p className="text-[10px] flex items-center gap-1.5" style={{ color: '#FAE89A' }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#52B788' }}></span>
                      AI-powered · Free
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    title={voiceEnabled ? "Mute Voice" : "Enable Voice"}
                    className="p-1.5 rounded-lg transition-colors"
                    style={{ color: voiceEnabled ? '#F4A23C' : '#7EC49A' }}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg transition-colors hover:bg-white/10 text-white/60 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5 text-xs" style={{ background: '#1A3C2B' }}>
                        🍳
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'text-white rounded-br-none shadow-sm' 
                        : 'text-forest-900 rounded-bl-none shadow-sm border'
                    }`}
                    style={msg.role === 'user' 
                      ? { background: 'linear-gradient(135deg, #1A5E38, #227849)' }
                      : { background: '#fff', borderColor: '#D9EDE0' }
                    }>
                      {msg.content}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-end gap-2 justify-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs" style={{ background: '#1A3C2B' }}>
                      🍳
                    </div>
                    <div className="bg-white border rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1" style={{ borderColor: '#D9EDE0' }}>
                      <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#52B788', animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#52B788', animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#52B788', animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions */}
              <div className="px-3 py-2 border-t flex gap-1.5 overflow-x-auto" style={{ borderColor: '#D9EDE0', background: '#FEFAE0' }}>
                {['Mushroom recipe 🍄', 'Cheapest veggies?', 'Healthy dinner?'].map(s => (
                  <button key={s} onClick={() => setInput(s)}
                    className="flex-shrink-0 text-[11px] bg-white border rounded-full px-2.5 py-1 transition-colors font-medium whitespace-nowrap hover:bg-forest-50"
                    style={{ borderColor: '#B3DBBD', color: '#1A5E38' }}>
                    {s}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-3 bg-white border-t" style={{ borderColor: '#D9EDE0' }}>
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={toggleListening}
                    className={`p-2.5 rounded-full transition-all flex-shrink-0 border ${
                      isListening 
                        ? 'bg-red-500 border-red-400 text-white animate-pulse shadow-md' 
                        : 'bg-cream-50 border-forest-200 text-forest-700 hover:bg-forest-50'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>

                  <div className="flex-1 flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 border transition-colors focus-within:border-forest-400"
                    style={{ background: '#FEFDF7', borderColor: '#B3DBBD' }}>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={isListening ? "🎙️ Listening..." : "Ask Chef Aika..."}
                      className="flex-1 bg-transparent border-none outline-none text-sm text-forest-900 placeholder-forest-400"
                    />
                    <button 
                      type="submit"
                      disabled={!input.trim()}
                      className="p-2 rounded-full transition-all"
                      style={input.trim() 
                        ? { background: '#1A5E38', color: 'white' }
                        : { background: '#D9EDE0', color: '#7EC49A' }
                      }
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button — forest green with amber glow ring */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all relative border-[3px]"
          style={{ background: '#1A3C2B', borderColor: '#F4A23C' }}
        >
          {isOpen ? <X className="w-5 h-5 text-white" /> : <Bot className="w-6 h-6 text-white" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse" style={{ background: '#F4A23C' }} />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default AIAssistant;

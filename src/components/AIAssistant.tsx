'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Mic, MicOff, Volume2, Crown, Lock, Copy, CheckCircle2, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

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

  // PRO Mode State
  const [activeTab, setActiveTab] = useState<'chat' | 'pro'>('chat');
  const [clicks, setClicks] = useState<number>(0);
  const [refCode, setRefCode] = useState<string>('');
  const [hasCheckedPro, setHasCheckedPro] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dailyUsage, setDailyUsage] = useState(0);
  const TARGET_CLICKS = 5;

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
  }, [messages, isTyping, activeTab]);

  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('aika_usage_date');
    if (savedDate !== today) {
      localStorage.setItem('aika_usage_date', today);
      localStorage.setItem('aika_usage_count', '0');
      setDailyUsage(0);
    } else {
      setDailyUsage(parseInt(localStorage.getItem('aika_usage_count') || '0', 10));
    }
  }, []);

  useEffect(() => {
    if (isOpen && !hasCheckedPro) {
      const code = localStorage.getItem('fantastic_ref_code');
      if (code) {
        setRefCode(code);
        supabase.from('viral_referrals').select('click_count').eq('ref_code', code).single()
          .then(({ data }) => {
            if (data) setClicks(data.click_count || 0);
            setHasCheckedPro(true);
          });
      } else {
        setHasCheckedPro(true);
      }
    }
  }, [isOpen, hasCheckedPro]);

  const incrementUsage = () => {
    const newCount = dailyUsage + 1;
    setDailyUsage(newCount);
    localStorage.setItem('aika_usage_count', newCount.toString());
  };

  const chatLimit = clicks >= TARGET_CLICKS ? 5 : 1;
  const hasReachedLimit = dailyUsage >= chatLimit;

  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`${window.location.origin}/en/rewards?ref=${refCode}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGenerateMealPlan = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const goal = formData.get('goal');
    const diet = formData.get('diet');
    
    const prompt = `Please act as an expert nutritionist. Generate a 7-day meal plan for a ${diet} diet with a goal of ${goal}. Keep the response structured, clear, and focused on Indian ingredients that can be easily bought on quick-commerce apps like Zepto or Blinkit. Format with markdown.`;
    
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: `Please generate a 7-day ${diet} meal plan for ${goal}.` }]);
    setActiveTab('chat');
    setIsTyping(true);
    fetchAIResponse(prompt);
  };

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
    if (!transcript.trim() || hasReachedLimit) return;
    incrementUsage();
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: transcript }]);
    setInput('');
    setIsTyping(true);
    fetchAIResponse(transcript);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || hasReachedLimit) return;
    incrementUsage();

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
              <div className="flex flex-col" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1A3C2B 100%)' }}>
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-md" style={{ background: 'linear-gradient(135deg, #F4A23C, #D6AD60)' }}>
                      🍳
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white tracking-wide flex items-center gap-2">
                        Chef Aika
                      </h3>
                      <p className="text-[10px] flex items-center gap-1.5" style={{ color: '#FAE89A' }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#52B788' }}></span>
                        AI-powered Assistant
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

                {/* Tabs */}
                <div className="flex px-4 gap-4 mt-1 border-b border-white/10">
                  <button 
                    onClick={() => setActiveTab('chat')}
                    className={`pb-2 text-xs font-bold transition-colors border-b-2 ${activeTab === 'chat' ? 'text-white border-amber-400' : 'text-forest-300 border-transparent hover:text-forest-100'}`}
                  >
                    Chat
                  </button>
                  <button 
                    onClick={() => setActiveTab('pro')}
                    className={`pb-2 text-xs font-bold transition-colors border-b-2 flex items-center gap-1 ${activeTab === 'pro' ? 'text-amber-400 border-amber-400' : 'text-amber-500/50 border-transparent hover:text-amber-400'}`}
                  >
                    <Crown className="w-3 h-3" /> PRO Tools
                  </button>
                </div>
              </div>

              {activeTab === 'chat' ? (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mb-0.5 text-xs" style={{ background: '#1A3C2B' }}>
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
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs" style={{ background: '#1A3C2B' }}>
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
                    className="shrink-0 text-[11px] bg-white border rounded-full px-2.5 py-1 transition-colors font-medium whitespace-nowrap hover:bg-forest-50"
                    style={{ borderColor: '#B3DBBD', color: '#1A5E38' }}>
                    {s}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 bg-white border-t" style={{ borderColor: '#D9EDE0' }}>
                {hasReachedLimit ? (
                  <div className="text-center p-3 rounded-xl border" style={{ background: '#FEFAE0', borderColor: '#F4A23C' }}>
                    <p className="font-bold text-sm mb-1 text-amber-900">Daily Limit Reached! 🛑</p>
                    {clicks < TARGET_CLICKS ? (
                      <p className="text-xs text-amber-800">
                        You've used your 1 free chat today. <button type="button" onClick={() => setActiveTab('pro')} className="underline font-bold text-amber-600">Invite 5 friends</button> to unlock 5 chats/day! (Get a Premium Coupon at 3 invites!)
                      </p>
                    ) : (
                      <p className="text-xs text-amber-800">You've used your 5 chats for today. Come back tomorrow!</p>
                    )}
                  </div>
                ) : (
                  <form onSubmit={handleSend}>
                    <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={toggleListening}
                    className={`p-2.5 rounded-full transition-all shrink-0 border ${
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
                <div className="text-[10px] text-center mt-2 text-forest-400">
                  {dailyUsage}/{chatLimit} messages used today. {clicks < TARGET_CLICKS && <span className="text-amber-500 font-bold cursor-pointer hover:underline" onClick={() => setActiveTab('pro')}>Want 5 messages?</span>}
                </div>
              </form>
            )}
          </div>
                </>
              ) : (
                /* PRO Tab View */
                <div className="flex-1 overflow-y-auto p-6 bg-linear-to-b from-white to-amber-50/30">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                      <Crown className="w-6 h-6" />
                    </div>
                    <h3 className="font-black text-gray-900 text-lg">PRO Meal Planner</h3>
                    <p className="text-xs text-gray-500 mt-1">Generate a custom 7-day grocery and meal plan designed by AI.</p>
                  </div>

                  {clicks < TARGET_CLICKS ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gray-200">
                        <div className="h-full bg-amber-400" style={{ width: `${(clicks / TARGET_CLICKS) * 100}%` }} />
                      </div>
                      <Lock className="w-8 h-8 text-gray-400 mx-auto mb-3 mt-2" />
                      <h4 className="font-bold text-gray-800 text-sm mb-1">Feature Locked</h4>
                      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        Invite {TARGET_CLICKS} friends to Fantastic Food to unlock PRO meal planning. (Unlock a Premium Coupon at just 3 invites!)
                      </p>
                      <div className="text-2xl font-black text-gray-800 mb-4">{clicks} <span className="text-sm font-bold text-gray-400">/ {TARGET_CLICKS} Clicks</span></div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-2 flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono text-gray-500 truncate flex-1 pl-1">fantasticfood.in/en/rewards?ref={refCode}</span>
                        <button onClick={copyLink} className="p-1.5 bg-white border rounded-lg hover:bg-gray-50 text-gray-700">
                          {copied ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                      <a href="/en/rewards" className="text-[10px] text-amber-600 font-bold hover:underline">View Rewards Page &rarr;</a>
                    </div>
                  ) : (
                    <form onSubmit={handleGenerateMealPlan} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Goal</label>
                        <select name="goal" className="w-full text-sm rounded-xl border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-sm">
                          <option value="Weight Loss">Weight Loss</option>
                          <option value="Muscle Gain">Muscle Gain</option>
                          <option value="Healthy Maintenance">Healthy Maintenance</option>
                          <option value="High Energy / Focus">High Energy / Focus</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Dietary Preference</label>
                        <select name="diet" className="w-full text-sm rounded-xl border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-sm">
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Non-Vegetarian">Non-Vegetarian</option>
                          <option value="Vegan">Vegan</option>
                          <option value="Keto">Keto</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full mt-2 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-forest-900 font-black py-3 rounded-xl shadow-md transition-transform active:scale-95 text-sm flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" /> Generate 7-Day Plan
                      </button>
                    </form>
                  )}
                </div>
              )}
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
// force refresh



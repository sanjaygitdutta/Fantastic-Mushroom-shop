import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, Plus, X, Mic, MicOff, Volume2, VolumeX, Sparkles, Clock, Flame, Users, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type ChatMessage = { role: 'ai' | 'user'; text: string };
type Recipe = {
  name: string;
  description: string;
  ingredients_used: string[];
  instructions: string[];
  prep_time: number;
  cook_time: number;
  servings: number;
  tips?: string;
};

export default function ChefAikaPage() {
  // Ingredients
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [manualInput, setManualInput] = useState('');
  const [servings, setServings] = useState(2);
  const [dietary, setDietary] = useState('');

  // Camera
  const [cameraActive, setCameraActive] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanStatus, setScanStatus] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Voice
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled] = useState(true);
  const [isAikaOnline, setIsAikaOnline] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Chat
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', text: "👩‍🍳 Welcome! I'm Chef Aika. Show me what's in your fridge, or add ingredients manually, and I'll cook up a recipe for you!" }
  ]);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  // Recipe
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [generatingRecipe, setGeneratingRecipe] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Timer
  const [timer, setTimer] = useState<{ label: string; remaining: number } | null>(null);
  const timerRef = useRef<any>(null);

  // ── Setup Speech Recognition ─────────────────────────────────────────────
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = 'en-US';
    rec.onstart = () => { setIsListening(true); setIsAikaOnline(true); };
    rec.onerror = () => setIsListening(false);
    rec.onend = () => setIsListening(false);
    rec.onresult = async (e: any) => {
      const transcript = e.results[0][0].transcript;
      addMessage('user', transcript);
      await sendToAi(transcript);
    };
    recognitionRef.current = rec;
    setIsAikaOnline(true);
    return () => rec.abort();
  }, [ingredients]);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ── Timer Logic ───────────────────────────────────────────────────────────
  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  // ── Speech synthesis ──────────────────────────────────────────────────────
  const speakText = (text: string) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 1.05; u.pitch = 1.15;
    u.onstart = () => setIsSpeaking(true);
    u.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(u);
  };

  // ── Chat helpers ─────────────────────────────────────────────────────────
  const addMessage = (role: 'ai' | 'user', text: string) =>
    setMessages(prev => [...prev, { role, text }]);

  const sendToAi = async (userText: string) => {
    try {
      const context = ingredients.length
        ? `Available ingredients: ${ingredients.join(', ')}.`
        : 'No ingredients loaded yet.';

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: `You are Chef Aika, an AI kitchen assistant for Fantastic Food. ${context} Keep answers short and conversational for voice output.` },
            { role: 'user', content: userText }
          ]
        })
      });
      const data = await res.json();
      const reply = data.response || "I'm having trouble connecting. Please try again!";
      addMessage('ai', reply);
      speakText(reply);
    } catch {
      const err = "Sorry, I had trouble connecting. Please try again!";
      addMessage('ai', err);
      speakText(err);
    }
  };

  const toggleVoice = () => {
    const rec = recognitionRef.current;
    if (!rec) { alert('Voice not supported in this browser. Try Chrome or Safari.'); return; }
    if (isListening) { rec.stop(); } else { rec.start(); }
  };

  // ── Camera ────────────────────────────────────────────────────────────────
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      streamRef.current = stream;
      if (videoRef.current) { videoRef.current.srcObject = stream; }
      setCameraActive(true);
      setScanStatus('');
    } catch {
      setScanStatus('Camera permission denied. Please upload a photo instead.');
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    setCameraActive(false);
  };

  const captureAndScan = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
    await scanImage(canvas.toDataURL('image/jpeg', 0.8));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      if (ev.target?.result) await scanImage(ev.target.result as string);
    };
    reader.readAsDataURL(file);
  };

  const scanImage = async (dataUrl: string) => {
    setScanning(true);
    setScanStatus('🔍 Scanning for ingredients...');
    try {
      const res = await fetch('/api/scan-ingredients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: dataUrl })
      });
      const data = await res.json();
      if (data.ingredients?.length) {
        const newOnes = data.ingredients.filter((i: string) => !ingredients.includes(i));
        setIngredients(prev => [...prev, ...newOnes]);
        setScanStatus(`✅ Found ${newOnes.length} ingredient(s)!`);
        speakText(`I found ${newOnes.length} ingredients: ${newOnes.slice(0, 4).join(', ')}.`);
      } else {
        setScanStatus('⚠️ No food items detected. Try a clearer photo.');
      }
    } catch {
      setScanStatus('❌ Scan failed. Please try again or add manually.');
    } finally {
      setScanning(false);
    }
  };

  // ── Ingredients ───────────────────────────────────────────────────────────
  const addManual = () => {
    const val = manualInput.trim();
    if (!val || ingredients.includes(val)) return;
    setIngredients(prev => [...prev, val]);
    setManualInput('');
  };

  const removeIngredient = (i: string) => setIngredients(prev => prev.filter(x => x !== i));

  // ── Generate Recipe ───────────────────────────────────────────────────────
  const generateRecipe = async () => {
    if (!ingredients.length) {
      addMessage('ai', 'Please add some ingredients first! Scan your fridge or type them in.');
      speakText('Please add some ingredients first!');
      return;
    }
    setGeneratingRecipe(true);
    setActiveStep(null);
    addMessage('ai', `✨ Generating a recipe with ${ingredients.join(', ')}...`);
    try {
      const res = await fetch('/api/generate-recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients, servings, dietary })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setRecipe(data);
      addMessage('ai', `🍽️ Ready! I made "${data.name}" for you. Check the recipe on the right!`);
      speakText(`Your recipe is ready! I created ${data.name}. It takes about ${data.cook_time} minutes to cook.`);
    } catch (err: any) {
      addMessage('ai', `Oops! Something went wrong: ${err.message}`);
    } finally {
      setGeneratingRecipe(false);
    }
  };

  const readRecipeAloud = () => {
    if (!recipe) return;
    const text = `${recipe.name}. ${recipe.description}. Ingredients: ${recipe.ingredients_used.join(', ')}. Instructions: ${recipe.instructions.join('. ')}`;
    speakText(text);
  };

  return (
    <>
      <SEO
        title="Chef Aika — AI Kitchen Assistant | Fantastic Food"
        description="Let Chef Aika plan your meals! Scan your fridge, add ingredients, and get personalized AI-generated recipes in seconds."
        canonicalUrl="https://www.fantasticfood.in/chef-aika"
        keywords="AI chef, recipe generator, fridge scan, meal planner, Chef Aika, Fantastic Food"
      />

      <div className="min-h-screen pt-16" style={{ background: '#0F2419' }}>

        {/* Header */}
        <div className="border-b px-6 py-3 flex items-center justify-between" style={{ borderColor: '#1A3C2B', background: '#0A1A10' }}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍳</span>
            <div>
              <span className="font-bold text-white text-lg">Chef Aika</span>
              <p className="text-[10px] font-medium tracking-wider" style={{ color: '#F4A23C' }}>YOUR AI KITCHEN COMPANION</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isAikaOnline ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
            <span className="text-sm" style={{ color: isAikaOnline ? '#4ade80' : '#6b7280' }}>
              {isAikaOnline ? 'Chef Aika is ready' : 'Chef Aika is offline'}
            </span>
          </div>
        </div>

        {/* 3-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-[calc(100vh-120px)] overflow-hidden">

          {/* ── LEFT PANEL: Fridge Scanner ─────────────────────────────── */}
          <div className="border-r flex flex-col overflow-y-auto" style={{ borderColor: '#1A3C2B', background: '#0D1F16' }}>
            <div className="p-4 border-b" style={{ borderColor: '#1A3C2B' }}>
              <h2 className="font-bold text-lg flex items-center gap-2" style={{ color: '#F4A23C' }}>
                🥕 Your Fridge
              </h2>
            </div>

            {/* Camera */}
            <div className="p-4">
              <div className="rounded-xl overflow-hidden border-2 border-dashed mb-3 aspect-video flex items-center justify-center relative"
                style={{ borderColor: cameraActive ? '#52B788' : '#1A3C2B', background: '#0A1A10' }}>
                <video ref={videoRef} autoPlay playsInline className={`w-full h-full object-cover ${cameraActive ? '' : 'hidden'}`} />
                <canvas ref={canvasRef} className="hidden" />
                {!cameraActive && (
                  <div className="text-center">
                    <Camera className="w-10 h-10 mx-auto mb-2" style={{ color: '#1A5E38' }} />
                    <p className="text-sm" style={{ color: '#52B788' }}>Point at your fridge or ingredients</p>
                  </div>
                )}
                {cameraActive && (
                  <div className="absolute inset-0 border-2 rounded-xl pointer-events-none" style={{ borderColor: '#52B788' }}>
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 rounded-tl" style={{ borderColor: '#F4A23C' }} />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 rounded-tr" style={{ borderColor: '#F4A23C' }} />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 rounded-bl" style={{ borderColor: '#F4A23C' }} />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 rounded-br" style={{ borderColor: '#F4A23C' }} />
                  </div>
                )}
              </div>

              <div className="flex gap-2 mb-2">
                {!cameraActive ? (
                  <button onClick={startCamera} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all" style={{ background: '#1A3C2B', color: '#52B788', border: '1px solid #2D6A4F' }}>
                    <Camera className="w-4 h-4" /> Open Camera
                  </button>
                ) : (
                  <>
                    <button onClick={captureAndScan} disabled={scanning} className="flex-1 py-2 rounded-lg text-sm font-bold transition-all" style={{ background: '#52B788', color: '#0F2419' }}>
                      {scanning ? '🔍 Scanning...' : '🔍 Scan'}
                    </button>
                    <button onClick={stopCamera} className="px-3 py-2 rounded-lg text-sm" style={{ background: '#1A3C2B', color: '#f87171' }}>
                      <X className="w-4 h-4" />
                    </button>
                  </>
                )}
                <label className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all" style={{ background: '#1A3C2B', color: '#F4A23C', border: '1px solid #2D6A4F' }}>
                  <Upload className="w-4 h-4" /> Upload
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                </label>
              </div>

              {scanStatus && (
                <p className="text-xs text-center py-2 px-3 rounded-lg mb-2" style={{ color: '#FAE89A', background: '#1A3C2B' }}>
                  {scanStatus}
                </p>
              )}
            </div>

            {/* Ingredient List */}
            <div className="px-4 pb-4 flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm" style={{ color: '#FAE89A' }}>Detected Ingredients</h3>
                {ingredients.length > 0 && (
                  <button onClick={() => setIngredients([])} className="text-xs px-2 py-1 rounded" style={{ color: '#f87171', background: '#1A3C2B' }}>
                    Clear All
                  </button>
                )}
              </div>

              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={manualInput}
                  onChange={e => setManualInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && addManual()}
                  placeholder="Add ingredient manually..."
                  className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ background: '#0A1A10', color: '#fff', border: '1px solid #1A3C2B' }}
                />
                <button onClick={addManual} className="px-3 py-2 rounded-lg font-bold text-sm transition-all" style={{ background: '#F4A23C', color: '#0F2419' }}>
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {ingredients.length === 0 ? (
                <p className="text-sm text-center py-6" style={{ color: '#2D6A4F' }}>
                  No ingredients yet. Scan your fridge or add manually! 🌿
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  <AnimatePresence>
                    {ingredients.map(ing => (
                      <motion.span key={ing}
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full font-medium"
                        style={{ background: '#1A3C2B', color: '#52B788', border: '1px solid #2D6A4F' }}>
                        {ing}
                        <button onClick={() => removeIngredient(ing)} className="hover:text-red-400 transition-colors">
                          <X className="w-3 h-3" />
                        </button>
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* ── CENTER PANEL: Chef Aika Voice ──────────────────────────── */}
          <div className="flex flex-col overflow-hidden" style={{ background: '#0F2419' }}>

            {/* Avatar */}
            <div className="flex flex-col items-center pt-6 pb-4 px-4">
              <div className="relative mb-4">
                <motion.div
                  animate={isSpeaking ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #1A5E38, #F4A23C)', border: '3px solid #F4A23C' }}>
                  👩‍🍳
                </motion.div>
                {isSpeaking && (
                  <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: '#F4A23C' }} />
                )}
              </div>
              <h1 className="text-2xl font-black text-white mb-1">Chef Aika</h1>
              <p className="text-sm mb-4" style={{ color: '#52B788' }}>Your AI Kitchen Companion</p>

              {/* Voice Button */}
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={toggleVoice}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm shadow-xl transition-all ${isListening ? 'animate-pulse' : ''}`}
                style={isListening
                  ? { background: '#f87171', color: 'white' }
                  : { background: 'linear-gradient(135deg, #F4A23C, #D6AD60)', color: '#0F2419' }
                }>
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                {isListening ? 'Listening...' : 'Talk to Chef Aika'}
              </motion.button>

              {/* Timer */}
              {timer && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-3 px-5 py-3 rounded-xl text-center" style={{ background: '#1A3C2B', border: '1px solid #2D6A4F' }}>
                  <p className="text-xs mb-1" style={{ color: '#FAE89A' }}>{timer.label}</p>
                  <p className="text-2xl font-black" style={{ color: '#F4A23C' }}>{formatTime(timer.remaining)}</p>
                  <button onClick={() => { clearInterval(timerRef.current); setTimer(null); }} className="text-xs mt-1" style={{ color: '#f87171' }}>dismiss</button>
                </motion.div>
              )}
            </div>

            {/* Transcript */}
            <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-3">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={msg.role === 'user'
                      ? { background: 'linear-gradient(135deg, #1A5E38, #227849)', color: 'white', borderBottomRightRadius: '4px' }
                      : { background: '#1A3C2B', color: '#FAE89A', borderBottomLeftRadius: '4px' }
                    }>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={transcriptEndRef} />
            </div>

            {/* Generate + Options */}
            <div className="p-4 border-t" style={{ borderColor: '#1A3C2B' }}>
              <div className="flex gap-2 mb-3">
                <select value={servings} onChange={e => setServings(Number(e.target.value))}
                  className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ background: '#1A3C2B', color: '#FAE89A', border: '1px solid #2D6A4F' }}>
                  <option value={1}>1 serving</option>
                  <option value={2}>2 servings</option>
                  <option value={4}>4 servings</option>
                  <option value={6}>6 servings</option>
                </select>
                <select value={dietary} onChange={e => setDietary(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                  style={{ background: '#1A3C2B', color: '#FAE89A', border: '1px solid #2D6A4F' }}>
                  <option value="">No restrictions</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten-Free</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={generateRecipe}
                disabled={generatingRecipe}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-black text-sm transition-all shadow-xl"
                style={generatingRecipe
                  ? { background: '#1A3C2B', color: '#52B788' }
                  : { background: 'linear-gradient(135deg, #1A5E38, #2D9B65)', color: 'white' }
                }>
                {generatingRecipe ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Chef Aika is cooking...
                  </>
                ) : (
                  <><Sparkles className="w-4 h-4" /> ✨ Generate Recipe from My Fridge</>
                )}
              </motion.button>
            </div>
          </div>

          {/* ── RIGHT PANEL: Recipe Card ───────────────────────────────── */}
          <div className="border-l flex flex-col overflow-y-auto" style={{ borderColor: '#1A3C2B', background: '#0D1F16' }}>
            <div className="p-4 border-b" style={{ borderColor: '#1A3C2B' }}>
              <h2 className="font-bold text-lg flex items-center gap-2" style={{ color: '#F4A23C' }}>
                🍽️ Today's Recipe
              </h2>
            </div>

            <div className="flex-1 p-4">
              <AnimatePresence mode="wait">
                {!recipe && !generatingRecipe && (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="text-6xl mb-4">📖</div>
                    <p className="mb-2" style={{ color: '#52B788' }}>Your personalized recipe will appear here...</p>
                    <p className="text-sm" style={{ color: '#2D6A4F' }}>
                      Add some ingredients and tap <strong style={{ color: '#F4A23C' }}>Generate Recipe</strong>!
                    </p>
                  </motion.div>
                )}

                {generatingRecipe && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full">
                    <motion.span className="text-5xl mb-4" animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                      🍳
                    </motion.span>
                    <p style={{ color: '#52B788' }}>Chef Aika is cooking up your recipe...</p>
                  </motion.div>
                )}

                {recipe && !generatingRecipe && (
                  <motion.div key="recipe" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    {/* Recipe Header */}
                    <div className="rounded-xl p-4 mb-4" style={{ background: 'linear-gradient(135deg, #1A3C2B, #0F2419)', border: '1px solid #2D6A4F' }}>
                      <h2 className="text-xl font-black mb-2 text-white">{recipe.name}</h2>
                      <p className="text-sm mb-3" style={{ color: '#B3DBBD' }}>{recipe.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: '#0A1A10', color: '#52B788' }}>
                          <Clock className="w-3 h-3" /> {recipe.prep_time}m prep
                        </span>
                        <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: '#0A1A10', color: '#F4A23C' }}>
                          <Flame className="w-3 h-3" /> {recipe.cook_time}m cook
                        </span>
                        <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full" style={{ background: '#0A1A10', color: '#7EC49A' }}>
                          <Users className="w-3 h-3" /> {recipe.servings} servings
                        </span>
                      </div>
                    </div>

                    {/* Ingredients */}
                    <div className="mb-4">
                      <h3 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#FAE89A' }}>🥗 Ingredients</h3>
                      <ul className="space-y-1.5">
                        {recipe.ingredients_used.map((ing, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#B3DBBD' }}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#52B788' }} />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Instructions */}
                    <div className="mb-4">
                      <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: '#FAE89A' }}>👩‍🍳 Instructions</h3>
                      <ol className="space-y-2">
                        {recipe.instructions.map((step, i) => (
                          <motion.li key={i}
                            onClick={() => setActiveStep(activeStep === i ? null : i)}
                            className="flex gap-3 p-3 rounded-xl cursor-pointer transition-all"
                            style={activeStep === i
                              ? { background: '#1A5E38', border: '1px solid #52B788' }
                              : { background: '#1A3C2B', border: '1px solid #2D6A4F' }
                            }>
                            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                              style={{ background: '#F4A23C', color: '#0F2419' }}>{i + 1}</span>
                            <span className="text-sm leading-relaxed" style={{ color: activeStep === i ? 'white' : '#B3DBBD' }}>{step}</span>
                          </motion.li>
                        ))}
                      </ol>
                    </div>

                    {/* Tips */}
                    {recipe.tips && (
                      <div className="mb-4 p-3 rounded-xl" style={{ background: '#1A3C2B', border: '1px solid #2D6A4F' }}>
                        <h3 className="font-bold text-sm mb-1 flex items-center gap-2" style={{ color: '#F4A23C' }}>
                          <Lightbulb className="w-4 h-4" /> Chef's Tip
                        </h3>
                        <p className="text-sm" style={{ color: '#B3DBBD' }}>{recipe.tips}</p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button onClick={readRecipeAloud}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all"
                        style={{ background: '#1A3C2B', color: '#52B788', border: '1px solid #2D6A4F' }}>
                        {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                        Read Aloud
                      </button>
                      <Link to="/compare"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all"
                        style={{ background: 'linear-gradient(135deg, #F4A23C, #D6AD60)', color: '#0F2419' }}>
                        🛒 Price Check
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

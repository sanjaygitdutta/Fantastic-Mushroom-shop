import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts';
import { TrendingUp, TrendingDown, BarChart3, Eye, EyeOff } from 'lucide-react';
import type { PlatformPrice } from '../data/mockPrices';
import { getPriceHistory } from '../utils/priceHistory';

interface PriceHistoryChartProps {
  query: string;
  prices: PlatformPrice[];
}

const PLATFORM_LABELS: Record<string, string> = {
  blinkit: 'Blinkit', zepto: 'Zepto', swiggy: 'Swiggy',
  bigbasket: 'BigBasket', amazon: 'Amazon', jiomart: 'JioMart', flipkart: 'Flipkart',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const sorted = [...payload].sort((a, b) => a.value - b.value);
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 min-w-[160px]">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{label}</p>
      {sorted.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-4 mb-1">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: entry.color }} />
            <span className="text-xs text-gray-600">{PLATFORM_LABELS[entry.dataKey] || entry.dataKey}</span>
          </div>
          <span className="text-sm font-bold text-gray-800">₹{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function PriceHistoryChart({ query, prices }: PriceHistoryChartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hiddenPlatforms, setHiddenPlatforms] = useState<Set<string>>(new Set());
  const [days, setDays] = useState<7 | 14 | 30>(30);

  const currentPrices = useMemo(() =>
    Object.fromEntries(prices.filter(p => p.inStock).map(p => [p.platformId, p.price])),
    [prices]
  );

  const platformIds = prices.filter(p => p.inStock).map(p => p.platformId);
  const history = useMemo(
    () => getPriceHistory(query, platformIds, currentPrices),
    [query, platformIds.join(',')]
  );

  // Merge all platform data into one array of date-keyed objects for Recharts
  const chartData = useMemo(() => {
    if (!history.length) return [];
    const slice = history[0].data.slice(-days);
    return slice.map((point, i) => {
      const row: Record<string, any> = { date: point.date };
      history.forEach(h => {
        row[h.platformId] = h.data.slice(-days)[i]?.price;
      });
      return row;
    });
  }, [history, days]);

  const togglePlatform = (id: string) => {
    setHiddenPlatforms(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Trend calculation: compare today vs 7 days ago
  const getTrend = (platformId: string) => {
    const h = history.find(h => h.platformId === platformId);
    if (!h || h.data.length < 8) return 0;
    const recent = h.data[h.data.length - 1].price;
    const past = h.data[h.data.length - 8].price;
    return ((recent - past) / past) * 100;
  };

  const avgCurrentPrice = Math.round(
    prices.filter(p => p.inStock).reduce((sum, p) => sum + p.price, 0) /
    prices.filter(p => p.inStock).length
  );

  return (
    <div className="mt-8">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-forest-800 to-forest-700 hover:from-forest-700 hover:to-forest-600 text-white rounded-2xl px-6 py-4 transition-all group"
      >
        <div className="flex items-center gap-3">
          <BarChart3 className="w-5 h-5 text-amber-400" />
          <div className="text-left">
            <p className="font-bold text-base">30-Day Price History</p>
            <p className="text-forest-300 text-xs">See how prices have changed across all platforms</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-forest-300">
          <TrendingUp className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mt-3 p-6">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Price Trends</h3>
                  <p className="text-sm text-gray-400">Historical price simulation for <span className="font-semibold text-forest-600">{query}</span></p>
                </div>
                <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
                  {([7, 14, 30] as const).map(d => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      className={`text-sm px-4 py-1.5 rounded-lg font-medium transition-all ${
                        days === d ? 'bg-white text-forest-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {d}D
                    </button>
                  ))}
                </div>
              </div>

              {/* Platform toggle legends */}
              <div className="flex flex-wrap gap-2 mb-6">
                {history.map(h => {
                  const trend = getTrend(h.platformId);
                  const hidden = hiddenPlatforms.has(h.platformId);
                  return (
                    <button
                      key={h.platformId}
                      onClick={() => togglePlatform(h.platformId)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-all ${
                        hidden ? 'bg-gray-50 border-gray-200 text-gray-400' : 'border-transparent text-white shadow-sm'
                      }`}
                      style={!hidden ? { background: h.color } : {}}
                    >
                      {hidden ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {h.name}
                      <span className={`text-xs font-bold ${trend < 0 ? 'text-green-300' : 'text-red-300'} ${hidden ? (trend < 0 ? '!text-green-500' : '!text-red-500') : ''}`}>
                        {trend < 0 ? '↓' : '↑'}{Math.abs(trend).toFixed(1)}%
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* The Chart */}
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: '#9ca3af' }}
                    tickLine={false}
                    axisLine={false}
                    interval={days === 7 ? 0 : days === 14 ? 1 : 4}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#9ca3af' }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `₹${v}`}
                    width={50}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine
                    y={avgCurrentPrice}
                    stroke="#6b7280"
                    strokeDasharray="4 4"
                    label={{ value: 'Avg Today', fill: '#6b7280', fontSize: 10, position: 'insideTopRight' }}
                  />
                  {history.map(h => (
                    <Line
                      key={h.platformId}
                      type="monotone"
                      dataKey={hiddenPlatforms.has(h.platformId) ? `__hidden_${h.platformId}` : h.platformId}
                      stroke={h.color}
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 5, strokeWidth: 2, stroke: '#fff' }}
                      hide={hiddenPlatforms.has(h.platformId)}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>

              {/* Insights */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {history.slice(0, 4).map(h => {
                  const trend = getTrend(h.platformId);
                  const cp = currentPrices[h.platformId];
                  return cp ? (
                    <div key={h.platformId} className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-400 font-medium">{h.name}</p>
                      <p className="text-lg font-black text-gray-800 mt-0.5">₹{cp}</p>
                      <div className={`flex items-center justify-center gap-1 text-xs font-semibold mt-1 ${trend < 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {trend < 0 ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                        {Math.abs(trend).toFixed(1)}% this week
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

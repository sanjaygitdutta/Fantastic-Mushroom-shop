'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Mail, Trash2, RefreshCw, Search, Inbox, AlertCircle, MessageSquare } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ContactMessage {
  id: string;
  message: string;
  created_at: string;
}

const ManageMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast.error(`Error loading messages: ${error.message}`);
      } else if (data) {
        setMessages(data);
      }
    } catch (err: any) {
      toast.error(`Connection error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    setDeletingId(id);
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error(`Failed to delete: ${error.message}`);
      } else {
        toast.success('Message deleted successfully');
        setMessages(prev => prev.filter(m => m.id !== id));
      }
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredMessages = messages.filter(m =>
    m.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats calculation
  const totalMessages = messages.length;
  const messagesToday = messages.filter(m => {
    const today = new Date().toDateString();
    return new Date(m.created_at).toDateString() === today;
  }).length;

  return (
    <div className="min-h-screen bg-mushroom-50/50">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-forest-900 mb-2 flex items-center gap-3">
            Customer Feedback <span className="text-2xl">📥</span>
          </h1>
          <p className="text-mushroom-600">
            Read and manage user feedback and contact submissions
          </p>
        </div>

        <button
          onClick={fetchMessages}
          disabled={loading}
          className="flex items-center gap-2 bg-white border border-mushroom-200 text-mushroom-700 px-4 py-2.5 rounded-xl text-sm font-bold shadow-xs hover:bg-mushroom-50 hover:text-mushroom-900 transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh Feed
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-mushroom-200 shadow-xs flex items-center gap-4">
          <div className="p-4 bg-forest-100 text-forest-900 rounded-2xl">
            <Inbox className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-mushroom-500 font-bold text-sm uppercase tracking-wider">Total Feedback</h3>
            <p className="text-3xl font-black text-forest-900">{totalMessages}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-mushroom-200 shadow-xs flex items-center gap-4">
          <div className="p-4 bg-amber-100 text-amber-900 rounded-2xl">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-mushroom-500 font-bold text-sm uppercase tracking-wider">Received Today</h3>
            <p className="text-3xl font-black text-forest-900">{messagesToday}</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl border border-mushroom-200 shadow-xs overflow-hidden">
        {/* Search Bar */}
        <div className="p-6 border-b border-mushroom-100 flex items-center gap-4 bg-mushroom-50/30">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mushroom-400" />
            <input
              type="text"
              placeholder="Search feedback content..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-mushroom-200 bg-white outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-all font-medium text-mushroom-900"
            />
          </div>
        </div>

        {/* Message Feed */}
        <div className="divide-y divide-mushroom-100 min-h-[300px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-mushroom-500">
              <RefreshCw className="w-10 h-10 animate-spin text-forest-300 mb-4" />
              <p className="font-semibold">Loading messages...</p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="text-5xl mb-4 opacity-40">📬</div>
              <h3 className="text-xl font-bold text-forest-900 mb-1">No feedback found</h3>
              <p className="text-mushroom-500 max-w-sm">
                {searchQuery ? 'Try adjusting your search query' : 'When users submit messages from the footer, they will appear here.'}
              </p>
            </div>
          ) : (
            filteredMessages.map(item => {
              const dateObj = new Date(item.created_at);
              const formattedDate = dateObj.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              const formattedTime = dateObj.toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div key={item.id} className="p-6 hover:bg-mushroom-50/30 transition-all flex justify-between gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-forest-50 text-forest-900 px-2.5 py-1 rounded-full border border-forest-100">
                        <Mail className="w-3 h-3 text-forest-600" />
                        Anonymous Feedback
                      </span>
                      <span className="text-xs text-mushroom-400 font-medium">
                        {formattedDate} at {formattedTime}
                      </span>
                    </div>
                    <p className="text-mushroom-800 leading-relaxed whitespace-pre-wrap font-medium">
                      {item.message}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deletingId === item.id}
                    title="Delete message"
                    className="p-2.5 text-mushroom-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all self-center disabled:opacity-50"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMessages;

import { motion } from 'motion/react';
import { Bot, Calendar, Clock, Sparkles, MessageSquare, Send, AlertTriangle, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const suggestions = [
  'What should I prioritize this week?',
  'When should I start my ML assignment?',
  'Show me my study schedule',
  'Find free time for group study'
];

interface Recommendation {
  id: number;
  event1: string;
  event2: string;
  aiAdvice: string;
  action: string;
}

interface Deadline {
  title: string;
  due: string;
  importance: string;
}

export default function AIAssistant() {
  const [message, setMessage] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const [clashesDetected, setClashesDetected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sendingWhatsapp, setSendingWhatsapp] = useState<number | null>(null);

  useEffect(() => {
    const fetchAI = async () => {
      try {
        const res = await fetch('/api/deadlines/ai-recommendations');
        const data = await res.json();
        setRecommendations(data.recommendations);
        setDeadlines(data.upcomingDeadlines);
        setClashesDetected(data.clashesDetected);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAI();
  }, []);

  const handleSendWhatsApp = async (rec: Recommendation) => {
    setSendingWhatsapp(rec.id);
    try {
      await fetch('/api/whatsapp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deadlineTitle: rec.event1,
          phone: '+91 98765 43210' // Mock phone
        })
      });
      alert('WhatsApp reminder sent successfully!');
    } catch (err) {
      console.error(err);
    } finally {
      setSendingWhatsapp(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 flex items-center gap-3">
          <div className="w-10 h-10 bg-neutral-900 dark:bg-white rounded-xl flex items-center justify-center">
            <Bot className="w-5 h-5 text-white dark:text-neutral-900" />
          </div>
          AI Assistant
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Smart scheduling help, conflict resolution, and WhatsApp alerts
        </p>
      </motion.div>

      {/* AI Insights & Conflicts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800"
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">AI Priority Recommendations</h2>
        </div>

        {loading ? (
          <p className="text-neutral-500 text-sm">Analyzing your schedule...</p>
        ) : (
          <div className="space-y-4">
            {clashesDetected && (
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-medium text-sm">Schedule conflicts detected! See AI advice below.</span>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="flex flex-col gap-3 h-full">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2 text-sm leading-tight">
                        Conflict: <br/> <span className="font-normal text-neutral-600 dark:text-neutral-400">{rec.event1}</span> <br/> vs <br/> <span className="font-normal text-neutral-600 dark:text-neutral-400">{rec.event2}</span>
                      </h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800 mb-4">
                        <strong className="block mb-1">AI Advice:</strong>
                        {rec.aiAdvice}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <button
                        onClick={() => handleSendWhatsApp(rec)}
                        disabled={sendingWhatsapp === rec.id}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50 dark:hover:bg-green-900/40 rounded-lg text-sm font-medium transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {sendingWhatsapp === rec.id ? 'Sending...' : 'Send WhatsApp Reminder'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3 text-sm">Upcoming Key Deadlines</h3>
              <div className="flex flex-wrap gap-3">
                {deadlines.map((dl, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <Clock className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">{dl.title}</span>
                    <span className="text-xs text-neutral-500">{dl.due}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
      >
        <div className="bg-neutral-900 dark:bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 dark:bg-neutral-900/10 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white dark:text-neutral-900" />
            </div>
            <div>
              <h3 className="font-semibold text-white dark:text-neutral-900">StudyHub AI</h3>
              <p className="text-white/60 dark:text-neutral-900/60 text-xs">Always here to help you stay organized</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-6 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
          {/* AI Welcome Message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white dark:text-neutral-900" />
            </div>
            <div className="flex-1">
              <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl rounded-tl-none p-4">
                <p className="text-neutral-900 dark:text-white text-sm">
                  Hi! 👋 I'm your AI assistant. I can help you with:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Resolving clashes in your calendar</li>
                  <li>• Setting up WhatsApp alerts for critical tasks</li>
                  <li>• Prioritizing assignments and tasks</li>
                </ul>
                <p className="mt-3 text-neutral-900 dark:text-white text-sm">
                  What would you like help with today?
                </p>
              </div>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="flex flex-col items-end gap-2 pt-4">
            <p className="text-xs text-neutral-400">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2 justify-end">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(suggestion)}
                  className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything about your schedule..."
              className="flex-1 px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
            <button className="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

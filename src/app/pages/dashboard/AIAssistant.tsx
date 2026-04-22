import { motion } from 'motion/react';
import { Bot, Calendar, Clock, TrendingUp, Sparkles, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

const suggestions = [
  'What should I prioritize this week?',
  'When should I start my ML assignment?',
  'Show me my study schedule',
  'Find free time for group study'
];

const aiInsights = [
  {
    icon: TrendingUp,
    title: 'Study Pattern Analysis',
    description: 'You\'re most productive between 9 AM - 12 PM. Schedule important tasks during this time.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Calendar,
    title: 'Deadline Optimization',
    description: 'You have 3 assignments due next week. Start with DSA assignment as it requires the most time.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'You\'re spending 15% more time on ML course. Consider joining a study group for better efficiency.',
    color: 'from-orange-500 to-red-600'
  }
];

export default function AIAssistant() {
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          AI Assistant
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Get smart scheduling help and personalized academic insights
        </p>
      </motion.div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Insights</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {aiInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-xl hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-xl flex items-center justify-center mb-4`}>
                <insight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{insight.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">StudyHub AI Assistant</h3>
              <p className="text-white/80 text-sm">Always here to help you stay organized</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
          {/* AI Welcome Message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none p-4">
                <p className="text-gray-900 dark:text-white">
                  Hi Priya! 👋 I'm your AI assistant. I can help you with:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Smart scheduling and time management</li>
                  <li>• Finding conflicts in your calendar</li>
                  <li>• Prioritizing assignments and tasks</li>
                  <li>• Study pattern analysis and recommendations</li>
                </ul>
                <p className="mt-3 text-gray-900 dark:text-white">
                  What would you like help with today?
                </p>
              </div>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="flex flex-col items-end gap-2">
            <p className="text-sm text-gray-500 dark:text-gray-500">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2 justify-end">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(suggestion)}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything about your schedule..."
              className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Scheduling</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                AI analyzes your calendar and suggests optimal times for study sessions, breaks, and deadlines.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Natural Conversations</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Chat naturally with the AI to get personalized recommendations and answers to your academic questions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

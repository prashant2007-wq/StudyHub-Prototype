import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, BookOpen, MessageCircle, Users, Filter, Clock, Star } from 'lucide-react';

const filters = ['All', 'Urgent', 'Academic', 'Events', 'Personal'];

const feedItems = [
  {
    id: 1,
    source: 'Gmail',
    icon: Mail,
    color: 'from-red-500 to-red-600',
    sender: 'Prof. Sharma',
    subject: 'Assignment 3 - Graph Algorithms Due Tomorrow',
    preview: 'Please submit your solutions for the graph algorithms assignment by 11:59 PM tomorrow...',
    time: '10 min ago',
    category: 'Urgent',
    isStarred: true
  },
  {
    id: 2,
    source: 'Slack',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
    sender: '#project-discussions',
    subject: 'New message from Rahul',
    preview: '@everyone The project deadline has been extended by 2 days. Let\'s schedule a sync meeting...',
    time: '25 min ago',
    category: 'Academic',
    isStarred: false
  },
  {
    id: 3,
    source: 'Canvas',
    icon: BookOpen,
    color: 'from-orange-500 to-orange-600',
    sender: 'Database Systems',
    subject: 'Grades Posted - Quiz 2',
    preview: 'Your grade for Quiz 2 has been posted. View your detailed feedback in the gradebook...',
    time: '1 hour ago',
    category: 'Academic',
    isStarred: true
  },
  {
    id: 4,
    source: 'Discord',
    icon: MessageCircle,
    color: 'from-indigo-500 to-indigo-600',
    sender: 'Study Group - DSA',
    subject: 'Meeting scheduled for 6 PM',
    preview: 'Hey everyone! We\'re meeting at 6 PM today to discuss dynamic programming problems...',
    time: '2 hours ago',
    category: 'Events',
    isStarred: false
  },
  {
    id: 5,
    source: 'Spaces',
    icon: Users,
    color: 'from-green-500 to-green-600',
    sender: 'ML Project Team',
    subject: 'Dataset uploaded to shared drive',
    preview: 'I\'ve uploaded the cleaned dataset to our Google Drive. Please review before tomorrow\'s meeting...',
    time: '3 hours ago',
    category: 'Academic',
    isStarred: false
  },
  {
    id: 6,
    source: 'Gmail',
    icon: Mail,
    color: 'from-red-500 to-red-600',
    sender: 'Career Services',
    subject: 'Tech Talk: Google Engineers - Tomorrow 4 PM',
    preview: 'Join us for an exciting tech talk with Google engineers discussing career paths in tech...',
    time: '5 hours ago',
    category: 'Events',
    isStarred: false
  },
  {
    id: 7,
    source: 'Slack',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
    sender: '#general',
    subject: 'Campus fest registrations open',
    preview: 'TechFest 2026 registrations are now open! Register your team for hackathon and coding competitions...',
    time: '6 hours ago',
    category: 'Events',
    isStarred: false
  }
];

export default function UnifiedFeed() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [starredItems, setStarredItems] = useState<number[]>(
    feedItems.filter(item => item.isStarred).map(item => item.id)
  );

  const filteredItems = feedItems.filter(item =>
    selectedFilter === 'All' || item.category === selectedFilter
  );

  const toggleStar = (id: number) => {
    setStarredItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Unified Feed</h1>
        <p className="text-gray-600 dark:text-gray-400">
          All your messages from Gmail, Slack, Spaces, Discord, and Canvas in one place
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Filter:</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Feed Items */}
      <div className="space-y-4">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
          >
            <div className="flex gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {item.source}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">{item.sender}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.subject}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {item.preview}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <button
                      onClick={() => toggleStar(item.id)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          starredItems.includes(item.id)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'Urgent'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : item.category === 'Academic'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

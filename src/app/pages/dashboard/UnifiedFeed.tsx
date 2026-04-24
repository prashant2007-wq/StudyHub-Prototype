import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, BookOpen, MessageCircle, Users, Filter, Clock, Star } from 'lucide-react';

const filters = ['All', 'Urgent', 'Academic', 'Events', 'Personal'];

interface FeedItem {
  id: number;
  source: string;
  icon?: any;
  color?: string;
  sender?: string;
  subject?: string;
  title?: string;
  preview?: string;
  time: string;
  category?: string;
  type?: string;
  isStarred?: boolean;
}

export default function UnifiedFeed() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [starredItems, setStarredItems] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications');
        const data = await res.json();
        // Map backend data to UI format
        const mappedData = data.map((item: any) => ({
          ...item,
          subject: item.title,
          preview: item.preview || 'Check platform for details...',
          category: item.type === 'alert' ? 'Urgent' : 'Academic',
          isStarred: false,
          sender: item.source === 'Slack' ? '#general' : 'System',
          color: 'from-neutral-800 to-neutral-900', // Minimalist neutral gradient
          icon: item.source === 'Slack' ? MessageSquare : item.source === 'Gmail' ? Mail : BookOpen
        }));
        setFeedItems(mappedData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

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
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">Unified Feed</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          All your messages from Gmail, Slack, Spaces, Discord, and Canvas in one place.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-4 flex-wrap pb-2">
          <div className="flex items-center gap-2 text-neutral-500">
            <Filter className="w-4 h-4" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                    : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Feed Items */}
      <div className="space-y-3">
        {loading ? (
          <div className="text-neutral-500 text-sm">Fetching notifications...</div>
        ) : filteredItems.length === 0 ? (
          <div className="text-neutral-500 text-sm">No notifications found.</div>
        ) : (
          filteredItems.map((item, index) => {
            const Icon = item.icon || MessageSquare;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-5 border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all group"
              >
                <div className="flex gap-4">
                  {/* Minimalist Icon */}
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                    <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold tracking-wide uppercase text-neutral-900 dark:text-white">
                            {item.source}
                          </span>
                          <span className="text-xs text-neutral-300 dark:text-neutral-700">•</span>
                          <span className="text-xs text-neutral-500">{item.sender}</span>
                        </div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                          {item.subject}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 pr-4">
                          {item.preview}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => toggleStar(item.id)}
                          className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors text-neutral-400"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              starredItems.includes(item.id)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'hover:text-neutral-600 dark:hover:text-neutral-300'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                        item.category === 'Urgent'
                          ? 'bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/10 dark:border-red-900/30'
                          : 'bg-neutral-100 text-neutral-600 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}

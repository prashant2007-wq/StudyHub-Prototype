import { motion } from 'motion/react';
import {
  Mail,
  MessageSquare,
  BookOpen,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Clock,
  AlertTriangle,
  MapPin,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';

const connectedApps = [
  { name: 'Gmail', icon: Mail, status: 'synced', lastSync: '2 min ago', color: 'from-red-500 to-red-600' },
  { name: 'Slack', icon: MessageSquare, status: 'synced', lastSync: '5 min ago', color: 'from-purple-500 to-purple-600' },
  { name: 'Canvas', icon: BookOpen, status: 'synced', lastSync: '10 min ago', color: 'from-orange-500 to-orange-600' },
  { name: 'Discord', icon: MessageCircle, status: 'synced', lastSync: '1 min ago', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Calendar', icon: Calendar, status: 'synced', lastSync: 'Just now', color: 'from-blue-500 to-blue-600' },
  { name: 'Spaces', icon: Users, status: 'synced', lastSync: '3 min ago', color: 'from-green-500 to-green-600' }
];

const todaySchedule = [
  { time: '09:00 AM', title: 'Data Structures & Algorithms', type: 'lecture', location: 'Room 301' },
  { time: '11:00 AM', title: 'Machine Learning Lab', type: 'lab', location: 'Lab 2B' },
  { time: '02:00 PM', title: 'Database Management Systems', type: 'lecture', location: 'Room 205' },
  { time: '04:00 PM', title: 'Web Development Project Discussion', type: 'meeting', location: 'Online - Google Meet' }
];

const upcomingAssignments = [
  { title: 'DSA Assignment 3 - Graph Algorithms', course: 'Data Structures', due: '2 days', priority: 'high', progress: 60 },
  { title: 'ML Model Training Report', course: 'Machine Learning', due: '4 days', priority: 'medium', progress: 30 },
  { title: 'DBMS Query Optimization', course: 'Database Systems', due: '1 week', priority: 'low', progress: 10 }
];

const recentActivity = [
  { source: 'Gmail', message: 'Assignment reminder from Prof. Sharma', time: '10 min ago', icon: Mail },
  { source: 'Slack', message: 'New message in #project-discussions', time: '25 min ago', icon: MessageSquare },
  { source: 'Canvas', message: 'Grades posted for Quiz 2', time: '1 hour ago', icon: BookOpen },
  { source: 'Discord', message: 'Study group meeting at 6 PM', time: '2 hours ago', icon: MessageCircle }
];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Priya! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your academics today
        </p>
      </motion.div>

      {/* Connected Apps Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Connected Apps</h2>
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">All synced</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {connectedApps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group"
            >
              <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{app.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{app.lastSync}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Event Conflict Resolver */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Conflict Detected</h3>
              <span className="px-2 py-1 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-xs font-semibold rounded-full">
                AI Suggestion
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have overlapping events on Thursday, 2:00 PM - 3:00 PM
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">ML Lab Session</h4>
                  <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
                    Option 1
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Lab 2B</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Attendance: Required</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Study Group Meeting</h4>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                    Option 2
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Library - Room 3</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Can be rescheduled</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">AI Recommendation</p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Attend ML Lab (required attendance). Study group can be moved to 4:00 PM.
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Daily Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Today's Schedule</h2>
          <div className="space-y-4">
            {todaySchedule.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 text-center">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.time}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'lecture'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : item.type === 'lab'
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  }`}>
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Assignments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Assignments</h2>
          <div className="space-y-4">
            {upcomingAssignments.map((assignment, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{assignment.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    assignment.priority === 'high'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : assignment.priority === 'medium'
                      ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  }`}>
                    {assignment.priority}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Due in {assignment.due}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{assignment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${assignment.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Unified Feed Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
            View all
          </button>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <activity.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{activity.source}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-900 dark:text-white">{activity.message}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

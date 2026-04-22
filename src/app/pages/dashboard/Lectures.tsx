import { motion } from 'motion/react';
import { Video, FileText, Code, Database, Play, Download, Calendar, Clock } from 'lucide-react';

const recordedLectures = [
  {
    course: 'Data Structures & Algorithms',
    title: 'Graph Algorithms - BFS and DFS',
    date: 'April 18, 2026',
    duration: '1h 25m',
    materials: ['Slides', 'Code', 'Dataset'],
    thumbnail: 'from-blue-500 to-indigo-600'
  },
  {
    course: 'Machine Learning',
    title: 'Neural Networks - Backpropagation',
    date: 'April 17, 2026',
    duration: '1h 40m',
    materials: ['Slides', 'Code', 'Dataset'],
    thumbnail: 'from-purple-500 to-pink-600'
  },
  {
    course: 'Database Systems',
    title: 'Query Optimization Techniques',
    date: 'April 16, 2026',
    duration: '1h 15m',
    materials: ['Slides'],
    thumbnail: 'from-orange-500 to-red-600'
  }
];

const upcomingClasses = [
  {
    course: 'Data Structures & Algorithms',
    title: 'Dynamic Programming',
    time: 'Today, 09:00 AM',
    location: 'Room 301',
    type: 'Lecture'
  },
  {
    course: 'Machine Learning',
    title: 'Hands-on Model Training',
    time: 'Today, 11:00 AM',
    location: 'Lab 2B',
    type: 'Lab'
  },
  {
    course: 'Database Systems',
    title: 'Transaction Management',
    time: 'Tomorrow, 02:00 PM',
    location: 'Room 205',
    type: 'Lecture'
  }
];

export default function Lectures() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Lectures</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Access recorded lectures, materials, and upcoming live sessions
        </p>
      </motion.div>

      {/* Upcoming Classes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Classes</h2>
        <div className="space-y-4">
          {upcomingClasses.map((classItem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">{classItem.course}</p>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{classItem.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{classItem.location}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                  Join Live
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recorded Lectures */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recorded Lectures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordedLectures.map((lecture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Thumbnail */}
              <div className={`relative h-40 bg-gradient-to-br ${lecture.thumbnail} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <button className="relative z-10 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-gray-900 ml-1" />
                </button>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium">
                  {lecture.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">{lecture.course}</p>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{lecture.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{lecture.date}</p>

                {/* Materials */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {lecture.materials.map((material, idx) => (
                    <button
                      key={idx}
                      className="flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      {material === 'Slides' && <FileText className="w-3 h-3" />}
                      {material === 'Code' && <Code className="w-3 h-3" />}
                      {material === 'Dataset' && <Database className="w-3 h-3" />}
                      {material}
                    </button>
                  ))}
                </div>

                <button className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download All
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

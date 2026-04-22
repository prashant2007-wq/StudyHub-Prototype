import { motion } from 'motion/react';
import { BookOpen, FileText, Video, Code, Database, Users, ChevronRight } from 'lucide-react';

const courses = [
  {
    name: 'Data Structures & Algorithms',
    code: 'CS301',
    instructor: 'Prof. Sharma',
    color: 'from-blue-500 to-indigo-600',
    materials: {
      notes: 12,
      slides: 15,
      videos: 8,
      code: 20
    },
    recentlyAdded: [
      { type: 'slides', title: 'Graph Algorithms - Part 2', date: 'Yesterday' },
      { type: 'code', title: 'BFS and DFS Implementation', date: '2 days ago' }
    ]
  },
  {
    name: 'Machine Learning',
    code: 'CS401',
    instructor: 'Prof. Kumar',
    color: 'from-purple-500 to-pink-600',
    materials: {
      notes: 10,
      slides: 12,
      videos: 6,
      code: 15
    },
    recentlyAdded: [
      { type: 'video', title: 'Neural Networks Lecture', date: 'Yesterday' },
      { type: 'code', title: 'Backpropagation Implementation', date: '3 days ago' }
    ]
  },
  {
    name: 'Database Management Systems',
    code: 'CS302',
    instructor: 'Prof. Patel',
    color: 'from-orange-500 to-red-600',
    materials: {
      notes: 8,
      slides: 10,
      videos: 5,
      code: 12
    },
    recentlyAdded: [
      { type: 'slides', title: 'Query Optimization', date: '2 days ago' },
      { type: 'notes', title: 'Transaction Management Notes', date: '4 days ago' }
    ]
  },
  {
    name: 'Web Development',
    code: 'CS305',
    instructor: 'Prof. Singh',
    color: 'from-green-500 to-teal-600',
    materials: {
      notes: 6,
      slides: 8,
      videos: 10,
      code: 25
    },
    recentlyAdded: [
      { type: 'code', title: 'React Hooks Examples', date: 'Today' },
      { type: 'video', title: 'Building REST APIs', date: 'Yesterday' }
    ]
  },
  {
    name: 'Computer Networks',
    code: 'CS303',
    instructor: 'Prof. Reddy',
    color: 'from-cyan-500 to-blue-600',
    materials: {
      notes: 7,
      slides: 9,
      videos: 4,
      code: 8
    },
    recentlyAdded: [
      { type: 'slides', title: 'TCP/IP Protocol Stack', date: '2 days ago' },
      { type: 'notes', title: 'Network Security Notes', date: '5 days ago' }
    ]
  },
  {
    name: 'Operating Systems',
    code: 'CS304',
    instructor: 'Prof. Gupta',
    color: 'from-pink-500 to-rose-600',
    materials: {
      notes: 9,
      slides: 11,
      videos: 7,
      code: 14
    },
    recentlyAdded: [
      { type: 'code', title: 'Process Scheduling Simulation', date: 'Yesterday' },
      { type: 'slides', title: 'Memory Management', date: '3 days ago' }
    ]
  }
];

export default function Courses() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Courses</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Access all your course materials, notes, slides, and videos
        </p>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
          >
            {/* Header */}
            <div className={`bg-gradient-to-br ${course.color} p-6 text-white`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">{course.code}</p>
                  <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <p className="text-white/90 text-sm">{course.instructor}</p>
                  </div>
                </div>
                <BookOpen className="w-8 h-8 text-white/80" />
              </div>

              {/* Material Counts */}
              <div className="grid grid-cols-4 gap-3 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">{course.materials.notes}</div>
                  <div className="text-xs text-white/80">Notes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{course.materials.slides}</div>
                  <div className="text-xs text-white/80">Slides</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{course.materials.videos}</div>
                  <div className="text-xs text-white/80">Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{course.materials.code}</div>
                  <div className="text-xs text-white/80">Code</div>
                </div>
              </div>
            </div>

            {/* Recently Added */}
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Recently Added</h4>
              <div className="space-y-3">
                {course.recentlyAdded.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.type === 'slides' && <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                      {item.type === 'video' && <Video className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                      {item.type === 'code' && <Code className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                      {item.type === 'notes' && <BookOpen className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{item.date}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                View All Materials
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

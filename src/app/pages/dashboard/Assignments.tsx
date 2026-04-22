import { motion } from 'motion/react';
import { Clock, CheckCircle2, AlertCircle, Calendar, FileText, ExternalLink } from 'lucide-react';

const assignments = [
  {
    title: 'DSA Assignment 3 - Graph Algorithms',
    course: 'Data Structures & Algorithms',
    dueDate: 'April 24, 2026',
    daysLeft: 2,
    status: 'pending',
    priority: 'high',
    progress: 60,
    description: 'Implement BFS, DFS, and Dijkstra\'s algorithm',
    points: 100
  },
  {
    title: 'ML Model Training Report',
    course: 'Machine Learning',
    dueDate: 'April 26, 2026',
    daysLeft: 4,
    status: 'pending',
    priority: 'medium',
    progress: 30,
    description: 'Train a neural network and document the process',
    points: 150
  },
  {
    title: 'DBMS Query Optimization',
    course: 'Database Systems',
    dueDate: 'April 29, 2026',
    daysLeft: 7,
    status: 'pending',
    priority: 'low',
    progress: 10,
    description: 'Optimize given SQL queries for better performance',
    points: 80
  },
  {
    title: 'Web Dev - React Project',
    course: 'Web Development',
    dueDate: 'May 1, 2026',
    daysLeft: 9,
    status: 'pending',
    priority: 'medium',
    progress: 45,
    description: 'Build a full-stack application using React and Node.js',
    points: 200
  },
  {
    title: 'Network Security Analysis',
    course: 'Computer Networks',
    dueDate: 'April 20, 2026',
    daysLeft: -2,
    status: 'overdue',
    priority: 'high',
    progress: 85,
    description: 'Analyze network vulnerabilities and propose solutions',
    points: 100
  },
  {
    title: 'OS Process Scheduling',
    course: 'Operating Systems',
    dueDate: 'April 15, 2026',
    daysLeft: -7,
    status: 'submitted',
    priority: 'medium',
    progress: 100,
    description: 'Implement various scheduling algorithms',
    points: 120
  }
];

export default function Assignments() {
  const pendingAssignments = assignments.filter(a => a.status === 'pending');
  const overdueAssignments = assignments.filter(a => a.status === 'overdue');
  const submittedAssignments = assignments.filter(a => a.status === 'submitted');

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Assignments</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track all your assignments with progress bars and status updates
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Pending</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{pendingAssignments.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-1">Overdue</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{overdueAssignments.length}</p>
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">Submitted</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{submittedAssignments.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Overdue Assignments */}
      {overdueAssignments.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-red-200 dark:border-red-800"
        >
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Overdue Assignments
          </h2>
          <div className="space-y-4">
            {overdueAssignments.map((assignment, index) => (
              <div
                key={index}
                className="p-5 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{assignment.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                  </div>
                  <span className="px-3 py-1 bg-red-200 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-semibold rounded-full">
                    {Math.abs(assignment.daysLeft)} days overdue
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{assignment.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{assignment.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <span>{assignment.points} points</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
                    Submit Now
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Pending Assignments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Pending Assignments</h2>
        <div className="space-y-4">
          {pendingAssignments.map((assignment, index) => (
            <div
              key={index}
              className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{assignment.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.priority === 'high'
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                        : assignment.priority === 'medium'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    }`}>
                      {assignment.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  assignment.daysLeft <= 2
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    : assignment.daysLeft <= 5
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                }`}>
                  {assignment.daysLeft} days left
                </span>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{assignment.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{assignment.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      assignment.progress < 30
                        ? 'bg-gradient-to-r from-red-500 to-orange-500'
                        : assignment.progress < 70
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500'
                    }`}
                    style={{ width: `${assignment.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{assignment.points} points</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  Continue
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Submitted Assignments */}
      {submittedAssignments.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Submitted Assignments
          </h2>
          <div className="space-y-3">
            {submittedAssignments.map((assignment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{assignment.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.course}</p>
                  </div>
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  View Submission
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Bell,
  MessageCircle,
  Calendar,
  AlertCircle,
  Award,
  Megaphone,
  Phone,
  CheckCircle2,
  User,
  Lock,
  Palette,
  Globe,
  HelpCircle
} from 'lucide-react';

export default function Settings() {
  const [phoneNumber, setPhoneNumber] = useState('+91 98765 43210');
  const [isVerified, setIsVerified] = useState(true);
  const [notifications, setNotifications] = useState({
    deadlines: true,
    classCancellations: true,
    eventConflicts: true,
    grades: false,
    announcements: true
  });

  const toggleNotification = (key: string) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const notificationOptions = [
    {
      key: 'deadlines',
      icon: Calendar,
      title: 'Assignment Deadlines',
      description: 'Get reminded 24 hours before assignment due dates',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      key: 'classCancellations',
      icon: Bell,
      title: 'Class Cancellations',
      description: 'Instant alerts when classes are cancelled or rescheduled',
      color: 'from-red-500 to-orange-600'
    },
    {
      key: 'eventConflicts',
      icon: AlertCircle,
      title: 'Event Conflicts',
      description: 'AI-detected schedule conflicts with smart recommendations',
      color: 'from-amber-500 to-orange-600'
    },
    {
      key: 'grades',
      icon: Award,
      title: 'Grades Posted',
      description: 'Get notified when new grades are available',
      color: 'from-green-500 to-emerald-600'
    },
    {
      key: 'announcements',
      icon: Megaphone,
      title: 'Important Announcements',
      description: 'Updates from professors and university administration',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your notifications, preferences, and account settings
        </p>
      </motion.div>

      {/* WhatsApp Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">WhatsApp Notifications</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get important updates delivered to your WhatsApp
            </p>
          </div>
        </div>

        {/* Phone Number Verification */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Phone Number</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{phoneNumber}</p>
              </div>
            </div>
            {isVerified && (
              <div className="flex items-center gap-2 px-3 py-1 bg-green-200 dark:bg-green-900/50 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-green-700 dark:text-green-300" />
                <span className="text-xs font-semibold text-green-700 dark:text-green-300">Verified</span>
              </div>
            )}
          </div>
          {!isVerified && (
            <button className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              Verify Phone Number
            </button>
          )}
        </div>

        {/* Notification Preferences */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
          {notificationOptions.map((option, index) => (
            <motion.div
              key={option.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{option.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification(option.key)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  notifications[option.key as keyof typeof notifications]
                    ? 'bg-green-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications[option.key as keyof typeof notifications]
                      ? 'translate-x-7'
                      : 'translate-x-0'
                  }`}
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Info */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="flex gap-3">
            <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-100">
              <p className="font-semibold mb-1">How WhatsApp notifications work</p>
              <p className="text-blue-700 dark:text-blue-300">
                We'll send you a WhatsApp message when important events occur. You can control which notifications you receive above. Your phone number is kept secure and never shared.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Account Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h2>
        <div className="space-y-3">
          {[
            { icon: User, title: 'Profile Information', description: 'Update your name, email, and bio' },
            { icon: Lock, title: 'Privacy & Security', description: 'Manage your password and security settings' },
            { icon: Palette, title: 'Appearance', description: 'Customize theme and display preferences' },
            { icon: Globe, title: 'Language & Region', description: 'Set your preferred language and timezone' }
          ].map((setting, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <setting.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{setting.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{setting.description}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Connected Apps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connected Applications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Gmail', status: 'Connected', color: 'green' },
            { name: 'Slack', status: 'Connected', color: 'green' },
            { name: 'Canvas', status: 'Connected', color: 'green' },
            { name: 'Discord', status: 'Connected', color: 'green' },
            { name: 'Google Calendar', status: 'Connected', color: 'green' },
            { name: 'Google Spaces', status: 'Connected', color: 'green' }
          ].map((app, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{app.name}</p>
                <p className="text-sm text-green-600 dark:text-green-400">{app.status}</p>
              </div>
              <button className="px-4 py-2 text-sm text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                Disconnect
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

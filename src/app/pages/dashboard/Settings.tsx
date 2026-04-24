import { useState, useEffect } from 'react';
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
  HelpCircle,
  GraduationCap
} from 'lucide-react';

export default function Settings() {
  const [phoneNumber, setPhoneNumber] = useState('+91 98765 43210');
  const [isVerified, setIsVerified] = useState(true);
  
  const [universityDetails, setUniversityDetails] = useState({
    rollNumber: '',
    branch: '',
    batch: ''
  });
  const [isSavingUni, setIsSavingUni] = useState(false);

  const [notifications, setNotifications] = useState({
    deadlines: true,
    classCancellations: true,
    eventConflicts: true,
    grades: false,
    announcements: true
  });

  useEffect(() => {
    // Fetch university settings on mount
    fetch('/api/settings/university')
      .then(res => res.json())
      .then(data => {
        if (data.details) {
          setUniversityDetails(prev => ({ ...prev, ...data.details }));
        }
      })
      .catch(console.error);
  }, []);

  const handleSaveUniversity = async () => {
    setIsSavingUni(true);
    try {
      await fetch('/api/settings/university', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ details: universityDetails })
      });
      // show success feedback if needed
    } catch (err) {
      console.error(err);
    } finally {
      setIsSavingUni(false);
    }
  };

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
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">Settings</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Manage your notifications, preferences, and account settings
        </p>
      </motion.div>

      {/* University Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-neutral-900 dark:text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">University Details</h2>
            <p className="text-sm text-neutral-500">Provide your college info for personalized insights</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Roll Number</label>
            <input
              type="text"
              value={universityDetails.rollNumber}
              onChange={e => setUniversityDetails({ ...universityDetails, rollNumber: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
              placeholder="e.g. 2024CS01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Branch / Course</label>
            <input
              type="text"
              value={universityDetails.branch}
              onChange={e => setUniversityDetails({ ...universityDetails, branch: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
              placeholder="e.g. Computer Science"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Graduation Year</label>
            <input
              type="text"
              value={universityDetails.batch}
              onChange={e => setUniversityDetails({ ...universityDetails, batch: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
              placeholder="e.g. 2028"
            />
          </div>
        </div>
        <button
          onClick={handleSaveUniversity}
          disabled={isSavingUni}
          className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
        >
          {isSavingUni ? 'Saving...' : 'Save Details'}
        </button>
      </motion.div>

      {/* WhatsApp Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">WhatsApp Alerts</h2>
            <p className="text-sm text-neutral-500">Get important updates delivered to your phone</p>
          </div>
        </div>

        {/* Phone Number Verification */}
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-xl p-5 border border-neutral-200 dark:border-neutral-800 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-neutral-500" />
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white text-sm">Phone Number</p>
              <p className="text-sm text-neutral-500">{phoneNumber}</p>
            </div>
          </div>
          {isVerified ? (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-semibold text-green-600 dark:text-green-400">Verified</span>
            </div>
          ) : (
            <button className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-medium">
              Verify
            </button>
          )}
        </div>

        {/* Notification Preferences */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Preferences</h3>
          {notificationOptions.map((option, index) => (
            <div
              key={option.key}
              className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <option.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{option.title}</h4>
                  <p className="text-xs text-neutral-500">{option.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification(option.key)}
                className={`relative w-11 h-6 rounded-full transition-colors focus:outline-none ${
                  notifications[option.key as keyof typeof notifications]
                    ? 'bg-neutral-900 dark:bg-white'
                    : 'bg-neutral-300 dark:bg-neutral-700'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white dark:bg-neutral-900 rounded-full transition-transform ${
                    notifications[option.key as keyof typeof notifications]
                      ? 'translate-x-5'
                      : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Account Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800"
      >
        <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Account Settings</h2>
        <div className="space-y-2">
          {[
            { icon: User, title: 'Profile Information', description: 'Update your name, email, and bio' },
            { icon: Lock, title: 'Privacy & Security', description: 'Manage your password and security settings' },
            { icon: Palette, title: 'Appearance', description: 'Customize theme and display preferences' },
            { icon: Globe, title: 'Language & Region', description: 'Set your preferred language and timezone' }
          ].map((setting, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                  <setting.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{setting.title}</h4>
                  <p className="text-xs text-neutral-500">{setting.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

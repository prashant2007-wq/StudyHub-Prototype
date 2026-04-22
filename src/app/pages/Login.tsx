import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { GraduationCap, ArrowLeft, Search, Eye, EyeOff, Mail } from 'lucide-react';

const UNIVERSITIES = [
  'Rishihood University',
  'IIT Delhi',
  'IIT Bombay',
  'IIT Madras',
  'IIT Kanpur',
  'IIT Kharagpur',
  'IIT Roorkee',
  'IIT Guwahati',
  'IIT Hyderabad',
  'IIT Indore',
  'IIT BHU Varanasi',
  'IIT Gandhinagar',
  'IIT Patna',
  'IIT Ropar',
  'IIT Bhubaneswar',
  'IIT Mandi',
  'IIT Jodhpur',
  'IIT Tirupati',
  'IIT Palakkad',
  'IIT Jammu',
  'IIT Dharwad',
  'IIT Bhilai',
  'IIT Goa',
  'NIT Trichy',
  'NIT Surathkal',
  'NIT Warangal',
  'NIT Calicut',
  'NIT Rourkela',
  'BITS Pilani',
  'BITS Goa',
  'BITS Hyderabad',
  'IIIT Hyderabad',
  'IIIT Delhi',
  'IIIT Bangalore',
  'Delhi University',
  'Jawaharlal Nehru University',
  'Anna University',
  'Jadavpur University',
  'Vellore Institute of Technology',
  'Manipal Institute of Technology',
  'SRM Institute of Science and Technology',
  'Amity University',
  'Lovely Professional University',
  'Shiv Nadar University'
];

export default function Login() {
  const [isDark, setIsDark] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const filteredUniversities = UNIVERSITIES.filter(uni =>
    uni.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleGoogleSSO = () => {
    navigate('/dashboard');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Background */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900">
        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="fixed top-6 left-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Login Card */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Logo & Title */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Welcome to StudyHub</h1>
                <p className="text-white/70">Sign in to access your unified dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* University Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-white mb-2">
                    Select Your University
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white text-left focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    >
                      {selectedUniversity || 'Choose your university...'}
                    </button>

                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-20 w-full mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-80 overflow-hidden"
                      >
                        {/* Search */}
                        <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Search universities..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                        </div>

                        {/* Universities List */}
                        <div className="overflow-y-auto max-h-64">
                          {filteredUniversities.map((university, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setSelectedUniversity(university);
                                setIsDropdownOpen(false);
                                setSearchQuery('');
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                index === 0
                                  ? 'bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-500'
                                  : ''
                              } ${
                                selectedUniversity === university
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                                  : 'text-gray-900 dark:text-white'
                              }`}
                            >
                              {university}
                              {index === 0 && (
                                <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    College Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="student@rishihood.edu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Login
                </motion.button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-white/70">Or continue with</span>
                  </div>
                </div>

                {/* Google SSO */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleGoogleSSO}
                  className="w-full py-3 bg-white/10 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Sign in with Google
                </motion.button>
              </form>

              {/* Footer */}
              <p className="text-center text-white/60 text-sm mt-6">
                Don't have an account?{' '}
                <button className="text-white font-semibold hover:underline">
                  Sign up
                </button>
              </p>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-6 text-white/70 text-sm"
            >
              <p>Secure login • End-to-end encrypted</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

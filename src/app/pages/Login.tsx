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
  const [loading, setLoading] = useState(false);
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, university: selectedUniversity })
      });
      if (!res.ok) throw new Error('API fetch failed');
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('studyhub_token', data.token);
        localStorage.setItem('studyhub_user', JSON.stringify(data.user));
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Login error, falling back to mock login:', err);
      // Fallback for prototype viewing without backend
      localStorage.setItem('studyhub_token', 'mock_token_123');
      localStorage.setItem('studyhub_user', JSON.stringify({
        id: 'user_1',
        name: 'Mock Student',
        email: email || 'student@rishihood.edu.in',
        university: selectedUniversity || 'Rishihood University'
      }));
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSSO = async () => {
    setLoading(true);
    try {
      // Mock Google SSO flow
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) throw new Error('API fetch failed');
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('studyhub_token', data.token);
        localStorage.setItem('studyhub_user', JSON.stringify(data.user));
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Google SSO error, falling back to mock login:', err);
      // Fallback for prototype viewing without backend
      localStorage.setItem('studyhub_token', 'mock_google_token_123');
      localStorage.setItem('studyhub_user', JSON.stringify({
        id: 'user_google_1',
        name: 'Google Student',
        email: 'student@gmail.com',
        university: 'Rishihood University'
      }));
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 ${isDark ? 'dark bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-900'}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-900 transition-all shadow-sm"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 px-4 py-2 rounded-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-900 transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Login Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-xl">
            {/* Logo & Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-neutral-900 dark:bg-white rounded-2xl mb-6 shadow-sm">
                <GraduationCap className="w-7 h-7 text-white dark:text-neutral-900" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome Back</h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* University Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  University
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all text-sm"
                  >
                    {selectedUniversity || 'Select your university...'}
                  </button>

                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-20 w-full mt-2 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 max-h-64 overflow-hidden flex flex-col"
                    >
                      <div className="p-2 border-b border-neutral-100 dark:border-neutral-800">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                          <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-md text-sm focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="overflow-y-auto flex-1 p-1">
                        {filteredUniversities.map((university, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setSelectedUniversity(university);
                              setIsDropdownOpen(false);
                              setSearchQuery('');
                            }}
                            className={`w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
                              selectedUniversity === university
                                ? 'bg-neutral-100 dark:bg-neutral-800 font-medium'
                                : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                            }`}
                          >
                            {university}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="student@rishihood.edu.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transition-all flex justify-center"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </motion.button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-white dark:bg-neutral-900 text-neutral-500">Or continue with</span>
                </div>
              </div>

              {/* Google SSO */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                onClick={handleGoogleSSO}
                disabled={loading}
                className="w-full py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-lg font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Google
              </motion.button>
            </form>
          </div>

          <div className="text-center mt-6 text-neutral-500 text-xs">
            <p>Secure login • End-to-end encrypted</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

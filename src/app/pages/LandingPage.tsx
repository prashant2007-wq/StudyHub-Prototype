import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import {
  GraduationCap,
  Zap,
  Target,
  Bell,
  Sparkles,
  Mail,
  MessageSquare,
  BookOpen,
  Calendar,
  MessageCircle,
  ArrowRight,
  Check,
  Star,
  Layers,
  LayoutDashboard
} from 'lucide-react';

export default function LandingPage() {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 ${isDark ? 'dark bg-neutral-950' : 'bg-neutral-50'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-900 transition-all shadow-sm"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white dark:text-neutral-900" />
          </div>
          <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">StudyHub</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#integrations" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Integrations</a>
          <button onClick={handleGetStarted} className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full hover:scale-105 transition-transform">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wider">The New Standard for Students</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-neutral-950 dark:text-white mb-6 leading-[1.1]">
              Clarity for your <br/><span className="text-neutral-400 dark:text-neutral-500">academic life.</span>
            </h1>

            <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg leading-relaxed font-light">
              A minimalist, unified workspace. Sync your schedule, track assignments, and manage deadlines without the noise.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
              >
                View Demo
              </motion.button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-200 dark:bg-neutral-800" />
                ))}
              </div>
              <p>Trusted by <span className="font-semibold text-neutral-900 dark:text-white">10,000+</span> top students</p>
            </div>
          </motion.div>

          {/* Right Side - Minimalist Interface Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col">
              {/* App Header */}
              <div className="h-12 border-b border-neutral-100 dark:border-neutral-800 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                </div>
              </div>
              {/* App Body */}
              <div className="flex-1 flex p-4 gap-4 bg-neutral-50 dark:bg-neutral-950">
                {/* Sidebar */}
                <div className="w-48 hidden sm:flex flex-col gap-2">
                  <div className="h-8 bg-neutral-200/50 dark:bg-neutral-800/50 rounded-md w-full mb-4" />
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-6 bg-neutral-200/30 dark:bg-neutral-800/30 rounded w-3/4" />
                  ))}
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg w-1/3" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl" />
                    <div className="h-32 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl" />
                  </div>
                  <div className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 flex flex-col gap-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-full" />
                        <div className="flex-1">
                          <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2 mb-1" />
                          <div className="h-2 bg-neutral-100 dark:bg-neutral-800/50 rounded w-1/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white">Assignment Due</div>
                <div className="text-xs text-neutral-500">In 2 hours • Physics 101</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="py-32 bg-white dark:bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Everything in its right place.
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A carefully crafted suite of tools designed to remove friction from your workflow. No clutter, just performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[240px]">
            {/* Feature 1 - Large */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="md:col-span-2 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <LayoutDashboard className="w-8 h-8 text-neutral-900 dark:text-white mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Unified Command Center</h3>
                <p className="text-neutral-600 dark:text-neutral-400">All your classes, deadlines, and notifications organized intuitively in one single dashboard. Stop context switching.</p>
              </div>
              <div className="mt-8 flex gap-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="h-24 w-1/3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-t-xl" />
                <div className="h-32 w-1/3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-t-xl" />
                <div className="h-16 w-1/3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-t-xl" />
              </div>
            </motion.div>

            {/* Feature 2 - Small */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <Sparkles className="w-8 h-8 text-neutral-900 dark:text-white mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">AI Prioritization</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Automatically resolve scheduling conflicts and highlight what matters most.</p>
              </div>
            </motion.div>

            {/* Feature 3 - Small */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <MessageCircle className="w-8 h-8 text-neutral-900 dark:text-white mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">WhatsApp Alerts</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Get crucial deadlines pushed directly to your phone. Never miss a submission.</p>
              </div>
            </motion.div>

            {/* Feature 4 - Large */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="md:col-span-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border border-neutral-800 dark:border-neutral-200 rounded-3xl p-8 flex items-center justify-between overflow-hidden"
            >
              <div className="w-1/2">
                <Layers className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Seamless Integrations</h3>
                <p className="opacity-70">Connect Gmail, Slack, Canvas, and your University portals instantly.</p>
              </div>
              <div className="w-1/2 relative h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 dark:bg-black/5 rounded-full absolute animate-ping" />
                <Zap className="w-10 h-10 relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Ready to focus?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
            Join thousands of students who have optimized their academic workflow. Start for free today.
          </p>
          <motion.button
            onClick={handleGetStarted}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-neutral-900 dark:text-white" />
            <span className="font-semibold text-neutral-900 dark:text-white tracking-tight">StudyHub</span>
          </div>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


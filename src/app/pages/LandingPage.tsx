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
  Star
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
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Smart University Dashboard</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              All Your University Apps. <span className="text-blue-200">One Smart Dashboard.</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Track assignments, sync schedules, and never miss deadlines — across Gmail, Slack, Canvas & more.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                See Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">10,000+</div>
                <div className="text-white/70 text-sm">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50,000+</div>
                <div className="text-white/70 text-sm">Assignments Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-white/70 text-sm">Universities</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Animated Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500" />
                    <div className="flex-1">
                      <div className="h-3 bg-white/30 rounded-full w-3/4 mb-2" />
                      <div className="h-2 bg-white/20 rounded-full w-1/2" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful features designed for students
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to stay organized and on top of your academic life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Unified Dashboard',
                description: 'Connect Gmail, Slack, Canvas & more — all in one dashboard',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Sparkles,
                title: 'AI-Powered Insights',
                description: 'Smart context detection that learns from your workflow',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: Bell,
                title: 'Never Miss Deadlines',
                description: 'Track assignments across all platforms with smart reminders',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp Alerts',
                description: 'Important notifications delivered straight to WhatsApp',
                gradient: 'from-pink-500 to-red-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />

                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get started in 3 simple steps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              It takes less than 2 minutes to set up your unified dashboard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Arrows (Desktop) */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 to-purple-500" />
              </div>
            </div>

            {[
              {
                number: '1',
                title: 'Connect Your University',
                description: 'Choose from 100+ Indian universities including IITs, NITs, and more',
                icon: GraduationCap
              },
              {
                number: '2',
                title: 'Connect Your Apps',
                description: 'Link Gmail, Slack, Canvas, Discord, and other platforms you use',
                icon: Zap
              },
              {
                number: '3',
                title: 'Stay Organized',
                description: 'View everything in one place with AI-powered insights',
                icon: Target
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>

                  <div className="mb-4">
                    <step.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Your unified academic command center
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See all your assignments, deadlines, and notifications in one beautiful interface
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Browser Window */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4 h-6 bg-gray-200 dark:bg-gray-800 rounded-md" />
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6">
                  <div className="space-y-2">
                    {['Dashboard', 'Calendar', 'Assignments', 'Messages'].map((item, index) => (
                      <div
                        key={index}
                        className={`px-4 py-3 rounded-lg ${
                          index === 0
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        } transition-colors cursor-pointer`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                  <div className="space-y-4">
                    {['Event', 'Calendar', 'Assignment'].map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
                        <div className="flex-1">
                          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full w-3/4 mb-2" />
                          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Connects with all your tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Seamlessly integrate with the platforms you already use
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Mail, name: 'Gmail', color: 'from-red-500 to-red-600' },
              { icon: MessageSquare, name: 'Slack', color: 'from-purple-500 to-purple-600' },
              { icon: BookOpen, name: 'Canvas', color: 'from-orange-500 to-orange-600' },
              { icon: MessageCircle, name: 'Discord', color: 'from-indigo-500 to-indigo-600' },
              { icon: Calendar, name: 'Calendar', color: 'from-blue-500 to-blue-600' },
              { icon: MessageCircle, name: 'WhatsApp', color: 'from-green-500 to-green-600' }
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center gap-4 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-blue-900 dark:via-indigo-950 dark:to-purple-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              See what students are saying about StudyHub
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                university: 'IIT Delhi',
                quote: 'StudyHub made my life so much easier. No more juggling between 5 different apps!',
                initials: 'PS'
              },
              {
                name: 'Arjun Patel',
                university: 'NIT Trichy',
                quote: 'The AI context detection is a game-changer. It helped me prioritize my schedule perfectly.',
                initials: 'AP'
              },
              {
                name: 'Sneha Reddy',
                university: 'BITS Pilani',
                quote: 'Finally, a dashboard that understands university systems. WhatsApp alerts are amazing!',
                initials: 'SR'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/70 text-sm">{testimonial.university}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-800 dark:via-indigo-900 dark:to-purple-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to simplify your academic life?
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Join 10,000+ students already using StudyHub
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Schedule Demo
              </motion.button>
            </div>

            <p className="text-white/70 text-sm flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                No credit card required
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Setup in 2 minutes
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">StudyHub</span>
          </div>
          <p className="text-gray-400">
            © 2026 StudyHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

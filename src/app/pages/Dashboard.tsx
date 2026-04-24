import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';
import {
  Home,
  Inbox,
  Calendar,
  Video,
  BookOpen,
  CheckSquare,
  Bot,
  Settings,
  GraduationCap,
  Search,
  Bell,
  User,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';

const navigation = [
  { name: 'Home', icon: Home, path: '/dashboard' },
  { name: 'Unified Feed', icon: Inbox, path: '/dashboard/feed' },
  { name: 'Calendar', icon: Calendar, path: '/dashboard/calendar' },
  { name: 'Lectures', icon: Video, path: '/dashboard/lectures' },
  { name: 'Courses', icon: BookOpen, path: '/dashboard/courses' },
  { name: 'Assignments', icon: CheckSquare, path: '/dashboard/assignments' },
  { name: 'AI Assistant', icon: Bot, path: '/dashboard/ai-assistant' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 bg-neutral-50 dark:bg-neutral-950 ${isDark ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 z-40">
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white dark:text-neutral-900" />
          </div>
          <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">StudyHub</span>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                isActive(item.path)
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="h-full px-6 flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search assignments, courses, messages..."
                  className="w-full pl-9 pr-4 py-2 bg-neutral-100 dark:bg-neutral-800/50 border border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
                >
                  <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 font-semibold text-xs border border-neutral-300 dark:border-neutral-700">
                    PS
                  </div>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                    <div className="p-4 border-b border-neutral-100 dark:border-neutral-800">
                      <p className="font-semibold text-neutral-900 dark:text-white text-sm">Priya Sharma</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">student@rishihood.edu.in</p>
                    </div>
                    <div className="p-1.5">
                      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm transition-colors">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/10 text-red-600 dark:text-red-400 text-sm transition-colors mt-1"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const events = [
  { date: 22, title: 'DSA Lecture', time: '09:00 AM', type: 'lecture', location: 'Room 301' },
  { date: 22, title: 'ML Lab', time: '11:00 AM', type: 'lab', location: 'Lab 2B' },
  { date: 23, title: 'DBMS Exam', time: '10:00 AM', type: 'exam', location: 'Hall 1' },
  { date: 24, title: 'Assignment Due', time: '11:59 PM', type: 'deadline', location: 'Canvas' },
  { date: 25, title: 'Project Presentation', time: '02:00 PM', type: 'lecture', location: 'Room 205' },
  { date: 26, title: 'Study Group', time: '06:00 PM', type: 'event', location: 'Library' }
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 22)); // April 22, 2026
  const [selectedDate, setSelectedDate] = useState(22);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const selectedEvents = events.filter(e => e.date === selectedDate);

  const getEventCount = (day: number | null) => {
    if (!day) return 0;
    return events.filter(e => e.date === day).length;
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-blue-500';
      case 'lab': return 'bg-purple-500';
      case 'exam': return 'bg-red-500';
      case 'deadline': return 'bg-orange-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Calendar</h1>
        <p className="text-gray-600 dark:text-gray-400">
          All your lectures, labs, deadlines, and exams in one place
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center font-semibold text-gray-600 dark:text-gray-400 text-sm py-2">
                {day}
              </div>
            ))}
            {days.map((day, index) => {
              const eventCount = getEventCount(day);
              const hasEvents = eventCount > 0;
              const isSelected = day === selectedDate;
              const isToday = day === 22;

              return (
                <button
                  key={index}
                  onClick={() => day && setSelectedDate(day)}
                  disabled={!day}
                  className={`aspect-square p-2 rounded-xl transition-all relative ${
                    !day
                      ? 'invisible'
                      : isSelected
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : isToday
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  <span className="text-sm font-medium">{day}</span>
                  {hasEvents && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                      {events.filter(e => e.date === day).slice(0, 3).map((event, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-full ${
                            isSelected ? 'bg-white' : getEventTypeColor(event.type)
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Event Types:</p>
            <div className="flex flex-wrap gap-4">
              {[
                { type: 'lecture', label: 'Lectures', color: 'bg-blue-500' },
                { type: 'lab', label: 'Labs', color: 'bg-purple-500' },
                { type: 'exam', label: 'Exams', color: 'bg-red-500' },
                { type: 'deadline', label: 'Deadlines', color: 'bg-orange-500' },
                { type: 'event', label: 'Events', color: 'bg-green-500' }
              ].map(({ type, label, color }) => (
                <div key={type} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${color}`} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Selected Day Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {months[currentDate.getMonth()]} {selectedDate}, {currentDate.getFullYear()}
          </h3>

          {selectedEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4"
                  style={{ borderColor: getEventTypeColor(event.type).replace('bg-', '#').replace('500', '') }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'lecture'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : event.type === 'lab'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        : event.type === 'exam'
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                        : event.type === 'deadline'
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-500">No events scheduled for this day</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

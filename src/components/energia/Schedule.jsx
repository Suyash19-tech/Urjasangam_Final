"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

export function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('day1');

  const scheduleData = {
    day1: [
      { time: "08:00 AM", event: "Registration & Kit Distribution", venue: "Main Ground", type: "general" },
      { time: "09:00 AM", event: "Opening Ceremony & Torch Relay", venue: "Main Stadium", type: "ceremony" },
      { time: "10:00 AM", event: "Track & Field Heats", venue: "Athletics Track", type: "competition" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Food Court", type: "break" },
      { time: "02:00 PM", event: "Volleyball Qualifiers", venue: "Indoor Court", type: "competition" },
      { time: "04:00 PM", event: "Marathon Flag-off", venue: "University Gates", type: "special" },
      { time: "06:00 PM", event: "Cultural Evening & Bonfire", venue: "Open Grounds", type: "cultural" },
    ],
    day2: [
      { time: "09:00 AM", event: "Football Finals", venue: "Main Stadium", type: "competition" },
      { time: "11:00 AM", event: "Basketball Finals", venue: "Indoor Court", type: "competition" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Food Court", type: "break" },
      { time: "02:00 PM", event: "Cricket Finals", venue: "Cricket Ground", type: "competition" },
      { time: "04:00 PM", event: "Swimming Finals", venue: "Swimming Pool", type: "competition" },
      { time: "06:00 PM", event: "Prize Distribution", venue: "Main Stadium", type: "ceremony" },
      { time: "07:00 PM", event: "Closing Ceremony & Fireworks", venue: "Main Stadium", type: "ceremony" },
    ],
  };

  const getEventTypeColor = (type) => {
    const colors = {
      general: 'bg-gray-600 border-gray-400',
      ceremony: 'bg-pink-600 border-pink-400',
      competition: 'bg-violet-600 border-violet-400',
      break: 'bg-green-600 border-green-400',
      special: 'bg-orange-600 border-orange-400',
      cultural: 'bg-indigo-600 border-indigo-400',
    };
    return colors[type] || 'bg-gray-600 border-gray-400';
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Event Schedule</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-semibold">
            Map out your path to victory. Don't miss a moment of the action!
          </p>
        </motion.div>

        {/* Day Selector */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-full p-2 border border-violet-500/20">
            <button
              onClick={() => setSelectedDay('day1')}
              className={`relative px-8 py-3 rounded-full font-black transition-all duration-300 ${
                selectedDay === 'day1' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {selectedDay === 'day1' && <motion.div layoutId="activeDay" className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />}
              <span className="relative z-10">Day 1 - Nov 10</span>
            </button>
            <button
              onClick={() => setSelectedDay('day2')}
              className={`relative px-8 py-3 rounded-full font-black transition-all duration-300 ${
                selectedDay === 'day2' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {selectedDay === 'day2' && <motion.div layoutId="activeDay" className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />}
              <span className="relative z-10">Day 2 - Nov 11</span>
            </button>
          </div>
        </motion.div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-violet-500/30 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {scheduleData[selectedDay].map((item, index) => (
                <motion.div
                  key={item.event + selectedDay}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-violet-700 to-purple-800 border-4 border-gray-900 rounded-full flex items-center justify-center z-10 shadow-lg shadow-violet-500/30">
                    <span className="text-xs font-bold text-center leading-tight">
                      {item.time.split(' ')[0]}
                      <br />
                      {item.time.split(' ')[1]}
                    </span>
                  </div>

                  <div
                    className={`ml-28 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div
                      className={`${getEventTypeColor(
                        item.type
                      )} p-6 rounded-xl border-2 shadow-lg hover:scale-105 transition-transform duration-300 bg-opacity-40 backdrop-blur-md`}
                    >
                      <h3 className="text-xl font-black mb-2">{item.event}</h3>
                      <p className="text-sm text-white/80 font-semibold">📍 {item.venue}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {Object.entries({
            'Competition': 'bg-violet-600 border-violet-400',
            'Special Event': 'bg-orange-600 border-orange-400',
            'Ceremony': 'bg-pink-600 border-pink-400',
            'Break': 'bg-green-600 border-green-400',
            'Cultural': 'bg-indigo-600 border-indigo-400',
          }).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${value.split(' ')[0]} border-2 ${value.split(' ')[1]} rounded`}></div>
              <span className="text-sm text-gray-400 font-semibold">{key}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


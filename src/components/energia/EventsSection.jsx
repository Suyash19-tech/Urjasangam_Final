"use client"

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function EventsSection() {
  const [activeTab, setActiveTab] = useState('indoor');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const indoorEventsData = [
    { title: "Basketball", icon: "🏀", date: "12-13 November", time: "10:00 AM Onwards", venue: "Indoor Sports Complex", description: "High-flying dunks and fast-paced action. Assemble your team and dominate the court.", participants: "Teams of 5", prizePool: "Trophy & Medals" },
    { title: "Badminton", icon: "🏸", date: "12 November", time: "9:00 AM Onwards", venue: "Badminton Courts", description: "A test of agility, precision, and speed. Compete in singles or doubles categories.", participants: "Singles & Doubles", prizePool: "Trophy & Medals" },
    { title: "Table Tennis", icon: "🏓", date: "13 November", time: "9:00 AM Onwards", venue: "Indoor Sports Complex", description: "Experience lightning-fast rallies and incredible spin shots in this classic indoor sport.", participants: "Singles & Doubles", prizePool: "Trophy & Medals" },
    { title: "Chess", icon: "♟️", date: "12 November", time: "11:00 AM Onwards", venue: "Student Activity Centre", description: "Outwit your opponents in the ultimate game of strategy. Checkmate your way to victory.", participants: "Individual", prizePool: "Trophy & Medals" },
    { title: "Volleyball", icon: "🏐", date: "13 November", time: "10:00 AM Onwards", venue: "Indoor Sports Complex", description: "Spike, set, and serve your way to glory in this thrilling team-based competition.", participants: "Teams of 6", prizePool: "Trophy & Medals" }
  ];

  const outdoorEventsData = [
    { title: "Football", icon: "⚽", date: "12-13 November", time: "8:00 AM Onwards", venue: "Main Sports Ground", description: "The beautiful game. Showcase your teamwork, skill, and passion to score the winning goal.", participants: "Teams of 11", prizePool: "Trophy & Medals" },
    { title: "Cricket", icon: "🏏", date: "12-13 November", time: "8:00 AM Onwards", venue: "Cricket Pitch", description: "A battle of bat and ball. Compete in a fast-paced T20 format for the championship title.", participants: "Teams of 11", prizePool: "Trophy & Medals" },
    { title: "Athletics", icon: "🏃‍♂️", date: "13 November", time: "9:00 AM Onwards", venue: "Athletics Track", description: "Push your limits in track and field events including sprints, relays, and long jump.", participants: "Individual & Teams", prizePool: "Trophy & Medals" },
    { title: "Lawn Tennis", icon: "🎾", date: "12 November", time: "10:00 AM Onwards", venue: "Tennis Courts", description: "Serve an ace and dominate the court in intense singles and doubles matches.", participants: "Singles & Doubles", prizePool: "Trophy & Medals" },
    { title: "Kabaddi", icon: "🤸‍♂️", date: "13 November", time: "4:00 PM Onwards", venue: "Kabaddi Court", description: "A traditional sport of strength, strategy, and breath control. Raid and defend for points.", participants: "Teams of 7", prizePool: "Trophy & Medals" }
  ];

  const eventsToShow = activeTab === 'indoor' ? indoorEventsData : outdoorEventsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const renderEventCard = (event, index) => (
    <motion.div
      key={event.title}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer font-sans"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-violet-500/30 group-hover:border-purple-400/60 transition-all duration-300 overflow-hidden">
        {/* Icon Background Glow */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="text-center relative z-10">
          <motion.div 
            className="text-6xl mb-5 inline-block"
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 }
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-purple-400/40 rounded-full" />
              <span className="relative">{event.icon}</span>
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 mb-2">
            {event.title}
          </h3>
          <p className="text-purple-300/80 mt-2 font-medium">{event.date}</p>
        </div>

        {/* Expandable Details */}
        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-in-out">
          <div className="border-t border-violet-500/30 pt-4">
            <p className="text-purple-100/90 leading-relaxed text-sm mb-4">
              {event.description}
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                className="bg-violet-500/10 backdrop-blur-sm p-3 rounded-lg border border-violet-500/20 hover:border-purple-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 text-xs font-bold mb-1">⏰ Time</div>
                <div className="text-white text-sm">{event.time}</div>
              </motion.div>
              
              <motion.div 
                className="bg-violet-500/10 backdrop-blur-sm p-3 rounded-lg border border-violet-500/20 hover:border-purple-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 text-xs font-bold mb-1">📍 Venue</div>
                <div className="text-white text-sm">{event.venue}</div>
              </motion.div>
              
              <motion.div 
                className="bg-violet-500/10 backdrop-blur-sm p-3 rounded-lg border border-violet-500/20 hover:border-purple-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 text-xs font-bold mb-1">👥 Participants</div>
                <div className="text-white text-sm">{event.participants}</div>
              </motion.div>
              
              <motion.div 
                className="bg-violet-500/10 backdrop-blur-sm p-3 rounded-lg border border-violet-500/20 hover:border-purple-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 text-xs font-bold mb-1">🏆 Prize Pool</div>
                <div className="text-white text-sm">{event.prizePool}</div>
              </motion.div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 border border-violet-400/50 rounded-full font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 text-white shadow-lg shadow-violet-500/30 relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
          <div className="absolute inset-0 border-t-2 border-r-2 border-purple-400 rounded-tr-2xl" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      id="timeline" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden font-sans"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            top: '0%',
            left: '-15%',
          }}
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
            bottom: '0%',
            right: '-15%',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 25%, #7c3aed 50%, #c4b5fd 75%, #a78bfa 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.5))',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Energia Competitions
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <p className="text-xl text-purple-300/80 mb-12 max-w-3xl mx-auto">
            From the track to the court, find your arena of glory.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-violet-950/30 backdrop-blur-xl rounded-full p-2 border border-purple-500/30 shadow-lg shadow-violet-500/20">
            <motion.button 
              onClick={() => setActiveTab('indoor')} 
              className={`relative px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'indoor' 
                  ? 'text-white' 
                  : 'text-purple-300/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === 'indoor' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                  style={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Indoor Sports</span>
            </motion.button>
            
            <motion.button 
              onClick={() => setActiveTab('outdoor')} 
              className={`relative px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'outdoor' 
                  ? 'text-white' 
                  : 'text-purple-300/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === 'outdoor' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                  style={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Outdoor Sports</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {eventsToShow.map((event, index) => renderEventCard(event, index))}
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}


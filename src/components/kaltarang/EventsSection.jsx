"use client"

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function EventsSection() {
  const [activeTab, setActiveTab] = useState('music');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const eventsData = {
    music: [
      { title: "Classical Vocal", icon: "🎤", date: "10-11 November", time: "2:00 PM - 5:00 PM", venue: "Main Auditorium", description: "Showcase your classical singing prowess in Hindustani or Carnatic music traditions.", participants: "Solo", prizePool: "Trophy & Cash Prize" },
      { title: "Battle of Bands", icon: "🎸", date: "10-11 November", time: "6:00 PM - 9:00 PM", venue: "Open Stage", description: "Rock the stage with your band and compete for the ultimate musical glory.", participants: "Bands of 4-8", prizePool: "Trophy & Cash Prize" },
      { title: "Solo Singing", icon: "🎵", date: "10-11 November", time: "3:00 PM - 6:00 PM", venue: "Music Room", description: "Display your vocal talent in any genre of your choice in this solo competition.", participants: "Solo", prizePool: "Trophy & Cash Prize" },
      { title: "Instrumental", icon: "🎹", date: "10-11 November", time: "4:00 PM - 7:00 PM", venue: "Music Hall", description: "Mesmerize the audience with your instrumental mastery on any instrument.", participants: "Solo/Duet", prizePool: "Trophy & Cash Prize" }
    ],
    literal: [
      { title: "Poetry Slam", icon: "📝", date: "10-11 November", time: "2:00 PM - 5:00 PM", venue: "Seminar Hall", description: "Express your emotions through powerful poetry in Hindi or English.", participants: "Solo", prizePool: "Trophy & Cash Prize" },
      { title: "Creative Writing", icon: "✍️", date: "10-11 November", time: "10:00 AM - 2:00 PM", venue: "Library Hall", description: "Craft compelling stories, essays or poems showcasing your literary prowess.", participants: "Solo", prizePool: "Trophy & Cash Prize" },
      { title: "Debate Competition", icon: "🗣️", date: "10-11 November", time: "3:00 PM - 6:00 PM", venue: "Conference Room", description: "Battle with words and logic in this intense debate competition.", participants: "Teams of 2", prizePool: "Trophy & Cash Prize" },
      { title: "Open Mic", icon: "🎙️", date: "10-11 November", time: "7:00 PM - 9:00 PM", venue: "Cafe Stage", description: "Share your original poetry, stories or stand-up in this open platform.", participants: "Solo", prizePool: "Trophy & Cash Prize" }
    ],
    fmc: [
      { title: "Short Film Making", icon: "🎬", date: "10-11 November", time: "9:00 AM - 6:00 PM", venue: "Media Lab", description: "Create a compelling short film that tells a powerful story in limited time.", participants: "Teams of 4-6", prizePool: "Trophy & Cash Prize" },
      { title: "Photography", icon: "📷", date: "10-11 November", time: "8:00 AM - 5:00 PM", venue: "Campus Wide", description: "Capture stunning moments through your lens in various photography categories.", participants: "Solo", prizePool: "Trophy & Cash Prize" },
      { title: "Ad Making", icon: "📺", date: "10-11 November", time: "10:00 AM - 4:00 PM", venue: "Production Studio", description: "Design a creative advertisement that sells a product with innovation.", participants: "Teams of 3-5", prizePool: "Trophy & Cash Prize" },
      { title: "Reels Challenge", icon: "📱", date: "10-11 November", time: "11:00 AM - 3:00 PM", venue: "Campus Locations", description: "Create viral-worthy content in this fast-paced social media challenge.", participants: "Solo/Duo", prizePool: "Trophy & Cash Prize" }
    ],
    drama: [
      { title: "Street Play", icon: "🎭", date: "10-11 November", time: "5:00 PM - 7:00 PM", venue: "Open Ground", description: "Perform a powerful street play addressing social issues with creativity.", participants: "Teams of 8-12", prizePool: "Trophy & Cash Prize" },
      { title: "Mono Acting", icon: "🎪", date: "10-11 November", time: "2:00 PM - 5:00 PM", venue: "Drama Hall", description: "Showcase your solo acting skills by performing multiple characters.", participants: "Solo", prizePool: "Trophy & Cash Prize" },
      { title: "Stage Play", icon: "🎬", date: "10-11 November", time: "6:00 PM - 9:00 PM", venue: "Main Auditorium", description: "Present a full-fledged theatrical production on the grand stage.", participants: "Teams of 10-15", prizePool: "Trophy & Cash Prize" },
      { title: "Mime Act", icon: "🤐", date: "10-11 November", time: "3:00 PM - 5:00 PM", venue: "Black Box Theatre", description: "Tell a story without words through the art of mime and expressions.", participants: "Solo/Group", prizePool: "Trophy & Cash Prize" }
    ],
    dance: [
      { title: "Classical Dance", icon: "💃", date: "10-11 November", time: "2:00 PM - 5:00 PM", venue: "Dance Studio", description: "Perform traditional Indian classical dance forms like Bharatanatyam, Kathak, etc.", participants: "Solo/Group", prizePool: "Trophy & Cash Prize" },
      { title: "Hip Hop Battle", icon: "🕺", date: "10-11 November", time: "6:00 PM - 9:00 PM", venue: "Open Stage", description: "Battle it out with your crew in this high-energy hip hop competition.", participants: "Crews of 6-10", prizePool: "Trophy & Cash Prize" },
      { title: "Contemporary Fusion", icon: "🩰", date: "10-11 November", time: "3:00 PM - 6:00 PM", venue: "Performance Hall", description: "Blend different dance styles to create unique contemporary choreography.", participants: "Solo/Duo/Group", prizePool: "Trophy & Cash Prize" },
      { title: "Folk Dance", icon: "🎊", date: "10-11 November", time: "4:00 PM - 7:00 PM", venue: "Cultural Stage", description: "Celebrate India's diversity through vibrant folk dance performances.", participants: "Groups of 8-15", prizePool: "Trophy & Cash Prize" }
    ]
  };

  const eventsToShow = eventsData[activeTab];

  const tabs = [
    { id: 'music', label: 'Music', icon: '🎵' },
    { id: 'literal', label: 'Literary', icon: '📚' },
    { id: 'fmc', label: 'FMC', icon: '🎥' },
    { id: 'drama', label: 'Drama', icon: '🎭' },
    { id: 'dance', label: 'Dance', icon: '💃' }
  ];

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
      className="relative group cursor-pointer"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-300 overflow-hidden">
        {/* Icon Background Glow */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"
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
            className="text-5xl sm:text-6xl mb-4 sm:mb-5 inline-block"
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 }
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-red-400/40 rounded-full" />
              <span className="relative">{event.icon}</span>
            </div>
          </motion.div>
          
          <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 mb-2">
            {event.title}
          </h3>
          <p className="text-red-300/80 mt-2 font-medium text-sm sm:text-base">{event.date}</p>
        </div>

        {/* Expandable Details */}
        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:mt-4 sm:group-hover:mt-6 transition-all duration-500 ease-in-out">
          <div className="border-t border-red-500/30 pt-4">
            <p className="text-red-100/90 leading-relaxed text-xs sm:text-sm mb-4">
              {event.description}
            </p>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <motion.div 
                className="bg-red-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-red-400 text-xs font-bold mb-1">⏰ Time</div>
                <div className="text-white text-xs sm:text-sm">{event.time}</div>
              </motion.div>
              
              <motion.div 
                className="bg-red-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-red-400 text-xs font-bold mb-1">📍 Venue</div>
                <div className="text-white text-xs sm:text-sm">{event.venue}</div>
              </motion.div>
              
              <motion.div 
                className="bg-red-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-red-400 text-xs font-bold mb-1">👥 Participants</div>
                <div className="text-white text-xs sm:text-sm">{event.participants}</div>
              </motion.div>
              
              <motion.div 
                className="bg-red-500/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-red-500/20 hover:border-red-400/40 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-red-400 text-xs font-bold mb-1">🏆 Prize</div>
                <div className="text-white text-xs sm:text-sm">{event.prizePool}</div>
              </motion.div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-6 w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-orange-600 border border-red-400/50 rounded-full font-bold hover:from-red-500 hover:to-orange-500 transition-all duration-300 text-white text-sm sm:text-base shadow-lg shadow-red-500/30 relative overflow-hidden group/btn"
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
        <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-10">
          <div className="absolute inset-0 border-t-2 border-r-2 border-red-400 rounded-tr-2xl" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      id="timeline" 
      ref={sectionRef}
      className="py-12 sm:py-20 relative overflow-hidden"
    >
      {/* Animated Background Orbs - Red Theme */}
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
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
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
          className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, transparent 70%)',
            bottom: '0%',
            right: '-15%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #f97316 25%, #fb923c 50%, #dc2626 75%, #ef4444 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(239, 68, 68, 0.5))',
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
            Cultural Events
          </motion.h2>
          
          <motion.div 
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <p className="text-base sm:text-xl text-red-300/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Celebrate art, culture and creativity across diverse domains
          </p>
        </motion.div>

        {/* Tab Switcher - Mobile Responsive */}
        <motion.div 
          className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-red-950/30 backdrop-blur-xl rounded-full p-1 sm:p-2 border border-red-500/30 shadow-lg shadow-red-500/20 inline-flex gap-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap text-xs sm:text-base ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-red-300/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"
                    style={{ boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)' }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid - Mobile Responsive */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
            className="absolute w-2 h-2 rounded-full bg-red-400/40 hidden sm:block"
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
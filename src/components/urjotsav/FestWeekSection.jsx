"use client"

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function FestWeekSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const otherFestsData = [
    { 
      name: "Kaltarang", 
      theme: "Cultural Fest", 
      desc: "The arena of creativity and cultural expression where art meets innovation.",
      icon: "🎭",
      gradient: "from-cyan-500 to-blue-600",
      color: "cyan"
    },
    { 
      name: "Energia", 
      theme: "Sports Fest", 
      desc: "The arena of raw power and physical prowess where champions are forged.",
      icon: "⚡",
      gradient: "from-blue-500 to-indigo-600",
      color: "blue"
    },
    { 
      name: "Sauhardya", 
      theme: "Social Fest", 
      desc: "Connecting communities for a greater good and building lasting bonds.",
      icon: "🤝",
      gradient: "from-sky-500 to-blue-600",
      color: "sky"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="fest-week" 
      ref={sectionRef}
      className="py-20 text-white relative overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            top: '20%',
            left: '-10%',
          }}
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            bottom: '20%',
            right: '-10%',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Transparent Glass Container */}
          <div className="relative inline-block px-8 py-6 rounded-3xl mb-8">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/10" />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 25%, #0ea5e9 50%, #60a5fa 75%, #06b6d4 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.6))',
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
                The Fest Week Conquest
              </motion.h2>
              
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full mx-auto shadow-lg shadow-cyan-400/50"
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : { width: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>

          <motion.p
            className="text-xl text-cyan-200/80 max-w-3xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Experience the complete saga across all fest realms
          </motion.p>
        </motion.div>

        {/* Fest Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {otherFestsData.map((fest, index) => (
            <motion.div
              key={fest.name}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              {/* Border Glow Only - Shows on Hover */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${fest.gradient} rounded-3xl blur-md transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Ultra Transparent Glass Card */}
              <div className="relative bg-white/[0.03] backdrop-blur-3xl p-8 rounded-3xl border border-white/20 transition-all duration-500 shadow-2xl overflow-hidden">

                {/* Icon - Static, No Glow */}
                <div className="text-7xl mb-6 relative z-10">
                  <span className="relative">{fest.icon}</span>
                </div>

                {/* Fest Name */}
                <h3 
                  className={`text-3xl font-black mb-2 relative z-10 bg-gradient-to-r ${fest.gradient} bg-clip-text text-transparent`}
                >
                  {fest.name}
                </h3>

                {/* Theme Badge */}
                <div className="inline-block mb-4 relative z-10">
                  <div className="px-4 py-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/30">
                    <p className={`text-sm font-bold bg-gradient-to-r ${fest.gradient} bg-clip-text text-transparent`}>
                      {fest.theme}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-cyan-100/70 mb-6 relative z-10 leading-relaxed">
                  {fest.desc}
                </p>

                {/* Explore Button - No Dynamic Shadow */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative inline-block px-8 py-3 bg-gradient-to-r ${fest.gradient} rounded-full font-bold text-white shadow-lg transition-all duration-300 z-10`}
                >
                  <span className="relative z-10">Explore {fest.name}</span>
                </motion.a>

                {/* Decorative Glass Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 opacity-20">
                  <div className="absolute inset-0 border-t-2 border-r-2 border-white/40 rounded-tr-xl" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 opacity-20">
                  <div className="absolute inset-0 border-b-2 border-l-2 border-white/40 rounded-bl-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="relative inline-block px-10 py-6 rounded-2xl">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/10 shadow-xl" />
            <p className="relative z-10 text-cyan-200/80 text-lg">
              🎉 Join us for an unforgettable journey through all fest realms
            </p>
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400/40 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
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
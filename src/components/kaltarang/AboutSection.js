'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Counter animation
  const CountUp = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const isCountInView = useInView(countRef, { once: true })
    
    useEffect(() => {
      if (isCountInView) {
        let start = 0
        const duration = 2000
        const increment = end / (duration / 16)
        
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)
        
        return () => clearInterval(timer)
      }
    }, [isCountInView, end])
    
    return <span ref={countRef}>{count}{suffix}</span>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

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
  }

  const statCards = [
    { value: 8, suffix: "+", label: "Years Running", gradient: "from-orange-500 to-red-600" },
    { value: 30, suffix: "+", label: "Social Events", gradient: "from-purple-500 to-pink-600" },
    { value: 5, suffix: "K+", label: "Volunteers", gradient: "from-blue-500 to-cyan-600" }
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen w-full py-20 flex items-center text-white relative overflow-hidden"
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
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
            top: '-10%',
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
            delay: 1
          }}
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-10%',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #dc2626 25%, #a855f7 50%, #3b82f6 75%, #06b6d4 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 40px rgba(249, 115, 22, 0.5))',
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
              About Us
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500" />
                <p className="relative text-lg leading-relaxed bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  URJASANGAM is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold">phenomenon</span> where Innovation and Technology converge, bringing together tech enthusiasts, developers, and innovators under one sky.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500" />
                <p className="relative text-lg leading-relaxed bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  Every year, thousands gather to witness a spectacle fueled by passion and the fire of a thousand innovations.
                </p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                variants={itemVariants}
              >
                {statCards.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex-1 min-w-[120px] text-center relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-xl" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`} />
                    <div className="relative p-4">
                      <div className={`text-4xl font-black mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Vision & Mission Cards */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 20 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/30 group-hover:border-orange-500/60 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-2xl"
                      style={{
                        boxShadow: '0 0 30px rgba(249, 115, 22, 0.6)'
                      }}
                    >
                      🎯
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    To create a platform where technological innovation knows no bounds and creativity meets opportunity.
                  </p>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
                    <div className="absolute inset-0 border-t-2 border-r-2 border-orange-500 rounded-tr-2xl" />
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 20 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl"
                      style={{
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)'
                      }}
                    >
                      🚀
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    To foster a community that celebrates innovation and technological excellence through collaboration and learning.
                  </p>
                  
                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 left-4 w-20 h-20 opacity-10">
                    <div className="absolute inset-0 border-b-2 border-l-2 border-purple-500 rounded-bl-2xl" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Particles Effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#a855f7' : '#3b82f6'
                } 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
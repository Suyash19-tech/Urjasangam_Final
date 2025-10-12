'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import { FiCalendar, FiMapPin, FiUsers, FiArrowRight } from 'react-icons/fi'

export default function Timeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const timelineRef = useRef(null)
  
  // Scroll-based animation for the moving element
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  const timelineEvents = [
    {
      date: 'Oct 10-11, 2025',
      title: 'Energia',
      description: 'Kick off the week with intense athletic competitions. From cricket to football, basketball to athletics - witness the spirit of sportsmanship and competitive excellence.',
      color: '#9333EA',
      gradient: 'from-purple-600 to-purple-400',
      side: 'left',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
      venue: 'Sports Complex',
      participants: '2000+',
    },
    {
      date: 'Oct 12-13, 2025',
      title: 'Urjotsav',
      description: 'Enter the realm of technology and innovation. 48-hour hackathons, coding competitions, tech talks, and pitch competitions await the brightest technical minds.',
      color: '#3B82F6',
      gradient: 'from-blue-600 to-blue-400',
      side: 'right',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
      venue: 'Tech Hub',
      participants: '1500+',
    },
    {
      date: 'Oct 14-15, 2025',
      title: 'Souardhya',
      description: 'Make a difference that matters. Join social initiatives, community service projects, awareness campaigns, and contribute to meaningful social change.',
      color: '#F59E0B',
      gradient: 'from-amber-600 to-amber-400',
      side: 'left',
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
      venue: 'Community Center',
      participants: '1000+',
    },
    {
      date: 'Oct 16-17, 2025',
      title: 'Kaltarang',
      description: 'Conclude with a grand celebration of arts and culture. Music concerts, dance performances, drama, fashion shows, and cultural exhibitions that showcase talent.',
      color: '#EF4444',
      gradient: 'from-red-600 to-red-400',
      side: 'right',
      icon: '🎭',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
      venue: 'Cultural Arena',
      participants: '1800+',
    },
  ]

  // Transform scroll progress to Y position
  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="timeline" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08)_0%,transparent_60%)]" />
      
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-turret text-center mb-12 font-black tracking-wider"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Events Timeline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-white/90 max-w-3xl mx-auto mb-16 md:mb-24 text-lg md:text-xl"
        >
          Your journey through Urja Sangam 2025
        </motion.p>

        {/* Timeline Container */}
        <div ref={timelineRef} className="max-w-6xl mx-auto relative py-12 md:py-24">
          {/* Timeline Line - Only visible within container */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent">
            {/* Animated gradient line */}
            <motion.div 
              className="absolute w-full bg-gradient-to-b from-yellow-500 via-orange-500 to-yellow-500"
              style={{
                height: lineProgress,
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
              }}
            />
          </div>

          {/* Scrolling Indicator Ball */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            style={{
              top: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"
              style={{
                boxShadow: '0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 165, 0, 0.6)',
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-1 rounded-full bg-white/50 blur-sm" />
            </motion.div>
          </motion.div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: event.side === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-16 md:mb-32 ${
                event.side === 'left' 
                  ? 'md:pr-[calc(50%+60px)] pl-16 md:pl-0' 
                  : 'md:pl-[calc(50%+60px)] pl-16 md:pl-0'
              }`}
            >
              {/* Node on timeline */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                className="absolute left-8 md:left-1/2 top-12 md:-translate-x-1/2 z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${event.color}80`,
                      `0 0 40px ${event.color}`,
                      `0 0 20px ${event.color}80`,
                    ],
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity },
                    hover: { duration: 0.3 }
                  }}
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br ${event.gradient} flex items-center justify-center text-white font-bold cursor-pointer`}
                >
                  <span className="text-xs md:text-sm">{index + 1}</span>
                </motion.div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: `0 30px 80px ${event.color}60`
                }}
                className="relative group"
              >
                {/* Glass Card */}
                <div className="backdrop-blur-xl bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  {/* Image Section */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60`} />
                    
                    {/* Icon Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, type: 'spring' }}
                      className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full backdrop-blur-md bg-black/30 border-2 border-white/30 flex items-center justify-center text-4xl md:text-5xl"
                    >
                      {event.icon}
                    </motion.div>

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full backdrop-blur-md bg-black/50 border border-white/30">
                      <div className="flex items-center gap-2 text-white">
                        <FiCalendar />
                        <span className="font-bold text-sm">{event.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    {/* Title */}
                    <motion.h3
                      className="font-turret text-3xl md:text-4xl font-black mb-4"
                      style={{ color: event.color }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {event.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-white/85 text-base md:text-lg leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10">
                        <FiMapPin className="text-white/70" />
                        <span className="text-white/90 text-sm font-semibold">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10">
                        <FiUsers className="text-white/70" />
                        <span className="text-white/90 text-sm font-semibold">{event.participants}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${event.gradient} rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all`}
                    >
                      <span>View Events</span>
                      <FiArrowRight />
                    </motion.a>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${event.color}20 0%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Connecting Line to Timeline (Desktop) */}
                <div className={`hidden md:block absolute top-12 w-12 h-0.5 bg-gradient-to-r ${
                  event.side === 'left' 
                    ? 'right-0 translate-x-full from-transparent to-yellow-500/50' 
                    : 'left-0 -translate-x-full from-yellow-500/50 to-transparent'
                }`} />
              </motion.div>
            </motion.div>
          ))}

          {/* End Marker */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 bottom-0 md:-translate-x-1/2 z-10"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 20px rgba(255, 215, 0, 0.8)',
                  '0 0 40px rgba(255, 215, 0, 1)',
                  '0 0 20px rgba(255, 215, 0, 0.8)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center"
            >
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
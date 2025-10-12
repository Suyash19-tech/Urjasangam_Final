'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiStar, FiTrendingUp, FiZap } from 'react-icons/fi'

export default function Sponsors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const sponsorTiers = [
    {
      tier: 'Title Sponsor',
      icon: FiAward,
      gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
      sponsors: [
        { 
          name: 'TECH CORP', 
          logo: '🚀',
          tagline: 'Powering Innovation',
          size: 'large'
        }
      ]
    },
    {
      tier: 'Platinum Sponsors',
      icon: FiStar,
      gradient: 'from-gray-300 via-gray-400 to-gray-500',
      sponsors: [
        { name: 'INNOVATE', logo: '💡', tagline: 'Future Forward' },
        { name: 'FUTURE LABS', logo: '🔬', tagline: 'Science & Tech' }
      ]
    },
    {
      tier: 'Gold Sponsors',
      icon: FiTrendingUp,
      gradient: 'from-amber-400 via-amber-500 to-yellow-600',
      sponsors: [
        { name: 'DIGITAL WAVE', logo: '🌊', tagline: 'Digital Solutions' },
        { name: 'CREATIVE HUB', logo: '🎨', tagline: 'Design Excellence' },
        { name: 'SPORT NATION', logo: '⚽', tagline: 'Athletic Excellence' }
      ]
    }
  ]

  return (
    <section id="sponsors" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08)_0%,transparent_60%)]" />
      
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['⭐', '💎', '🏆', '✨', '🎯'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

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
          Our Sponsors
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-white/90 max-w-3xl mx-auto mb-20 text-lg md:text-xl"
        >
          Powered by industry leaders and innovators who believe in excellence
        </motion.p>

        {/* Sponsor Tiers */}
        <div className="max-w-7xl mx-auto space-y-16">
          {sponsorTiers.map((tier, tierIndex) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tierIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: tierIndex * 0.2, duration: 0.6 }}
              >
                {/* Tier Title */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: tierIndex * 0.2 + 0.2, type: 'spring', stiffness: 200 }}
                  className="flex items-center justify-center gap-4 mb-10"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className={`p-3 rounded-full bg-gradient-to-br ${tier.gradient}`}
                  >
                    <Icon className="text-2xl md:text-3xl text-white" />
                  </motion.div>
                  <h3 className={`font-exo text-2xl md:text-4xl font-black bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                    {tier.tier}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className={`p-3 rounded-full bg-gradient-to-br ${tier.gradient}`}
                  >
                    <Icon className="text-2xl md:text-3xl text-white" />
                  </motion.div>
                </motion.div>

                {/* Sponsors Grid */}
                <div className={`grid gap-6 ${
                  tier.sponsors[0]?.size === 'large' 
                    ? 'grid-cols-1 max-w-2xl mx-auto' 
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {tier.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: tierIndex * 0.2 + index * 0.1 + 0.4, 
                        duration: 0.6,
                        type: 'spring',
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -15, 
                        scale: 1.05,
                        rotateY: 5,
                      }}
                      className="group relative"
                    >
                      {/* Card */}
                      <div className={`backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden ${
                        sponsor.size === 'large' ? 'p-16 min-h-[280px]' : 'p-10 min-h-[220px]'
                      }`}
                        style={{
                          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                        }}
                      >
                        {/* Animated Border Gradient */}
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          style={{
                            background: `conic-gradient(from 0deg, transparent, ${tier.gradient.split(' ')[1]?.replace('via-', '') || 'yellow-500'}, transparent 360deg)`,
                            padding: '2px',
                            borderRadius: '1.5rem',
                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            maskComposite: 'exclude',
                          }}
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                          {/* Logo Icon */}
                          <motion.div
                            className={`mb-4 ${sponsor.size === 'large' ? 'text-8xl' : 'text-6xl'}`}
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: [0, -10, 10, -10, 0],
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {sponsor.logo}
                          </motion.div>

                          {/* Name */}
                          <h4 className={`font-exo font-black text-center bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent mb-2 ${
                            sponsor.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
                          }`}>
                            {sponsor.name}
                          </h4>

                          {/* Tagline */}
                          <p className="text-white/60 text-center text-sm font-semibold">
                            {sponsor.tagline}
                          </p>

                          {/* Hover Shine Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                            style={{ transform: 'skewX(-20deg)' }}
                          />
                        </div>

                        {/* Corner Decorations */}
                        <motion.div
                          className={`absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br ${tier.gradient}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className={`absolute bottom-3 left-3 w-3 h-3 rounded-full bg-gradient-to-br ${tier.gradient}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />

                        {/* Glow Effect on Hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{
                            background: `radial-gradient(circle at center, ${tier.gradient.split(' ')[1]?.replace('via-', '') || 'yellow-500'}40 0%, transparent 70%)`,
                          }}
                        />
                      </div>

                      {/* Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: tierIndex * 0.2 + index * 0.1 + 0.6, type: 'spring' }}
                        className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <FiZap className="text-white text-xl" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-block backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="font-exo text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Sponsor
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Join us in creating an unforgettable experience. Partner with Urjasangam 2025.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
            >
              <span>Partner With Us</span>
              <FiZap />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
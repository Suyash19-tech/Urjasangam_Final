'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function KaltarangHero({ onRegisterClick }) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Countdown timer
  useEffect(() => {
    const eventDate = new Date('October 16, 2025 00:00:00').getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const countdownItems = [
    { value: countdown.days, label: 'Days' },
    { value: countdown.hours, label: 'Hours' },
    { value: countdown.minutes, label: 'Minutes' },
    { value: countdown.seconds, label: 'Seconds' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Kaltarang Red Theme Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.1)_0%,transparent_50%)]" />

      <div className="text-center z-10 px-8 max-w-7xl mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="text-9xl mb-8"
          style={{
            filter: 'drop-shadow(0 0 40px #EF4444)',
          }}
        >
          🎭
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-exo font-black tracking-[0.15em] mb-6 text-kaltarang"
          style={{
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            filter: 'drop-shadow(0 0 40px rgba(239, 68, 68, 0.6))',
          }}
        >
          KALTARANG
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-text-dim text-3xl mb-8 italic"
        >
          The Reality Stone - Music, dance, drama
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-white/90 text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Experience the power of artistic expression and cultural celebration where creativity shapes reality
        </motion.p>

        {/* Dates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="inline-block glass rounded-full px-12 py-4 mb-12 border-2 border-kaltarang/30"
        >
          <p className="text-2xl font-semibold text-kaltarang">
            📅 October 16-17, 2025
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex gap-6 justify-center mb-12 flex-wrap"
        >
          {countdownItems.map((item, index) => (
            <div
              key={item.label}
              className="glass rounded-2xl p-8 min-w-[130px] border-2 border-kaltarang/40"
            >
              <div
                className="font-exo font-bold text-6xl leading-none mb-2 text-kaltarang"
              >
                {item.value}
              </div>
              <div className="text-text-dim text-sm uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRegisterClick}
            className="px-12 py-5 text-xl font-semibold rounded-full text-white shadow-lg transition-all bg-gradient-to-r from-kaltarang to-red-600"
            style={{
              boxShadow: '0 10px 40px rgba(239, 68, 68, 0.6)',
            }}
          >
            Register for Kaltarang
          </motion.button>

          <motion.a
            href="#events"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 text-xl font-semibold rounded-full border-2 border-kaltarang text-white hover:bg-kaltarang/10 transition-all"
          >
            View Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMusic, FaTheaterMasks, FaDrum, FaMicrophone, FaPaintBrush, FaTshirt } from 'react-icons/fa'

export default function KaltarangEvents() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const events = [
    {
      icon: FaMusic,
      title: 'Battle of Bands',
      description: 'Showcase your musical talent in an electrifying rock and pop band competition',
      prize: '₹1,00,000',
      category: 'Competition',
    },
    {
      icon: FaDrum,
      title: 'Dance Competition',
      description: 'Express yourself through classical, contemporary, hip-hop, and folk dance forms',
      prize: '₹75,000',
      category: 'Competition',
    },
    {
      icon: FaTheaterMasks,
      title: 'Drama & Theater',
      description: 'Bring stories to life through powerful theatrical performances and street plays',
      prize: '₹60,000',
      category: 'Competition',
    },
    {
      icon: FaMicrophone,
      title: 'Solo Singing',
      description: 'Mesmerize the audience with your vocal prowess in various musical genres',
      prize: '₹50,000',
      category: 'Competition',
    },
    {
      icon: FaTshirt,
      title: 'Fashion Show',
      description: 'Walk the ramp and showcase creativity through stunning fashion designs',
      prize: '₹80,000',
      category: 'Competition',
    },
    {
      icon: FaPaintBrush,
      title: 'Art Exhibition',
      description: 'Display your artistic masterpieces in painting, sculpture, and digital art',
      prize: 'Free Entry',
      category: 'Exhibition',
    },
  ]

  return (
    <section id="events" className="section-padding" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="font-turret text-center mb-12 font-black text-kaltarang"
        style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.6))',
        }}
      >
        Cultural Events
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-center text-white/90 max-w-3xl mx-auto mb-20 text-xl"
      >
        Celebrate the vibrant tapestry of arts, music, dance, and cultural expression
      </motion.p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => {
          const Icon = event.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-3xl p-8 hover:border-kaltarang transition-all cursor-pointer group border-2 border-kaltarang/30"
            >
              {/* Category Badge */}
              <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 bg-kaltarang/20 text-kaltarang border border-kaltarang/30">
                {event.category}
              </div>

              {/* Icon */}
              <div
                className="text-6xl mb-6 text-kaltarang group-hover:scale-110 transition-transform"
              >
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-white">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-text-dim text-lg leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Prize */}
              <div className="flex items-center justify-between pt-6 border-t border-kaltarang/30">
                <span className="text-text-dim">Prize Pool</span>
                <span className="text-2xl font-bold text-kaltarang">
                  {event.prize}
                </span>
              </div>

              {/* Register Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 px-6 py-3 rounded-full font-semibold text-white transition-all bg-gradient-to-r from-kaltarang to-red-600"
                style={{
                  boxShadow: '0 10px 30px rgba(239, 68, 68, 0.4)',
                }}
              >
                Register Now
              </motion.button>
            </motion.div>
          )
        })}
      </div>

      {/* Prize Pool Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center"
      >
        <div className="glass rounded-3xl p-12 max-w-2xl mx-auto border-2 border-kaltarang/40">
          <p className="text-2xl text-text-dim mb-4">Total Prize Pool</p>
          <p className="text-7xl font-black font-exo mb-4 text-kaltarang">
            ₹4+ Lakhs
          </p>
          <p className="text-xl text-white/80">
            Plus certificates, trophies, and performance opportunities!
          </p>
        </div>
      </motion.div>
    </section>
  )
}
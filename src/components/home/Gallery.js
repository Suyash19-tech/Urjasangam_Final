'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const galleryImages = [
    { 
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=75',
      title: 'Tech Innovation',
      category: 'Urjotsav'
    },
    { 
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=75',
      title: 'Team Collaboration',
      category: 'Urjotsav'
    },
    { 
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=75',
      title: 'Cultural Dance',
      category: 'Kaltarang'
    },
    { 
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=75',
      title: 'Music Performance',
      category: 'Kaltarang'
    },
    { 
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=75',
      title: 'Sports Excellence',
      category: 'Energia'
    },
    { 
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=75',
      title: 'Team Victory',
      category: 'Energia'
    },
    { 
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=75',
      title: 'Community Service',
      category: 'Souardhya'
    },
    { 
      url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=75',
      title: 'Live Concert',
      category: 'Kaltarang'
    },
    { 
      url: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&q=75',
      title: 'Grand Performance',
      category: 'Kaltarang'
    },
    { 
      url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=75',
      title: 'Night Event',
      category: 'Kaltarang'
    },
    { 
      url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=75',
      title: 'Hackathon',
      category: 'Urjotsav'
    },
    { 
      url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=75',
      title: 'Festival Crowd',
      category: 'All Fests'
    },
  ]

  const categoryColors = {
    'Urjotsav': 'from-urjotsav/80 to-urjotsav/40',
    'Kaltarang': 'from-kaltarang/80 to-kaltarang/40',
    'Energia': 'from-energia/80 to-energia/40',
    'Souardhya': 'from-souardhya/80 to-souardhya/40',
    'All Fests': 'from-purple-500/80 to-pink-500/40'
  }

  const createRow = (startIndex, reverse = false, speed = 40) => (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: startIndex * 0.1 }}
      className="relative overflow-hidden mb-8"
    >
      <motion.div
        className="flex gap-6 hover:[animation-play-state:paused]"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%']
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* Duplicate images for seamless loop */}
        {[...galleryImages.slice(startIndex), ...galleryImages.slice(startIndex), ...galleryImages.slice(startIndex)].map((img, idx) => (
          <motion.div
            key={`${startIndex}-${idx}`}
            className="flex-shrink-0 w-[400px] h-[300px] rounded-3xl overflow-hidden relative group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              zIndex: 10,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => setSelectedImage({ ...img, index: idx })}
            onMouseEnter={() => setHoveredIndex(`${startIndex}-${idx}`)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <motion.img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-600"
              initial={{ scale: 1.1 }}
              whileHover={{ 
                scale: 1.2,
                rotateY: 5,
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Gradient Overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${categoryColors[img.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-white/50 rounded-3xl transition-all duration-500"
              animate={hoveredIndex === `${startIndex}-${idx}` ? {
                borderColor: ['rgba(255,255,255,0.5)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.5)']
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{ transform: 'skewX(-20deg)' }}
            />

            {/* Category Badge */}
            <motion.div
              className="absolute top-4 left-4 px-4 py-2 rounded-full backdrop-blur-md bg-black/50 border border-white/30"
              initial={{ y: -20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-sm font-bold">{img.category}</span>
            </motion.div>

            {/* Zoom Icon */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 rounded-full backdrop-blur-md bg-black/50 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <FiZoomIn className="text-white text-xl" />
            </motion.div>

            {/* Title and Description */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
              initial={{ y: 100, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-white text-2xl font-bold mb-2">{img.title}</h3>
              <p className="text-white/80 text-sm">Click to view full image</p>
            </motion.div>

            {/* Particle Effect on Hover */}
            {hoveredIndex === `${startIndex}-${idx}` && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{
                      x: '50%',
                      y: '50%',
                      opacity: 1,
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 100}%`,
                      y: `${50 + (Math.random() - 0.5) * 100}%`,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

  const handlePrev = () => {
    const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url)
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    setSelectedImage({ ...galleryImages[prevIndex], index: prevIndex })
  }

  const handleNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url)
    const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage({ ...galleryImages[nextIndex], index: nextIndex })
  }

  return (
    <section id="gallery" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1)_0%,transparent_60%)]" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-urjotsav/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-kaltarang/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
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
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Captured Moments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-white/90 max-w-3xl mx-auto mb-16 text-xl"
        >
          Relive the magic through our lens - hover to bring memories to life
        </motion.p>

        {/* Gallery Rows */}
        {createRow(0, false, 50)}
        {createRow(4, true, 45)}
        {createRow(8, false, 55)}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 border border-white/20"
            >
              <FiX className="text-3xl text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, x: -5 }}
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 border border-white/20"
            >
              <FiChevronLeft className="text-3xl text-white" />
            </motion.button>

            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, x: 5 }}
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 border border-white/20"
            >
              <FiChevronRight className="text-3xl text-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh] w-full"
            >
              <motion.img
                key={selectedImage.url}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-3xl"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Image Info Overlay */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 rounded-b-3xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[selectedImage.category]} text-white font-bold text-sm`}>
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-white/70">Urjasangam 2024 - A moment to remember</p>
              </motion.div>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold border border-white/20"
            >
              {(galleryImages.findIndex(img => img.url === selectedImage.url) + 1)} / {galleryImages.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
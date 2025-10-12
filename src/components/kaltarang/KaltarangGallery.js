// components/kaltarang/KaltarangGallery.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi'

export default function KaltarangGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Dance Performance',
      category: 'Dance',
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
    },
    {
      id: 2,
      type: 'image',
      title: 'Band Performance',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800',
    },
    {
      id: 3,
      type: 'image',
      title: 'Fashion Show',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
    },
    {
      id: 4,
      type: 'video',
      title: 'Highlights 2024',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    },
    {
      id: 5,
      type: 'image',
      title: 'Drama Competition',
      category: 'Drama',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800',
    },
    {
      id: 6,
      type: 'image',
      title: 'Solo Singing',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800',
    },
    {
      id: 7,
      type: 'image',
      title: 'Folk Dance',
      category: 'Dance',
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
    },
    {
      id: 8,
      type: 'image',
      title: 'Celebrity Night',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800',
    },
  ]

  const categories = ['All', 'Dance', 'Music', 'Fashion', 'Drama', 'Performance', 'Video']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredGallery =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const handleImageClick = (index) => {
    setSelectedImage(index)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev === 0 ? filteredGallery.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === filteredGallery.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 rounded-full text-sm font-bold mb-6 bg-kaltarang/20 text-kaltarang border-2 border-kaltarang/50"
          >
            MEMORIES
          </motion.span>
          <h2 className="heading-xl mb-6 text-kaltarang">
            Kaltarang Gallery
          </h2>
          <p className="text-xl text-text-dim max-w-2xl mx-auto">
            Relive the magic of previous editions through stunning visuals
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-kaltarang text-white shadow-glow-red'
                  : 'glass text-text-dim hover:text-white hover:border-kaltarang/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageClick(index)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-kaltarang/80 text-white">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                {/* Play Icon for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-kaltarang/80 flex items-center justify-center">
                      <FiPlay className="text-3xl text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-kaltarang/50 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-4 rounded-full font-semibold text-white hover:text-kaltarang border-2 border-kaltarang/30 hover:border-kaltarang transition-all"
          >
            Load More
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
          >
            <FiX className="text-2xl text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
          >
            <FiChevronLeft className="text-2xl text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10"
          >
            <FiChevronRight className="text-2xl text-white" />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh]"
          >
            <img
              src={filteredGallery[selectedImage].image}
              alt={filteredGallery[selectedImage].title}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 bg-kaltarang text-white">
                {filteredGallery[selectedImage].category}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {filteredGallery[selectedImage].title}
              </h3>
            </div>
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold">
            {selectedImage + 1} / {filteredGallery.length}
          </div>
        </motion.div>
      )}
    </section>
  )
}
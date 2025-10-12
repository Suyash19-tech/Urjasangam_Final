'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0a0118 0%, #1a0b2e 100%)',
          }}
        >
          <div className="relative w-24 h-24">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                border: '5px solid transparent',
                borderTopColor: '#9333EA',
                borderRightColor: '#3B82F6',
                borderBottomColor: '#EF4444',
                borderLeftColor: '#F59E0B',
              }}
            />
            
            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full"
              style={{
                border: '3px solid transparent',
                borderTopColor: '#F59E0B',
                borderRightColor: '#EF4444',
                borderBottomColor: '#3B82F6',
                borderLeftColor: '#9333EA',
              }}
            />
            
            {/* Center Pulse */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-8 rounded-full bg-gradient-to-r from-energia to-urjotsav"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
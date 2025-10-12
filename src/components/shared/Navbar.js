'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiVolume2, FiVolumeX, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['home', 'about', 'events', 'gallery', 'timeline', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#timeline', label: 'Fest Week' },
    { href: '#contact', label: 'Contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn)
    // Add your sound toggle logic here
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-2xl border-b border-white/10 py-3'
            : 'bg-black/60 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-[95%] mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="logo flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Flame Icon */}
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-orange-500 via-red-500 to-yellow-500 rounded-full blur-lg"
                />
                <div className="relative z-10 text-3xl md:text-4xl">🔥</div>
              </div>
            </motion.div>
            <span className="hidden md:block font-exo text-xl md:text-2xl font-black tracking-wider bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-orange-500 transition-all duration-500">
              URJA SANGAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-2 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    className={`relative px-6 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={handleNavClick}
                  >
                    {link.label}
                    
                    {/* Animated Background on Hover */}
                    <motion.span
                      className="absolute inset-0 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(168, 85, 247, 0.2))',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 border border-orange-500/30 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Bottom Line on Hover */}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              )
            })}
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Sound Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSound}
              className="relative w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group"
              aria-label="Toggle sound"
            >
              <AnimatePresence mode="wait">
                {isSoundOn ? (
                  <motion.div
                    key="sound-on"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiVolume2 className="text-lg" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sound-off"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiVolumeX className="text-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 blur-md -z-10"
                whileHover={{ scale: 1.5 }}
              />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[998]"
              onClick={toggleMobileMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-black/98 backdrop-blur-2xl border-l border-white/10 z-[999] overflow-y-auto"
            >
              <div className="p-8">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMobileMenu}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                  >
                    <FiX className="text-xl" />
                  </motion.button>
                </div>

                {/* Mobile Links */}
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '')
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={link.href}
                          className={`block px-6 py-4 rounded-lg font-medium text-base uppercase tracking-wider transition-all ${
                            isActive 
                              ? 'bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 border border-orange-500/30 text-white' 
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                          onClick={handleNavClick}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>

                {/* Mobile Bottom Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between px-6">
                    <span className="text-gray-400 text-sm">Sound</span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleSound}
                      className={`w-14 h-7 rounded-full relative transition-all ${
                        isSoundOn ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-white/10'
                      }`}
                    >
                      <motion.div
                        className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-lg"
                        animate={{ left: isSoundOn ? '32px' : '4px' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
'use client'

import { useState, useEffect } from 'react'
import KaltarangHero from '@/components/kaltarang/KaltarangHero'
import KaltarangEvents from '@/components/kaltarang/KaltarangEvents'
import KaltarangTimeline from '@/components/kaltarang/KaltarangTimeline'
import KaltarangGallery from '@/components/kaltarang/KaltarangGallery'
import Contact from '@/components/home/Contact'
import RegistrationModal from '@/components/shared/RegistrationModal'

export default function KaltarangPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Update scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      const progressBar = document.getElementById('scroll-progress')
      if (progressBar) {
        progressBar.style.width = scrolled + '%'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <KaltarangHero onRegisterClick={() => setIsModalOpen(true)} />
      <KaltarangEvents />
      <KaltarangTimeline />
      <KaltarangGallery />
      {/* <Contact /> */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
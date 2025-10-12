'use client'

import { useEffect, useRef, useState } from 'react'

export default function SpaceBackground() {
  const starsLayerRef = useRef(null)
  const nebulaeLayerRef = useRef(null)
  const starsRef = useRef([])
  const shootingStarsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationIdRef = useRef(null)
  const [clickEffect, setClickEffect] = useState(null)

  useEffect(() => {
    const starsLayer = starsLayerRef.current
    const nebulaeLayer = nebulaeLayerRef.current
    if (!starsLayer || !nebulaeLayer) return

    // Create Nebulae (colorful clouds)
    const createNebula = (color, x, y, size, blur) => {
      const nebula = document.createElement('div')
      nebula.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(${blur}px);
        opacity: 0.3;
        animation: nebulaPulse ${8 + Math.random() * 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
        will-change: opacity;
      `
      nebulaeLayer.appendChild(nebula)
    }

    // Create multiple nebulae with different colors
    createNebula('rgba(147, 51, 234, 0.4)', 20, 15, 400, 60)  // Purple
    createNebula('rgba(239, 68, 68, 0.3)', 70, 25, 350, 50)   // Red
    createNebula('rgba(59, 130, 246, 0.35)', 40, 60, 450, 70) // Blue
    createNebula('rgba(245, 158, 11, 0.25)', 80, 70, 300, 40) // Orange
    createNebula('rgba(16, 185, 129, 0.3)', 15, 80, 380, 55)  // Green

    // Generate stars with different colors and sizes
    const starColors = [
      'rgba(255, 255, 255, 1)',      // White
      'rgba(147, 197, 253, 0.9)',    // Light Blue
      'rgba(196, 181, 253, 0.9)',    // Light Purple
      'rgba(252, 211, 77, 0.9)',     // Yellow
      'rgba(248, 113, 113, 0.8)',    // Light Red
    ]

    for (let i = 0; i < 800; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 3.5 + 0.5
      const color = starColors[Math.floor(Math.random() * starColors.length)]
      const twinkleSpeed = Math.random() * 3 + 2
      
      star.style.cssText = `
        position: absolute;
        background: ${color};
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 ${size * 2}px ${color};
        animation: twinkle ${twinkleSpeed}s infinite;
        animation-delay: ${Math.random() * 3}s;
        will-change: transform, opacity, box-shadow;
      `
      
      star.dataset.originalLeft = star.style.left
      star.dataset.originalTop = star.style.top
      star.dataset.size = size
      star.dataset.speed = Math.random() * 0.5 + 0.1
      star.dataset.color = color
      
      starsLayer.appendChild(star)
      starsRef.current.push(star)
    }

    // Shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div')
      const startX = Math.random() * 100
      const startY = Math.random() * 50
      const angle = Math.random() * 45 + 30 // 30-75 degrees
      
      shootingStar.style.cssText = `
        position: absolute;
        width: 100px;
        height: 2px;
        left: ${startX}%;
        top: ${startY}%;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
        box-shadow: 0 0 10px rgba(255,255,255,0.8);
        transform: rotate(${angle}deg);
        animation: shootingStar 1.5s ease-out forwards;
        pointer-events: none;
      `
      
      starsLayer.appendChild(shootingStar)
      shootingStarsRef.current.push(shootingStar)
      
      setTimeout(() => {
        shootingStar.remove()
        shootingStarsRef.current = shootingStarsRef.current.filter(s => s !== shootingStar)
      }, 1500)
    }

    // Create shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createShootingStar()
      }
    }, 2000)

    // Mouse interaction with enhanced effects
    const updateStars = () => {
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y

      starsRef.current.forEach((star, index) => {
        const size = parseFloat(star.dataset.size)
        const speed = parseFloat(star.dataset.speed)
        const color = star.dataset.color
        
        const starX = parseFloat(star.dataset.originalLeft) / 100 * window.innerWidth
        const starY = parseFloat(star.dataset.originalTop) / 100 * window.innerHeight
        
        const distanceX = mouseX - starX
        const distanceY = mouseY - starY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        const maxDistance = 300
        const interactionStrength = Math.max(0, 1 - distance / maxDistance) * speed * 4
        
        if (distance < maxDistance && distance > 0) {
          // Repulsion effect
          const repulsionX = -(distanceX / distance) * interactionStrength * 80
          const repulsionY = -(distanceY / distance) * interactionStrength * 80
          
          // Wave effect
          const waveX = Math.sin(Date.now() * 0.003 + index * 0.15) * interactionStrength * 15
          const waveY = Math.cos(Date.now() * 0.003 + index * 0.15) * interactionStrength * 15
          
          // Spiral effect
          const angle = Math.atan2(distanceY, distanceX) + Date.now() * 0.001
          const spiralX = Math.cos(angle) * interactionStrength * 10
          const spiralY = Math.sin(angle) * interactionStrength * 10
          
          const moveX = repulsionX + waveX + spiralX
          const moveY = repulsionY + waveY + spiralY
          
          star.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + interactionStrength * 0.8}) rotate(${interactionStrength * 180}deg)`
          star.style.opacity = Math.min(0.4 + interactionStrength * 1.6, 1)
          star.style.boxShadow = `0 0 ${interactionStrength * 30}px ${color}, 0 0 ${interactionStrength * 50}px ${color}`
          
          // Create trails for fast-moving stars
          if (interactionStrength > 0.5) {
            star.style.filter = `blur(${interactionStrength * 2}px)`
          } else {
            star.style.filter = 'blur(0px)'
          }
        } else {
          // Gentle floating animation
          const floatX = Math.sin(Date.now() * 0.001 + index * 0.2) * 5
          const floatY = Math.cos(Date.now() * 0.0015 + index * 0.3) * 5
          
          star.style.transform = `translate(${floatX}px, ${floatY}px) scale(1) rotate(0deg)`
          star.style.opacity = ''
          star.style.boxShadow = `0 0 ${size * 2}px ${color}`
          star.style.filter = 'blur(0px)'
        }
      })
      
      animationIdRef.current = requestAnimationFrame(updateStars)
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      if (!animationIdRef.current) {
        updateStars()
      }
    }

    // Click effect - create explosion of particles
    const handleClick = (e) => {
      const x = e.clientX
      const y = e.clientY
      
      setClickEffect({ x, y })
      setTimeout(() => setClickEffect(null), 1000)
      
      // Create particle burst
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        const angle = (Math.PI * 2 * i) / 30
        const distance = 100 + Math.random() * 100
        const size = Math.random() * 4 + 2
        const color = starColors[Math.floor(Math.random() * starColors.length)]
        
        particle.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: ${color};
          border-radius: 50%;
          box-shadow: 0 0 10px ${color};
          pointer-events: none;
          z-index: 9999;
          animation: particleBurst 1s ease-out forwards;
          --endX: ${Math.cos(angle) * distance}px;
          --endY: ${Math.sin(angle) * distance}px;
        `
        
        document.body.appendChild(particle)
        setTimeout(() => particle.remove(), 1000)
      }
    }

    const handleMouseLeave = () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
        animationIdRef.current = null
      }
      starsRef.current.forEach(star => {
        star.style.transform = 'translate(0px, 0px) scale(1) rotate(0deg)'
        star.style.opacity = ''
        star.style.boxShadow = `0 0 ${parseFloat(star.dataset.size) * 2}px ${star.dataset.color}`
        star.style.filter = 'blur(0px)'
      })
    }

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (starsLayer) {
        starsLayer.style.transform = `translateY(${scrolled * 0.3}px)`
      }
      if (nebulaeLayer) {
        nebulaeLayer.style.transform = `translateY(${scrolled * 0.15}px) scale(1.05)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(shootingStarInterval)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      starsRef.current.forEach(star => star.remove())
      shootingStarsRef.current.forEach(star => star.remove())
      starsRef.current = []
      shootingStarsRef.current = []
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        {/* Deep space black background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, #0a0a0a 0%, #000000 50%, #000000 100%)',
          }}
        >
          {/* Nebulae layer */}
          <div 
            ref={nebulaeLayerRef}
            className="absolute w-full h-full pointer-events-none"
          />
          
          {/* Stars layer */}
          <div 
            ref={starsLayerRef}
            className="absolute w-full h-full pointer-events-none"
          />
        </div>
      </div>

      {/* Click effect ripple */}
      {clickEffect && (
        <div
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: clickEffect.x,
            top: clickEffect.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 animate-ripple rounded-full border-4 border-white" />
          <div className="absolute inset-0 animate-ripple-delayed rounded-full border-2 border-purple-500" />
          <div className="absolute inset-0 animate-ripple-slow rounded-full border-2 border-blue-500" />
        </div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes nebulaPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }

        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes particleBurst {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--endX), var(--endY)) scale(0);
            opacity: 0;
          }
        }

        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        @keyframes ripple-delayed {
          0% {
            width: 0;
            height: 0;
            opacity: 0.8;
          }
          100% {
            width: 350px;
            height: 350px;
            opacity: 0;
          }
        }

        @keyframes ripple-slow {
          0% {
            width: 0;
            height: 0;
            opacity: 0.6;
          }
          100% {
            width: 400px;
            height: 400px;
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: ripple 1s ease-out forwards;
        }

        .animate-ripple-delayed {
          animation: ripple-delayed 1s ease-out 0.15s forwards;
        }

        .animate-ripple-slow {
          animation: ripple-slow 1s ease-out 0.3s forwards;
        }
      `}</style>
    </>
  )
}
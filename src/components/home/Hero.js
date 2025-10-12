'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Hero({ onRegisterClick }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [animationComplete, setAnimationComplete] = useState(false)

  const canvasRef = useRef(null)
  const heroContentRef = useRef(null)
  const shockwaveRef = useRef(null)

  // Three.js Scene Setup
  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    camera.position.z = 10

    // Create star field
    const starGeometry = new THREE.BufferGeometry()
    const starVertices = []
    for (let i = 0; i < 15000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        -Math.random() * 2000
      )
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))
    const stars = new THREE.Points(
      starGeometry, 
      new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.7 })
    )
    scene.add(stars)

    // Create nebula function (infinity stones)
    function createNebula(color) {
      const geometry = new THREE.BufferGeometry()
      const vertices = []
      
      for (let i = 0; i < 1500; i++) {
        vertices.push(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        )
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      
      const material = new THREE.PointsMaterial({
        size: 0.15,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        opacity: 0.8,
        color: new THREE.Color(color)
      })
      
      return new THREE.Points(geometry, material)
    }

    // Create 6 infinity stones with colors
    const stones = {
      urjotsav: createNebula('#10b981'),    // Time (Green) - Urjotsav
      energia: createNebula('#a855f7'),     // Power (Purple) - Energia
      kaltarang: createNebula('#ef4444'),   // Reality (Red) - Kaltarang
      souardhya: createNebula('#fbbf24'),   // Mind (Yellow) - Souardhya
      space: createNebula('#00aeff'),       // Space (Blue)
      soul: createNebula('#ff9a2a')         // Soul (Orange)
    }

    const stoneArray = Object.values(stones)
    stoneArray.forEach(stone => scene.add(stone))

    // Position stones in different locations
    stones.urjotsav.position.set(-15, 10, -5)
    stones.energia.position.set(15, 10, -5)
    stones.kaltarang.position.set(-15, -10, -5)
    stones.souardhya.position.set(15, -10, -5)
    stones.space.position.set(0, 15, 0)
    stones.soul.position.set(0, -15, 0)

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      
      // Move stars for parallax effect
      stars.position.z += 0.05
      if (stars.position.z > 1000) stars.position.z = -1000
      
      // Rotate nebulae slightly
      stoneArray.forEach((stone, i) => {
        stone.rotation.y += 0.001 * (i + 1)
        stone.rotation.x += 0.0005 * (i + 1)
      })
      
      renderer.render(scene, camera)
    }
    animate()

    // GSAP Convergence Animation Timeline
    const tlConvergence = gsap.timeline({ 
      delay: 0.5,
      onComplete: () => {
        setAnimationComplete(true)
      }
    })

    // Phase 1: Stones converge to center (increased duration to 5 seconds)
    tlConvergence.to(stoneArray.map(s => s.position), {
      x: 0,
      y: 0, 
      z: 0,
      duration: 2,
      ease: 'power3.in',
      stagger: 0.08
    })
    
    // Phase 2: Stones fuse - rotate and shrink
    .to(stoneArray.map(s => s.rotation), {
      y: '+=15',
      duration: 0.5,
      ease: 'power2.in'
    }, '-=0.5')
    .to(stoneArray.map(s => s.scale), {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, '<')
    
    // Phase 3: Shockwave explosion
    .to(shockwaveRef.current, {
      opacity: 1,
      duration: 0.1,
      onStart: () => {
        // Camera shake
        gsap.to(camera.position, {
          z: 9.5,
          duration: 0.1,
          yoyo: true,
          repeat: 3,
          ease: 'power2.inOut'
        })
      }
    }, '-=0.1')
    .to(shockwaveRef.current, {
      scale: 50,
      opacity: 0,
      duration: 1,
      ease: 'expo.out'
    })
    
    // Phase 4: Reveal hero content
    .to(heroContentRef.current, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      duration: 1.5,
      ease: 'expo.out'
    }, '-=0.6')
    
    // Phase 5: Fade out stones completely
    .set(stoneArray.map(s => s.material), { opacity: 0 })

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      stoneArray.forEach(stone => {
        stone.geometry.dispose()
        stone.material.dispose()
      })
      stars.geometry.dispose()
      stars.material.dispose()
    }
  }, [])

  // Mouse movement tracking (after animation)
  useEffect(() => {
    if (!animationComplete) return

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [animationComplete])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Three.js Canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Shockwave Effect */}
      <div
        ref={shockwaveRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full pointer-events-none"
        style={{
          opacity: 0,
          background: 'transparent',
          boxShadow: '0 0 100px 50px #ffffff',
          zIndex: 5
        }}
      />

      {/* Hero Content */}
      <div 
        ref={heroContentRef}
        className="text-center z-10 px-8 max-w-7xl mx-auto"
        style={{
          opacity: 0,
          transform: 'scale(1.5)',
          filter: 'blur(20px) brightness(3)'
        }}
      >
        {/* Main Title */}
        <motion.div
          animate={animationComplete ? {
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h1
            className="font-exo  font-black tracking-[0.15em] mb-4 relative"
            style={{
              fontSize: 'clamp(3.8rem, 8vw, 7rem)',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f7b731, #5f27cd, #00d2d3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.6))',
              lineHeight: 1.2,
            }}
          >
            URJA SANGAM
          </h1>
        </motion.div>

        {/* Subtitle */}
        {animationComplete && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-text-dim tracking-[0.3em] uppercase mb-12"
            style={{ fontSize: 'clamp(1.2rem, 2vw, 1.3rem)' }}
          >
          Fusion of Engergies
          </motion.p>

          
        )}

        {/* CTA Buttons */}
        {animationComplete && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex gap-4 md:gap-8 justify-center flex-wrap mt-12"
          >
           <Link href={"https://unstop.com/college-fests/urjasangam-2k25-the-annual-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technology-rgipt-jais-uttar-pradesh-403716"}> <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 20px 60px rgba(147,51,234,0.6)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onRegisterClick}
              className="px-12 cursor-pointer md:px-12 py-4 md:py-5 text-2xl md:text-xl font-semibold rounded-full bg-gradient-to-r from-energia to-urjotsav text-white shadow-[0_10px_40px_rgba(147,51,234,0.4)] transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button></Link>

            <motion.a
              href="#timeline"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: 'rgba(16, 185, 129, 1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-semibold rounded-full border-2 border-energia text-white backdrop-blur-xl bg-white/5 transition-all"
            >
              View Timeline
            </motion.a>
          </motion.div>
        )}    
      </div>
    </section>
  )
}
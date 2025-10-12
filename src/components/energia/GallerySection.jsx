"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function GallerySection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const galleryImages = [
    { src: "/e2.png" },
    { src: "/e3.png" },
    { src: "/energia1.png" },
    { src: "/Screenshot 2025-10-07 at 23.31.24.png" },
    { src: "/images/event1.jpg" },
  ];

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="gallery" className="relative w-full py-24 overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex gap-4 mb-4 ${rowIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}
          >
            {[...galleryImages, ...galleryImages].map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.src}
                alt={`Gallery Background Image ${imgIndex + 1}`}
                className="h-32 w-48 object-cover rounded-lg"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="relative z-10 flex items-center justify-center p-6">
        <motion.div 
          className="relative max-w-4xl w-full border-4 border-violet-500/50 rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/60"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <video
            ref={videoRef}
            src="/ENERGIA 2024 - Aftermovie.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
          <button
            onClick={toggleSound}
            className="absolute bottom-4 right-4 p-3 bg-violet-600/80 hover:bg-violet-700 rounded-full transition-colors"
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}


"use client"
import { useState, useEffect, useRef } from 'react';
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
    <section id="gallery" className="relative min-h-screen overflow-hidden ">
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex gap-4 mb-4 ${rowIndex === 1 ? 'animate-scroll-right' : 'animate-scroll-left'}`}
          >
            {[...galleryImages, ...galleryImages].map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.src}
                alt={`Gallery ${imgIndex + 1}`}
                className="h-32 w-48 object-cover rounded-lg"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="relative max-w-4xl w-full border-4 border-red-500/50 rounded-3xl overflow-hidden shadow-2xl shadow-red-500/60">
          <video
            ref={videoRef}
            src="/KALTARANG 2024 - Aftermovie | RGIPT Cultural Fest.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
          <button
            onClick={toggleSound}
            className="absolute bottom-4 right-4 p-3 bg-red-600/80 hover:bg-red-700 rounded-full transition-colors"
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
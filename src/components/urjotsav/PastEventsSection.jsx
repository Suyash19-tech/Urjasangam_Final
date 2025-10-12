"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const pastEventsData = [
  {
    image: "/images/event1.jpg",
    title: "Tech Innovation Summit",
    description: "A groundbreaking event showcasing cutting-edge technology.",
    attendees: "500+",
    year: "2024",
  },
  {
    image: "/images/event2.jpg",
    title: "Digital Transformation",
    description: "Exploring the future of digital transformation.",
    attendees: "350+",
    year: "2024",
  },
  {
    image: "/images/event3.jpg",
    title: "AI & ML Workshop",
    description: "Hands-on workshop on artificial intelligence.",
    attendees: "400+",
    year: "2023",
  },
  {
    image: "/images/event4.jpg",
    title: "Cybersecurity Symposium",
    description: "Discussion on cybersecurity threats and strategies.",
    attendees: "450+",
    year: "2023",
  },
  {
    image: "/images/event5.jpg",
    title: "Startup Pitch Competition",
    description: "Entrepreneurs showcase their innovative ideas.",
    attendees: "600+",
    year: "2023",
  },
  {
    image: "/images/event5.jpg",
    title: "Startup Pitch Competition",
    description: "Entrepreneurs showcase their innovative ideas.",
    attendees: "600+",
    year: "2023",
  },
  {
    image: "/images/event5.jpg",
    title: "Startup Pitch Competition",
    description: "Entrepreneurs showcase their innovative ideas.",
    attendees: "600+",
    year: "2023",
  },
  {
    image: "/images/event5.jpg",
    title: "Startup Pitch Competition",
    description: "Entrepreneurs showcase their innovative ideas.",
    attendees: "600+",
    year: "2023",
  },
  {
    image: "/images/event5.jpg",
    title: "Startup Pitch Competition",
    description: "Entrepreneurs showcase their innovative ideas.",
    attendees: "600+",
    year: "2023",
  },
];

export function PastEventsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
            bottom: "10%",
            right: "-10%",
          }}
        />
      </div>

      {/* Header Section with Transparent Glass Effect */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Transparent Glass Container for Header */}
        <div className="relative inline-block px-12 py-8 rounded-3xl">
          {/* Ultra Transparent Glass Background */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl shadow-cyan-500/10" />

          <div className="relative z-10">
            <motion.h2
              className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight"
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 25%, #0ea5e9 50%, #60a5fa 75%, #06b6d4 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.6))",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              OUR PAST EVENTS
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full mx-auto shadow-lg shadow-cyan-400/50"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.p
              className="text-cyan-200 text-lg mt-6 max-w-2xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Explore our journey through innovation and excellence
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Swiper Section */}
      <motion.div
        className="w-full max-w-6xl relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '" style="background: linear-gradient(135deg, #06b6d4, #3b82f6); box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);"></span>'
              );
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="!pb-16"
        >
          {pastEventsData.map((event, index) => (
            <SwiperSlide key={index} className="!w-[320px] !h-[420px]">
              <div
                className="relative h-full p-1 rounded-3xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated Border Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-70 blur-xl scale-105"
                      : "opacity-30 blur-md"
                  }`}
                  style={{
                    backgroundSize: "200% 100%",
                    animation:
                      hoveredIndex === index
                        ? "shimmer 2s linear infinite"
                        : "none",
                  }}
                />

                {/* Ultra Transparent Glass Card */}
                <div className="relative h-full flex flex-col backdrop-blur-3xl bg-white/[0.03] rounded-3xl overflow-hidden border border-white/20 group-hover:border-cyan-400/40 group-hover:bg-white/[0.06] transition-all duration-500 shadow-2xl">
                  {/* Image Container with Transparent Glass Overlay */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="w-full h-56 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-2xl flex items-center justify-center border-b border-white/10">
                      <div className="text-6xl opacity-40">📸</div>
                    </div>

                    {/* Transparent Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 20,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4"
                      >
                        {/* Ultra Transparent Glass Info Badges */}
                        <div className="bg-white/10 backdrop-blur-2xl px-4 py-2 rounded-full border border-white/30 shadow-xl shadow-cyan-500/20">
                          <span className="text-cyan-200 text-xs font-bold drop-shadow-lg">
                            👥 {event.attendees}
                          </span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-2xl px-4 py-2 rounded-full border border-white/30 shadow-xl shadow-blue-500/20">
                          <span className="text-blue-200 text-xs font-bold drop-shadow-lg">
                            📅 {event.year}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Text Content with Ultra Transparent Glass */}
                  <div className="flex-1 p-5 flex flex-col relative">
                    {/* Subtle Inner Glass Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-b-3xl" />

                    <h3
                      className="relative z-10 text-white text-xl font-bold mb-3 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {event.title}
                    </h3>

                    <p
                      className="relative z-10 text-cyan-100/70 text-sm leading-relaxed flex-1 drop-shadow-md"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {event.description}
                    </p>

                    {/* Ultra Transparent Glass Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 mt-4 w-full py-3 bg-white/[0.08] backdrop-blur-2xl rounded-full text-white font-bold text-sm border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden shadow-xl hover:bg-white/[0.12] hover:border-cyan-400/50 hover:shadow-cyan-400/30"
                    >
                      <span className="relative z-10 drop-shadow-lg">
                        View Details
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>

                  {/* Decorative Transparent Glass Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 opacity-30">
                    <div className="absolute inset-0 border-t-2 border-r-2 border-white/50 rounded-tr-xl backdrop-blur-sm" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 opacity-30">
                    <div className="absolute inset-0 border-b-2 border-l-2 border-white/50 rounded-bl-xl backdrop-blur-sm" />
                  </div>

                  {/* Transparent Glass Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none"
                    animate={
                      hoveredIndex === index
                        ? {
                            x: ["-100%", "100%"],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: hoveredIndex === index ? Infinity : 0,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Transparent Glass Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </section>
  );
}

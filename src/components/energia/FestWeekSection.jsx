"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FestWeekSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const festivals = [
    {
      id: 1,
      name: "Kaltarang",
      tagline: "Where Art Meets Soul",
      description:
        "Immerse yourself in a kaleidoscope of cultural brilliance. Dance, drama, and artistic expression collide.",
      icon: "🎭",
      gradient: "from-[#FF6B6B] to-[#FF8E53]",
      color: "#FF6B6B",
      stats: [
        { label: "Artists", value: "500+" },
        { label: "Performances", value: "40+" },
        { label: "Days", value: "3" },
      ],
    },
    {
      id: 2,
      name: "Energia",
      tagline: "Unleash The Champion",
      description:
        "Feel the adrenaline surge through athletic prowess. Where legends are born and records shattered.",
      icon: "🏆",
      gradient: "from-violet-500 to-purple-500",
      color: "#a855f7",
      stats: [
        { label: "Athletes", value: "2000+" },
        { label: "Sports", value: "25+" },
        { label: "Days", value: "3" },
      ],
    },
    {
      id: 3,
      name: "Sauhardya",
      tagline: "Unity In Diversity",
      description:
        "Building bridges through social initiatives. A celebration of humanity, compassion, and collective growth.",
      icon: "🤝",
      gradient: "from-[#A78BFA] to-[#7C3AED]",
      color: "#A78BFA",
      stats: [
        { label: "Communities", value: "50+" },
        { label: "Initiatives", value: "15+" },
        { label: "Impact", value: "∞" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-24 px-4 sm:px-8 font-sans"
    >
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-20 animate-[float_6s_ease-in-out_infinite]"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Header Section */}
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs tracking-widest text-white/80 font-semibold">
            FEST WEEK 2025
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-4 leading-tight">
          Experience The
          <br />
          <span className="bg-gradient-to-r from-[#FF6B6B] via-violet-400 to-[#A78BFA] bg-clip-text text-transparent">
            Ultimate Convergence
          </span>
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Three legendary festivals. One unforgettable journey. Dive into a
          world where culture, sports, and social impact unite.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {festivals.map((fest, i) => (
          <div
            key={fest.id}
            onMouseEnter={() => setActiveCard(fest.id)}
            onMouseLeave={() => setActiveCard(null)}
            className={`relative rounded-3xl p-8 border border-white/10 backdrop-blur-xl bg-white/[0.05] hover:-translate-y-3 transition-all duration-500 overflow-hidden shadow-xl ${
              isVisible ? "animate-[slideIn_0.8s_ease-out_forwards]" : ""
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {/* Accent bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fest.gradient}`}
            />

            {/* Icon */}
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center text-5xl">
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${fest.gradient} opacity-20`}
              ></div>
              <span
                className={`relative transition-transform duration-300 ${
                  activeCard === fest.id ? "scale-110 rotate-6" : ""
                }`}
              >
                {fest.icon}
              </span>
            </div>

            {/* Title & Desc */}
            <h3
              className={`text-3xl font-black mb-2 bg-gradient-to-r ${fest.gradient} bg-clip-text text-transparent`}
            >
              {fest.name}
            </h3>
            <p className="text-white/70 font-semibold mb-2">{fest.tagline}</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {fest.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 border-y border-white/10 py-4 mb-6">
              {fest.stats.map((stat, idx) => (
                <div key={idx} className="text-center group cursor-default">
                  <div
                    className="text-xl font-extrabold"
                    style={{ color: fest.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-300 flex justify-center items-center gap-2 ${
                activeCard === fest.id
                  ? `bg-gradient-to-r ${fest.gradient} text-black`
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Explore {fest.name} →
            </button>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className={`text-center mt-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-10">
          <h3 className="text-3xl font-black text-white mb-3">
            Ready for the adventure?
          </h3>
          <p className="text-white/60 mb-8">
            Register now and be part of something extraordinary.
          </p>
          <button className="relative px-10 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-[#FF6B6B] via-violet-500 to-[#A78BFA] text-black shadow-lg hover:scale-105 transition-transform overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_ease-in-out_infinite]" />
            Register for Fest Week
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}


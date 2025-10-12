"use client"
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function StatsSection() {
  const sectionRef = useRef(null);
  const [stats, setStats] = useState({ footfall: 0, events: 0, days: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue('footfall', 0, 7000, 2000);
          animateValue('events', 0, 30, 1500);
          animateValue('days', 0, 3, 1000);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if(sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateValue = (key, start, end, duration) => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setStats((prev) => ({ ...prev, [key]: current }));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  return (
    <section ref={sectionRef} className="py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-violet-500/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-6xl font-black text-violet-400 mb-2 tracking-tighter">
              {stats.footfall.toLocaleString()}+
            </div>
            <div className="text-gray-400 text-lg font-semibold uppercase tracking-widest">Athletes & Spectators</div>
          </motion.div>
          <motion.div 
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-violet-500/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-6xl font-black text-violet-400 mb-2 tracking-tighter">
              {stats.events}+
            </div>
            <div className="text-gray-400 text-lg font-semibold uppercase tracking-widest">Sporting Events</div>
          </motion.div>
          <motion.div 
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-violet-500/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-6xl font-black text-violet-400 mb-2 tracking-tighter">
              {stats.days}
            </div>
            <div className="text-gray-400 text-lg font-semibold uppercase tracking-widest">Days of Glory</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


"use client"
import { useState, useEffect, useRef } from 'react';
export function StatsSection() {
  const sectionRef = useRef(null);
  const [stats, setStats] = useState({ footfall: 0, events: 0, days: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue('footfall', 0, 5000, 2000);
          animateValue('events', 0, 25, 2000);
          animateValue('days', 0, 15, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
    <section ref={sectionRef} className="py-20 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20">
            <div className="text-6xl font-bold text-blue-500 mb-2">
              {stats.footfall.toLocaleString()}
            </div>
            <div className="text-gray-400 text-lg">Past Footfall</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20">
            <div className="text-6xl font-bold text-blue-500 mb-2">
              {stats.events}
            </div>
            <div className="text-gray-400 text-lg">Total Events</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-blue-500/20">
            <div className="text-6xl font-bold text-blue-500 mb-2">
              {stats.days}
            </div>
            <div className="text-gray-400 text-lg">Days of Celebration</div>
          </div>
        </div>
      </div>
    </section>
  );
}
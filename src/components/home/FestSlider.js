'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Data for the slides
const fests = [
    { name: 'Energia', className: 'energia', image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=800&q=80', route: '/energia', color: '#a855f7' },
    { name: 'Urjotsav', className: 'urjotsav', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', route: '/urjotsav', color: '#3b82f6' },
    { name: 'Souardhya', className: 'souardhya', image: 'https://images.unsplash.com/photo-1593113616828-f7c8717855b3?auto=format&fit=crop&w=800&q=80', route: '/souhardya', color: '#f59e0b' },
    { name: 'Kaltarang', className: 'kaltarang', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', route: '/kaltarang', color: '#ef4444' }
];

// Minimal CSS for complex animations
const styles = `
    @keyframes activeGlow {
        0%, 100% { 
            box-shadow: 
                0 30px 80px rgba(0, 0, 0, 0.6),
                0 0 60px var(--card-color),
                inset 0 0 40px rgba(255, 255, 255, 0.1);
        }
        50% { 
            box-shadow: 
                0 35px 100px rgba(0, 0, 0, 0.7),
                0 0 100px var(--card-color),
                inset 0 0 60px rgba(255, 255, 255, 0.15);
        }
    }
    
    @keyframes shimmerSweep {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
        50% { opacity: 0.3; }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
    }
    
    .fest-card-active {
        animation: activeGlow 3s infinite ease-in-out;
    }
    
    .fest-card-active::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
        );
        opacity: 0;
        animation: shimmerSweep 4s infinite linear;
        pointer-events: none;
    }
    
    .fest-card-progress::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 100%;
        background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.5)
        );
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
        z-index: 20;
        border-radius: 2px;
        animation: progressBar 3s linear;
    }
    
    @keyframes progressBar {
        from { width: 0%; }
        to { width: 100%; }
    }
`;

const FestSlider = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const autoplayInterval = useRef(null);
    
    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const updateSlider = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    const startAutoplay = () => {
        clearInterval(autoplayInterval.current);
        autoplayInterval.current = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % fests.length);
        }, 3000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayInterval.current);
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);

    const getCardClassName = (index) => {
        if (index === currentIndex) return 'active';
        if (index === (currentIndex - 1 + fests.length) % fests.length) return 'prev';
        if (index === (currentIndex + 1) % fests.length) return 'next';
        return 'hidden';
    };

    const handleCardClick = (index) => {
        if (index === currentIndex) {
            router.push(fests[index].route);
        } else {
            stopAutoplay();
            updateSlider(index);
            setTimeout(startAutoplay, 3000);
        }
    };

    const handlePrevious = () => {
        stopAutoplay();
        const newIndex = (currentIndex - 1 + fests.length) % fests.length;
        updateSlider(newIndex);
        setTimeout(startAutoplay, 3000);
    };

    const handleNext = () => {
        stopAutoplay();
        const newIndex = (currentIndex + 1) % fests.length;
        updateSlider(newIndex);
        setTimeout(startAutoplay, 3000);
    };
    
    // Touch handlers for mobile swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrevious();
        }
    };

    const getCardStyle = (index, fest) => {
        const position = getCardClassName(index);
        let transform = '';
        
        if (position === 'active') {
            transform = 'translateX(0) translateZ(0) scale(1.1) rotateY(0)';
        } else if (position === 'prev') {
            transform = 'translateX(-380px) translateZ(-300px) scale(0.75) rotateY(40deg)';
        } else if (position === 'next') {
            transform = 'translateX(380px) translateZ(-300px) scale(0.75) rotateY(-40deg)';
        }
        
        return {
            transform,
            '--card-color': fest.color
        };
    };

    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center py-8 md:py-16 px-4 md:px-8">
            <style>{styles}</style>
            
            {/* Section Title */}
            <h2 className="font-['Exo_2'] text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center mb-2 md:mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-[2px] md:tracking-[4px] uppercase px-4">
                THE FOUR REALMS
            </h2>
            <p className="text-center text-sm sm:text-base md:text-xl lg:text-2xl text-white/70 mb-4 md:mb-8 font-light px-4">
                Harness the power of cosmic convergence. <span className="hidden md:inline">Hover to pause.</span>
            </p>
            
            {/* Slider Wrapper */}
            <div 
                className="relative h-[450px] sm:h-[500px] md:h-[550px] flex items-center justify-center mt-4 md:mt-16 w-full max-w-7xl"
                onMouseEnter={stopAutoplay}
                onMouseLeave={startAutoplay}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Left Arrow - Hidden on mobile */}
                <button 
                    className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-2 lg:left-8 w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 items-center justify-center cursor-pointer z-[15] transition-all duration-300 text-white/60 text-xl lg:text-2xl hover:bg-white/25 hover:border-white/50 hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
                    onClick={handlePrevious}
                    aria-label="Previous fest"
                >
                    ←
                </button>

                {/* Track */}
                <div className="flex items-center justify-center relative w-full h-full" style={{ perspective: '2500px' }}>
                    {fests.map((fest, index) => {
                        const position = getCardClassName(index);
                        const isActive = position === 'active';
                        const isPrevNext = position === 'prev' || position === 'next';
                        
                        return (
                            <div 
                                key={fest.name} 
                                className={`
                                    absolute rounded-2xl md:rounded-3xl overflow-hidden
                                    transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                    backdrop-blur-3xl border-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                                    w-[85vw] max-w-[340px] h-[420px]
                                    sm:w-[380px] sm:h-[480px]
                                    md:w-[420px] md:h-[520px]
                                    ${isActive ? 'opacity-100 z-10 cursor-pointer border-white/30 fest-card-active fest-card-progress md:scale-110' : ''}
                                    ${isPrevNext ? 'hidden md:block opacity-50 z-[5] grayscale-[60%] brightness-75 blur-[1px] cursor-pointer border-white/10 hover:opacity-80 hover:grayscale-[30%] hover:brightness-90 hover:blur-[0.5px] hover:scale-[0.85]' : ''}
                                    ${position === 'hidden' ? 'opacity-0 pointer-events-none' : ''}
                                `}
                                style={getCardStyle(index, fest)}
                                onClick={() => handleCardClick(index)}
                            >
                                {/* Image Container */}
                                <div className="w-full h-full relative">
                                    <img 
                                        src={fest.image} 
                                        alt={fest.name} 
                                        className={`w-full h-full object-cover transition-transform duration-600 ${isActive ? 'scale-105' : ''}`}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-[1]" />
                                </div>
                                
                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 z-[2] bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                                    <h3 
                                        className="font-['Exo_2'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[2px] md:tracking-[4px] leading-none uppercase text-white mb-2 md:mb-4"
                                        style={{
                                            textShadow: `0 0 20px ${fest.color}, 0 0 40px ${fest.color}, 0 4px 20px rgba(0, 0, 0, 0.8)`
                                        }}
                                    >
                                        {fest.name}
                                    </h3>
                                    <div 
                                        className="w-16 md:w-20 h-[2px] md:h-[3px] rounded-sm mt-2 md:mt-4"
                                        style={{
                                            background: `linear-gradient(90deg, ${fest.color}, transparent)`,
                                            boxShadow: `0 0 10px ${fest.color}`
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Arrow - Hidden on mobile */}
                <button 
                    className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-2 lg:right-8 w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 items-center justify-center cursor-pointer z-[15] transition-all duration-300 text-white/60 text-xl lg:text-2xl hover:bg-white/25 hover:border-white/50 hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
                    onClick={handleNext}
                    aria-label="Next fest"
                >
                    →
                </button>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex gap-3 md:gap-4 justify-center mt-6 md:mt-12 z-20">
                {fests.map((fest, index) => (
                    <button
                        key={fest.name}
                        className={`
                            w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 border-2
                            ${currentIndex === index 
                                ? 'scale-[1.3] border-white/50' 
                                : 'bg-white/30 border-transparent hover:bg-white/60 hover:scale-110'
                            }
                        `}
                        style={currentIndex === index ? {
                            background: fest.color,
                            boxShadow: `0 0 20px ${fest.color}`
                        } : {}}
                        onClick={() => {
                            stopAutoplay();
                            updateSlider(index);
                            setTimeout(startAutoplay, 3000);
                        }}
                        aria-label={`Go to ${fest.name}`}
                    />
                ))}
            </div>
            
            {/* Swipe Instruction for Mobile */}
            <p className="md:hidden text-center text-xs sm:text-sm text-white/50 mt-4">
                ← Swipe to navigate →
            </p>
        </section>
    );
};

export default FestSlider;
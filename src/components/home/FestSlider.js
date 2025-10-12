import React, { useState, useEffect, useRef } from 'react';

// Data for the slides
const fests = [
    { name: 'Energia', className: 'energia', image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=800&q=80' },
    { name: 'Urjotsav', className: 'urjotsav', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' },
    { name: 'Souardhya', className: 'souardhya', image: 'https://images.unsplash.com/photo-1593113616828-f7c8717855b3?auto=format&fit=crop&w=800&q=80' },
    { name: 'Kaltarang', className: 'kaltarang', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80' }
];

// CSS specific to this component
const styles = `
    .fest-section {
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem 2rem;
    }
    
    .fest-slider-wrapper {
        position: relative;
        height: 550px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4rem;
        width: 100%;
    }
    
    .fest-track {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 2500px;
    }
    
    .fest-card {
        position: absolute;
        width: 420px;
        height: 520px;
        border-radius: 24px;
        overflow: hidden;
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(255, 255, 255, 0.1);
        backface-visibility: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }
    
    /* Active Card Styling */
    .fest-card.active {
        transform: translateX(0) translateZ(0) scale(1.1) rotateY(0);
        opacity: 1;
        z-index: 10;
        cursor: pointer;
        border: 2px solid rgba(255, 255, 255, 0.3);
        animation: activeGlow 3s infinite ease-in-out;
    }
    
    @keyframes activeGlow {
        0%, 100% { 
            box-shadow: 
                0 30px 80px rgba(0, 0, 0, 0.6),
                0 0 60px var(--main-color),
                inset 0 0 40px rgba(255, 255, 255, 0.1);
        }
        50% { 
            box-shadow: 
                0 35px 100px rgba(0, 0, 0, 0.7),
                0 0 100px var(--main-color),
                inset 0 0 60px rgba(255, 255, 255, 0.15);
        }
    }
    
    /* Animated gradient overlay */
    .fest-card.active::after {
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
    
    @keyframes shimmerSweep {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
        50% { opacity: 0.3; }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
    }
    
    /* Progress bar at bottom */
    .fest-card::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 0%;
        background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.5)
        );
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
        z-index: 20;
        border-radius: 2px;
    }
    
    .fest-card.active::before {
        width: 100%;
        transition: width 3s linear;
    }
    
    /* Prev/Next Cards */
    .fest-card.prev, .fest-card.next {
        opacity: 0.5;
        z-index: 5;
        filter: grayscale(60%) brightness(0.7) blur(1px);
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .fest-card.prev:hover, .fest-card.next:hover {
        opacity: 0.8;
        filter: grayscale(30%) brightness(0.9) blur(0.5px);
        transform: scale(0.85) !important;
    }
    
    .fest-card.prev { 
        transform: translateX(-380px) translateZ(-300px) scale(0.75) rotateY(40deg); 
    }
    
    .fest-card.next { 
        transform: translateX(380px) translateZ(-300px) scale(0.75) rotateY(-40deg); 
    }
    
    /* Color themes */
    .fest-card.kaltarang { --main-color: #ef4444; }
    .fest-card.urjotsav { --main-color: #3b82f6; }
    .fest-card.souardhya { --main-color: #f59e0b; }
    .fest-card.energia { --main-color: #a855f7; }
    
    .fest-image-container { 
        width: 100%; 
        height: 100%; 
        position: relative;
    }
    
    .fest-image { 
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        transition: transform 0.6s ease;
    }
    
    .fest-card.active .fest-image {
        transform: scale(1.05);
    }
    
    /* Gradient overlay on image */
    .fest-image-container::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.6) 40%,
            rgba(0, 0, 0, 0.3) 70%,
            transparent 100%
        );
        z-index: 1;
    }
    
    .fest-content { 
        position: absolute; 
        bottom: 0; 
        left: 0; 
        right: 0; 
        padding: 2.5rem; 
        z-index: 2;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.6) 60%,
            transparent 100%
        );
    }
    
    .fest-tagline {
        font-size: 0.95rem;
        font-weight: 600;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-bottom: 0.75rem;
        opacity: 0.9;
        color: var(--main-color);
        text-shadow: 0 0 10px var(--main-color);
    }
    
    .fest-name {
        font-family: 'Exo 2', sans-serif;
        font-size: 3.5rem;
        font-weight: 900;
        letter-spacing: 4px;
        line-height: 1;
        text-transform: uppercase;
        color: #ffffff;
        text-shadow: 
            0 0 20px var(--main-color),
            0 0 40px var(--main-color),
            0 4px 20px rgba(0, 0, 0, 0.8);
        margin-bottom: 1rem;
    }
    
    .fest-decorative-line {
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, var(--main-color), transparent);
        margin-top: 1rem;
        border-radius: 2px;
        box-shadow: 0 0 10px var(--main-color);
    }
    
    /* Section styling */
    .section-title {
        font-family: 'Exo 2', sans-serif;
        font-size: clamp(2.5rem, 8vw, 5rem);
        font-weight: 900;
        text-align: center;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: 4px;
        text-transform: uppercase;
    }
    
    .section-desc {
        text-align: center;
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 2rem;
        font-weight: 300;
    }
    
    /* Navigation dots */
    .navigation-dots {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 3rem;
        z-index: 20;
    }
    
    .nav-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }
    
    .nav-dot.active {
        background: var(--main-color);
        box-shadow: 0 0 20px var(--main-color);
        transform: scale(1.3);
        border-color: rgba(255, 255, 255, 0.5);
    }
    
    .nav-dot:not(.active):hover {
        background: rgba(255, 255, 255, 0.6);
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        .fest-card.prev, .fest-card.next { 
            display: none; 
        }
        .fest-card { 
            width: 90%; 
            max-width: 360px; 
            height: 480px; 
        }
        .fest-slider-wrapper { 
            height: 480px; 
        }
        .fest-name {
            font-size: 2.5rem;
        }
        .fest-content {
            padding: 1.5rem;
        }
    }
`;

const FestSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoplayInterval = useRef(null);

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
        if (index !== currentIndex) {
            stopAutoplay();
            updateSlider(index);
            setTimeout(startAutoplay, 3000);
        }
    };

    return (
        <section className="section fest-section" id="fests">
            <style>{styles}</style>
            <h2 className="section-title">THE FOUR STONES</h2>
            <p className="section-desc">Harness the power of cosmic convergence. Hover to pause.</p>
            <div 
                className="fest-slider-wrapper"
                onMouseEnter={stopAutoplay}
                onMouseLeave={startAutoplay}
            >
                <div className="fest-track">
                    {fests.map((fest, index) => (
                        <div 
                            key={fest.name} 
                            className={`fest-card ${fest.className} ${getCardClassName(index)}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="fest-image-container">
                                <img src={fest.image} alt={fest.name} className="fest-image" />
                            </div>
                            <div className="fest-content">
                                <h3 className="fest-name">{fest.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FestSlider;
import React, { useEffect, useRef } from 'react';

const Convergence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const particleColor = "#FFFFFF";
    const particleDensity = 1200;
    const minSize = 0.4;
    const maxSize = 1.0;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.8 + 0.2;
      }

      update() {
        const mouse = mouseRef.current;
        if (mouse.x !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 50) {
            this.x += dx / distance * 2;
            this.y += dy / distance * 2;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particlesRef.current = [];
      let numberOfParticles = (width * height / 100000) * particleDensity / 5;
      if (numberOfParticles > 300) numberOfParticles = 300;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .convergence-container {
          font-family: 'Montserrat', sans-serif;
        }
        
        .convergence-header {
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 400;
          margin-bottom: 1rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e0e6f9;
          text-shadow: 0 0 15px rgba(0, 191, 255, 0.4), 0 0 25px rgba(135, 206, 235, 0.2);
          animation: fadeIn 1s ease-out;
          position: relative;
          z-index: 20;
        }
        
        .sparkles-mask {
          mask-image: radial-gradient(ellipse 350px 150px at 50% 0%, transparent 20%, white);
          -webkit-mask-image: radial-gradient(ellipse 350px 150px at 50% 0%, transparent 20%, white);
        }
        
        .description-text {
          font-size: 1.3rem;
          line-height: 1.9;
          color: #cccccc;
          font-weight: 300;
          animation: fadeIn 1.5s ease-out;
        }
        
        .highlight-text {
          color: #87CEEB;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(135, 206, 235, 0.5);
        }
        
        .date-section {
          margin-top: 3rem;
          font-size: 1.8rem;
          color: #87CEEB;
          font-weight: 500;
          animation: fadeIn 2s ease-out;
          text-shadow: 0 0 20px rgba(135, 206, 235, 0.6);
        }
        
        .date-highlight {
          font-family: 'Bebas Neue', cursive;
          font-size: 2.5rem;
          letter-spacing: 2px;
          font-weight: 400;
          color: #fff;
          text-shadow: 0 0 25px rgba(0, 191, 255, 0.8), 0 0 40px rgba(135, 206, 235, 0.6);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .convergence-header {
            font-size: clamp(3rem, 15vw, 5rem);
          }
          .description-text {
            font-size: 1.1rem;
            line-height: 1.7;
          }
          .date-section {
            font-size: 1.4rem;
          }
          .date-highlight {
            font-size: 1.8rem;
          }
        }
      `}</style>
      
      <div className="convergence-container max-w-[950px] text-center relative z-10">
        <h1 className="convergence-header">CONVERGENCE</h1>
        
        <div ref={containerRef} className="w-[40rem] max-w-[90vw] h-[10rem] relative mx-auto mb-0">
          <div 
            className="absolute top-0 left-0 right-0 h-[2px] w-3/4 mx-auto blur-sm"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #6366f1, transparent)'
            }}
          />
          <div 
            className="absolute top-0 left-0 right-0 h-[1px] w-3/4 mx-auto"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #6366f1, transparent)'
            }}
          />
          <div 
            className="absolute top-0 left-0 right-0 h-[5px] w-1/4 mx-auto blur-sm"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #0ea5e9, transparent)'
            }}
          />
          <div 
            className="absolute top-0 left-0 right-0 h-[1px] w-1/4 mx-auto"
            style={{
              backgroundImage: 'linear-gradient(to right, transparent, #0ea5e9, transparent)'
            }}
          />
          <canvas 
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />
          {/* Removed bg-black from sparkles-mask */}
          <div className="sparkles-mask absolute inset-0 w-full h-full" />
        </div>
        
        <div className="mb-0">
          <p className="description-text">
            Witness the genesis of a new era. <span className="highlight-text">URJA SANGAM</span> is the ultimate convergence—a singular universe forged from the union of four legendary fests. Here, the raw power of <strong className="font-bold text-white">athleticism</strong>, the boundless innovation of <strong className="font-bold text-white">technology</strong>, the vibrant soul of <strong className="font-bold text-white">culture</strong>, and the profound impact of <strong className="font-bold text-white">community</strong> collide to create one unforgettable legacy.
          </p>
          
          <div className="date-section">
            The saga unfolds from <span className="date-highlight">10th to 17th October</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convergence;
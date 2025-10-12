/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        energia: '#9333EA',
        urjotsav: '#3B82F6',
        kaltarang: '#EF4444',
        souardhya: '#F59E0B',
        'bg-dark': '#0A0118',
        'bg-card': '#1A0B2E',
        'text-light': '#FFFFFF',
        'text-dim': '#A78BFA',
      },
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif'],
        'turret': ['Turret Road', 'cursive'],
        'dm': ['DM Sans', 'sans-serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 4s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'twinkle': 'twinkle 3s infinite',
        'rotate': 'rotate 2s linear infinite',
        'pulse-stone': 'stonePulse 2.5s infinite',
        'lightning1': 'lightning1 3s ease-in-out infinite',
        'lightning2': 'lightning2 3s ease-in-out infinite 1.5s',
        'node-pulse': 'nodePulse 2s ease-in-out infinite',
        'title-pulse': 'titlePulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-right': 'scrollRight 40s linear infinite',
        'scroll-left': 'scrollLeft 40s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        rotate: {
          to: { transform: 'rotate(360deg)' },
        },
        stonePulse: {
          '0%, 100%': { 
            boxShadow: '0 0 40px currentColor',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 80px currentColor, 0 0 120px currentColor',
            transform: 'scale(1.1)',
          },
        },
        lightning1: {
          '0%, 100%': { 
            opacity: '0',
            transform: 'translateX(-50%) translateY(-100%)',
          },
          '50%': { 
            opacity: '1',
            transform: 'translateX(-50%) translateY(0)',
          },
        },
        lightning2: {
          '0%, 100%': { 
            opacity: '0',
            transform: 'translateX(-50%) translateY(100%)',
          },
          '50%': { 
            opacity: '1',
            transform: 'translateX(-50%) translateY(0)',
          },
        },
        nodePulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
          },
          '50%': { 
            transform: 'scale(1.4)',
            boxShadow: '0 0 50px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 215, 0, 0.6)',
          },
        },
        titlePulse: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 50px rgba(255, 215, 0, 0.7))',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 12px))' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(calc(-50% - 12px))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
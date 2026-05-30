import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Playfair Display', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'rose-gold': '#C4956A',
        'rose-gold-light': '#E8D4C0',
        'rose-gold-dark': '#A07848',
        champagne: '#F5E6D3',
        ivory: '#FAF8F5',
        blush: '#F2D5D5',
        'warm-dark': '#1A1A1A',
        'warm-mid': '#6B6B6B',
      },
      animation: {
        'gradient-shift': 'gradientShift 10s ease infinite',
        'float': 'float 7s ease-in-out infinite',
        'float-alt': 'float 9s ease-in-out 2s infinite',
        'float-slow': 'float 11s ease-in-out 4s infinite',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        scrollDot: {
          '0%': { opacity: '0', transform: 'translateX(-50%) translateY(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(14px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

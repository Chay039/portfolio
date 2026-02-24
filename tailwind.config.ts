import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          'primary': '#04060f',
          'secondary': '#080d1a',
        },
        'accent': {
          'cyan': '#00e5ff',
          'gold': '#f0b429',
        },
        'text': {
          'primary': '#f0f4ff',
          'muted': '#7a8aa0',
        },
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        'xl': '20px',
      },
      backgroundImage: {
        'glass': 'rgba(255,255,255,0.04)',
        'gradient-mesh': 'linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(240,180,41,0.05) 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,229,255,0.3)',
        'glow-gold': '0 0 20px rgba(240,180,41,0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0,229,255,0.1)',
      },
      borderColor: {
        'glass': 'rgba(0,229,255,0.15)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0,229,255,0.5)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'typewriter': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'typewriter': 'typewriter 0.5s steps(40, end)',
        'bounce-slow': 'bounce-slow 2s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config

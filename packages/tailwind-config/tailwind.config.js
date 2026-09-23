/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        koshin: {
          canvas: '#08080D',
          'canvas-body': '#0D0D15',
          surface: '#141422',
          'surface-elevated': '#1D1D30',
          border: '#282842',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          pink: {
            400: '#FF2E93',
            500: '#FF007F',
            600: '#D6006B',
          },
          cyan: {
            400: '#38F3FF',
            500: '#00F0FF',
            600: '#00B8C4',
          },
          purple: {
            400: '#9D4EDD',
            500: '#7B2CBF',
            700: '#3C096C',
          },
          accent: {
            bonfire: '#FF6600',
            green: '#00FF87',
            crimson: '#FF1744',
          },
          text: {
            white: '#FFFFFF',
            body: '#E2E2ED',
            muted: '#9191A8',
            chalk: '#F7F7FA',
          }
        }
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'var(--font-teko)', 'Impact', 'sans-serif'],
        athletic: ['var(--font-barlow)', 'var(--font-montserrat)', 'sans-serif'],
        brush: ['var(--font-brush)', 'cursive'],
        chalk: ['var(--font-caveat)', 'cursive'],
        body: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 15px rgba(255, 0, 127, 0.5), 0 0 30px rgba(255, 0, 127, 0.25)',
        'neon-pink-lg': '0 0 25px rgba(255, 0, 127, 0.8), 0 0 50px rgba(255, 0, 127, 0.4)',
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.25)',
        'neon-cyan-lg': '0 0 25px rgba(0, 240, 255, 0.8), 0 0 50px rgba(0, 240, 255, 0.4)',
        'card-glow': '0 0 30px rgba(0, 0, 0, 0.8), 0 1px 15px rgba(255, 0, 127, 0.15)',
      },
      backgroundImage: {
        'miami-sunset': 'linear-gradient(135deg, #FF007F 0%, #7B2CBF 50%, #00F0FF 100%)',
        'neon-strike': 'linear-gradient(90deg, #FF007F 0%, #00F0FF 100%)',
        'card-glass': 'linear-gradient(180deg, rgba(29, 29, 48, 0.75) 0%, rgba(13, 13, 21, 0.92) 100%)',
      }
    }
  },
  plugins: []
};

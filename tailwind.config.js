/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        koshin: {
          pink: {
            400: '#FF2E93',
            500: '#FF007F', // Primary Brand Neon
            600: '#D6006B',
          },
          cyan: {
            400: '#38F3FF',
            500: '#00F0FF', // Secondary Brand Neon
            600: '#00B8C4',
          },
          purple: {
            400: '#9D4EDD',
            500: '#7B2CBF', // Synthwave Ambient
            700: '#3C096C',
            900: '#240046',
          },
          canvas: {
            black: '#08080D',
            body: '#0D0D15',
          },
          surface: {
            card: '#141422',
            elevated: '#1D1D30',
            border: '#282842',
          },
          accent: {
            bonfire: '#FF6600',
            green: '#00FF87',
            crimson: '#FF1744',
          }
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        brush: ['"Permanent Marker"', 'cursive'],
        neon: ['"Mr Dafoe"', 'cursive'],
        chalk: ['"Caveat"', 'cursive'],
        athletic: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 15px rgba(255, 0, 127, 0.6), 0 0 30px rgba(255, 0, 127, 0.3)',
        'neon-pink-lg': '0 0 25px rgba(255, 0, 127, 0.8), 0 0 50px rgba(255, 0, 127, 0.4)',
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.6), 0 0 30px rgba(0, 240, 255, 0.3)',
        'neon-cyan-lg': '0 0 25px rgba(0, 240, 255, 0.8), 0 0 50px rgba(0, 240, 255, 0.4)',
        'glass-card': '0 12px 40px 0 rgba(0, 0, 0, 0.65)',
      },
      backgroundImage: {
        'miami-sunset': 'linear-gradient(135deg, #FF007F 0%, #7B2CBF 50%, #00F0FF 100%)',
        'neon-strike': 'linear-gradient(90deg, #FF007F 0%, #00F0FF 100%)',
        'card-glass': 'linear-gradient(180deg, rgba(29, 29, 48, 0.75) 0%, rgba(13, 13, 21, 0.92) 100%)',
      }
    },
  },
  plugins: [],
}

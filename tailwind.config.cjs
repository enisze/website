module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },

      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        shimmer: 'shimmer 2s linear infinite',
        fade: 'fadeIn 1s ease-in-out'
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%'
          }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        }
      }
    }
  },
  plugins: [],
  extend: {}
}

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },

      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%'
          }
        }
      }
    }
  },
  plugins: [],
  extend: {}
}

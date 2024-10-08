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
				fade: 'fadeIn 1s ease-in-out',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				shake: 'shake 0.75s ease-in-out'
			},
			keyframes: {
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				shake: {
					'0%, 100%': {
						transform: 'rotate(3deg)'
					},
					'25%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					},
					'75%': {
						transform: 'rotate(-3deg)'
					}
				},
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
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

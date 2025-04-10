import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				rubik: ['Rubik', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'background-gradient': {
					'0%, 100%': {
						transform: 'translate(0, 0)',
						animationDelay: 'var(--background-gradient-delay, 0s)',
					},
					'20%': {
						transform:
							'translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)))',
					},
					'40%': {
						transform:
							'translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)))',
					},
					'60%': {
						transform:
							'translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)))',
					},
					'80%': {
						transform:
							'translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)))',
					},
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				ripple: {
					'0%': { transform: 'scale(0)', opacity: '0.3' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				},
				'ripple-stay': {
					'0%': { transform: 'scale(1)', opacity: '0.3' },
					'100%': { transform: 'scale(1.2)', opacity: '0.3' }
				},
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' }
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
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				ripple: 'ripple 0.6s ease-out',
				'ripple-stay': 'ripple-stay 1s ease-out forwards',
				'background-gradient':
					'background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				shimmer: 'shimmer 2s linear infinite',
				fade: 'fadeIn 1s ease-in-out',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				shake: 'shake 0.75s ease-in-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config

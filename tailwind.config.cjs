module.exports = {
	darkMode: ['class', 'class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		fontFamily: {
    			rubik: [
    				'Rubik',
    				'sans-serif'
    			]
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
    				from: {
    					opacity: 0
    				},
    				to: {
    					opacity: 1
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			shimmer: {
    				from: {
    					backgroundPosition: '0 0'
    				},
    				to: {
    					backgroundPosition: '-200% 0'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
	extend: {}
}

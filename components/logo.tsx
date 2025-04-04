interface LogoProps {
	width?: number
	height?: number
	className?: string
}

export function Logo({ width = 600, height = 600, className = '' }: LogoProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 600 600'
			width={width}
			height={height}
			className={className}
			aria-label='Logo'
			role='img'
		>
			{/* Black E shape */}
			<path
				d='M170 140 L460 140 L460 180 L230 180 L230 270 L390 270 L390 310 L230 310 L230 420 L460 420 L460 460 L170 460 Z'
				fill='#ffffff'
			/>

			{/* Single straight diagonal line */}
			<path
				d='M445 165 L200 440'
				stroke='#ffffff'
				strokeWidth='40'
				strokeLinecap='butt'
			/>

			{/* White center line of the E */}
			<rect x='230' y='270' width='220' height='40' fill='#ffffff' />
		</svg>
	)
}

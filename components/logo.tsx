interface LogoProps {
	width?: number
	height?: number
	className?: string
}

export function Logo({ width = 600, height = 600, className = '' }: LogoProps) {
	return (
		<svg
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 200 200'
			width={width}
			height={height}
			className={className}
		>
			<circle
				cx='100'
				cy='95'
				r='60'
				stroke='white'
				stroke-width='4'
				fill='black'
			/>

			{/* E letter */}
			<line x1='80' y1='50' x2='120' y2='50' stroke='white' stroke-width='4' />
			<line x1='80' y1='48' x2='80' y2='112' stroke='white' stroke-width='4' />
			<line
				x1='80'
				y1='110'
				x2='120'
				y2='110'
				stroke='white'
				stroke-width='4'
			/>
			<line x1='80' y1='80' x2='122' y2='80' stroke='white' stroke-width='4' />

			{/* Z letter */}
			<line
				x1='120.6'
				y1='80'
				x2='81.5'
				y2='140'
				stroke='white'
				stroke-width='4'
			/>
			<line
				x1='80'
				y1='140'
				x2='120'
				y2='140'
				stroke='white'
				stroke-width='4'
			/>
		</svg>
	)
}

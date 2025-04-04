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
			style={{ stroke: 'currentColor' }}
		>
			<circle cx='100' cy='95' r='60' strokeWidth='4' fill='none' />

			{/* E letter */}
			<line x1='80' y1='50' x2='120' y2='50' strokeWidth='4' />
			<line x1='80' y1='48' x2='80' y2='112' strokeWidth='4' />
			<line x1='80' y1='110' x2='120' y2='110' strokeWidth='4' />
			<line x1='80' y1='80' x2='122' y2='80' strokeWidth='4' />

			{/* Z letter */}
			<line x1='120.6' y1='80' x2='81.5' y2='140' strokeWidth='4' />
			<line x1='80' y1='140' x2='120' y2='140' strokeWidth='4' />
		</svg>
	)
}

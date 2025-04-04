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
			style={{ stroke: 'currentColor', strokeWidth: 4 }}
		>
			<line x1='20' y1='18' x2='20' y2='142' />
			<line x1='20' y1='80' x2='70' y2='80' />

			<line x1='20' y1='140' x2='118' y2='20' />
			<line x1='120' y1='20' x2='20' y2='20' />
			<line x1='20' y1='140' x2='120' y2='140' />
		</svg>
	)
}

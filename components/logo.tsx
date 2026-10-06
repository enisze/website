interface LogoProps {
	width?: number
	height?: number
	className?: string
}

export function Logo({ width = 56, height = 56, className = '' }: LogoProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 64 64'
			width={width}
			height={height}
			className={className}
			fill='none'
			aria-hidden='true'
			focusable='false'
		>
			<circle
				cx='32'
				cy='32'
				r='28'
				fill='currentColor'
				fillOpacity='0.035'
				stroke='currentColor'
				strokeOpacity='0.25'
				strokeWidth='1.5'
			/>
			<g
				stroke='currentColor'
				strokeWidth='3.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M28 20H15V44H28M15 32H26' />
				<path d='M35 20H49L35 44H49' />
			</g>
			<circle cx='52' cy='12' r='3' fill='#3b82f6' />
		</svg>
	)
}

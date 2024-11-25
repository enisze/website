import { motion } from 'framer-motion'

type City = {
	id: string
	x: number
	y: number
}

type AnimatedLineProps = {
	cities: City[]
}

export default function AnimatedLine({ cities }: AnimatedLineProps) {
	const pathVariants = {
		hidden: { pathLength: 0 },
		visible: {
			pathLength: 1,
			transition: {
				duration: 5,
				ease: 'easeInOut',
				repeat: Infinity
			}
		}
	}

	const createPath = () => {
		const [aachen, prague, bangkok] = cities
		return `M${aachen.x},${aachen.y} L${prague.x},${prague.y} L${aachen.x},${aachen.y} L${bangkok.x},${bangkok.y} L${aachen.x},${aachen.y}`
	}

	return (
		<svg className='absolute top-0 left-0 w-full h-full'>
			<motion.path
				d={createPath()}
				fill='none'
				stroke='rgba(255, 0, 0, 0.7)'
				strokeWidth='3'
				variants={pathVariants}
				initial='hidden'
				animate='visible'
			/>
		</svg>
	)
}

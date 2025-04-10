import { motion } from 'framer-motion'

type City = {
	id: string
	name: string
	country: string
	x: number
	y: number
	info: string
}

type InfoCardProps = {
	city: City
}

export default function InfoCard({ city }: InfoCardProps) {
	return (
		<motion.div
			className='absolute bg-white p-4 rounded-lg shadow-lg max-w-[200px]'
			style={{ left: city.x + 20, top: city.y + 20 }}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={{ duration: 0.2 }}
		>
			<h3 className='text-lg font-bold'>{city.name}</h3>
			<p className='text-sm text-gray-600'>{city.country}</p>
			<p className='text-sm mt-2'>{city.info}</p>
		</motion.div>
	)
}

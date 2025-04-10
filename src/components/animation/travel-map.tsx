'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedLine from './animated-line'
import InfoCard from './info-card'

const cities = [
	{
		id: 'aachen',
		name: 'Aachen',
		country: 'Germany',
		x: 100,
		y: 150,
		info: 'Historic city known for its cathedral and thermal baths.'
	},
	{
		id: 'prague',
		name: 'Prague',
		country: 'Czech Republic',
		x: 200,
		y: 140,
		info: 'Capital city famous for its Old Town Square and astronomical clock.'
	},
	{
		id: 'bangkok',
		name: 'Bangkok',
		country: 'Thailand',
		x: 450,
		y: 300,
		info: 'Vibrant capital city with ornate shrines and bustling street life.'
	}
]

export default function TravelMap() {
	const [hoveredCity, setHoveredCity] = useState<string | null>(null)

	return (
		<div className='relative w-[650px] h-[400px] bg-blue-100 rounded-lg overflow-hidden shadow-lg'>
			<img
				src='/world-map.png'
				alt='World Map'
				className='w-full h-full object-cover opacity-75'
			/>
			<AnimatedLine cities={cities} />
			{cities.map((city) => (
				<motion.div
					key={city.id}
					className='absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer'
					style={{ left: city.x, top: city.y }}
					whileHover={{ scale: 1.5 }}
					onHoverStart={() => setHoveredCity(city.id)}
					onHoverEnd={() => setHoveredCity(null)}
				/>
			))}
			{hoveredCity && (
				<InfoCard city={cities.find((c) => c.id === hoveredCity)!} />
			)}
		</div>
	)
}

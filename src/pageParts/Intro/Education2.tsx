'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

interface EducationInfo {
	title: string
	university: string
	description: string
	time: string
}

interface City {
	id: string
	name: string
	country: string
	position: [number, number]
	info: EducationInfo[]
}

const cities: City[] = [
	{
		id: 'aachen',
		name: 'Aachen',
		country: 'Germany',
		position: [50.7753, 6.0839],
		info: [
			{
				title: 'Master of Computer Science',
				university: 'RWTH Aachen University',
				description:
					'Fokus: RDF Schema Generation, Artificial Intelligence, Data Mining',
				time: 'Oct. 2016 - Aug. 2021'
			},
			{
				title: 'Bachelor of Computer Science',
				university: 'RWTH Aachen University',
				description:
					'Fokus: Generative Development, Machine Learning, Data Science',
				time: 'Oct. 2013 - Oct. 2016'
			}
		]
	},
	{
		id: 'prague',
		name: 'Prague',
		country: 'Czech Republic',
		position: [50.0755, 14.4378],
		info: [
			{
				title: 'Computer Science (Exchange)',
				university: 'Czech Technical University Prag',
				description:
					'Fokus: Advanced Database Systems, Efficient Text Pattern Matching, User Interface Design',
				time: 'Sep. 2017 - Feb. 2018'
			}
		]
	},
	{
		id: 'bangkok',
		name: 'Bangkok',
		country: 'Thailand',
		position: [13.7563, 100.5018],
		info: [
			{
				title: 'System Software Engineering (Exchange)',
				university: 'Thai German Graduate School of Engineering Bangkok',
				description:
					'Fokus: Selected Topics of Machine Learning, Advanced Digital Image Processing',
				time: 'Jan 2019 - Jun 2019'
			}
		]
	}
]

// Set up Leaflet default icon options
L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
})

const PopupContent = ({ city }: { city: City }) => (
	<div className='w-[300px] min-w-[200px]'>
		<div className='flex gap-1 items-center'>
			<h3 className='text-lg font-bold'>{city.name}</h3>
			<div className='text-sm text-gray-600'>{city.country}</div>
		</div>
		{city.info.map((info, idx) => (
			<div key={idx} className='flex flex-col gap-1 mt-2'>
				<h4 className='text-base font-bold'>{info.title}</h4>
				<div className='text-sm font-semibold'>{info.university}</div>
				<div className='text-xs text-gray-600'>{info.time}</div>
				<div className='text-xs'>{info.description}</div>
			</div>
		))}
	</div>
)

const AnimatedFlyTo = () => {
	const map = useMap()
	const [isPopupOpen, setIsPopupOpen] = useState(false)

	useEffect(() => {
		let currentCityIndex = 0
		let intervalId: NodeJS.Timeout | null = null

		const getNextCityIndex = (current: number) => {
			return (current + 1) % cities.length
		}

		const flyToNextCity = () => {
			const city = cities[currentCityIndex]
			map.flyTo(city.position, 8, {
				duration: 3
			})
			currentCityIndex = getNextCityIndex(currentCityIndex)
		}

		const adjustViewForPopup = () => {
			const target = map.getCenter()
			const adjustedPoint = [target.lat + 0.2, target.lng] // Move center point up
			map.flyTo(adjustedPoint as L.LatLngExpression, 6, {
				duration: 1
			})
		}

		const startAnimation = () => {
			if (intervalId) return // Prevent multiple intervals
			flyToNextCity()
			intervalId = setInterval(flyToNextCity, 6000)
		}

		const stopAnimation = () => {
			if (intervalId) {
				clearInterval(intervalId)
				intervalId = null
			}
		}

		map.on('popupopen', () => {
			setIsPopupOpen(true)
			stopAnimation()
			adjustViewForPopup()
		})

		map.on('popupclose', () => {
			setIsPopupOpen(false)
			startAnimation()
		})

		if (!isPopupOpen) {
			startAnimation()
		}

		return () => {
			stopAnimation()
			map.off('popupopen')
			map.off('popupclose')
		}
	}, [map, isPopupOpen])

	return null
}

const Education2 = () => {
	const mapRef = useRef<L.Map | null>(null)
	const markersRef = useRef<{ [key: string]: L.Marker }>({})

	const createPopupContent = (city: City) => {
		const content = document.createElement('div')
		const root = createRoot(content)
		root.render(<PopupContent city={city} />)
		return content
	}

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='w-full h-full overflow-hidden shadow-lg'>
				<MapContainer
					ref={mapRef}
					center={[30, 0]}
					zoom={2}
					style={{ height: '100%', width: '100%', opacity: 0.85 }}
					zoomControl={false}
				>
					<TileLayer
						url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					/>
					{cities.map((city) => (
						<Marker
							key={city.id}
							position={city.position}
							ref={(ref) => {
								if (ref) {
									markersRef.current[city.id] = ref
									ref.bindPopup(() => createPopupContent(city), {
										minWidth: 300,
										maxWidth: 300,
										keepInView: true,
										autoPan: true,
										autoPanPadding: [100, 100],
										offset: [0, 10],
										className: 'custom-popup'
									})
								}
							}}
						/>
					))}
					<AnimatedFlyTo />
				</MapContainer>
			</div>
		</div>
	)
}

export default Education2

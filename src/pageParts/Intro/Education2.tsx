'use client'

import { FadeIn } from '@/components/FadeIn'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Calendar, GraduationCap, MapPin, Plane } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useTranslation } from 'react-i18next'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

interface EducationInfo {
	id: string
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

const createCustomIcon = () => {
	return L.divIcon({
		className: 'custom-div-icon',
		html: `
      <div class="relative">
        <div class="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-25 marker-pulse"></div>
        <div class="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.710c.035-1.442.121-2.870.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>
        </div>
      </div>
    `,
		iconSize: [30, 30],
		iconAnchor: [15, 15]
	})
}

const PopupContent = ({ city }: { city: City }) => {
	const { t } = useTranslation()

	return (
		<div className='w-full max-w-md p-2'>
			<div className='flex items-center gap-2 mb-4'>
				<MapPin className='w-5 h-5 flex-none text-blue-500' />
				<div>
					<h3 className='text-lg font-bold text-gray-900'>
						{t(`education.cities.${city.id}.name`)}
					</h3>
					<p className='text-sm text-gray-600'>
						{t(`education.cities.${city.id}.country`)}
					</p>
				</div>
			</div>
			<div className='space-y-4'>
				{city.info.map((info, idx) => (
					<div
						key={idx}
						className='p-3 bg-white rounded-lg shadow-sm border border-gray-100'
					>
						<div className='flex items-start gap-2'>
							<GraduationCap className='w-5 h-5 flex-none text-blue-500 mt-1' />
							<div>
								<h4 className='font-semibold text-gray-900'>
									{t(`education.degrees.${info.id}.title`)}
								</h4>
								<p className='text-sm text-gray-700'>
									{t(`education.degrees.${info.id}.university`)}
								</p>
								<p className='text-xs text-gray-500 mt-1'>
									{t(`education.degrees.${info.id}.time`)}
								</p>
								<p className='text-sm text-gray-600 mt-2'>
									{t(`education.degrees.${info.id}.description`)}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

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
			const adjustedPoint = [target.lat + 2, target.lng]
			map.flyTo(adjustedPoint as L.LatLngExpression, 6, {
				duration: 1
			})
		}

		const startAnimation = () => {
			if (intervalId) return
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

const MapInteractionController = () => {
	const map = useMap()

	useEffect(() => {
		const enableInteractions = () => {
			map.scrollWheelZoom.enable()
			map.dragging.enable()
		}

		const disableInteractions = () => {
			map.scrollWheelZoom.disable()
			map.dragging.disable()
		}

		map.on('click', enableInteractions)
		map.on('mouseleave', disableInteractions)

		return () => {
			map.off('click', enableInteractions)
			map.off('mouseleave', disableInteractions)
		}
	}, [map])

	return null
}

const EducationGridItem = ({
	info,
	city,
	isExchange = false
}: {
	info: EducationInfo
	city: City
	isExchange?: boolean
}) => {
	const { t } = useTranslation()

	return (
		<div className='flex gap-4'>
			<div className='flex-none'>
				<div className='relative w-12 h-12'>
					<div className='w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center'>
						<GraduationCap className='w-6 h-6 flex-none text-black dark:text-white' />
					</div>
					{isExchange && (
						<div className='absolute -top-1 -right-1 w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center'>
							<Plane className='w-3 h-3 text-black dark:text-white' />
						</div>
					)}
				</div>
			</div>
			<div className='space-y-2'>
				<h3 className='text-xl font-bold '>
					{t(`education.degrees.${info.id}.university`)}
				</h3>
				<p className='font-medium'>{t(`education.degrees.${info.id}.title`)}</p>
				<div className='flex flex-col gap-2 text-slate-900 dark:text-slate-300'>
					<div className='flex items-center gap-1'>
						<MapPin className='w-4 h-4 flex-none' />
						<span className='text-sm'>
							{t(`education.cities.${city.id}.name`)},{' '}
							{t(`education.cities.${city.id}.country`)}
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<Calendar className='w-4 h-4 flex-none' />
						<span className='text-sm'>
							{t(`education.degrees.${info.id}.time`)}
						</span>
					</div>
					<p className='text-sm text-slate-900 dark:text-slate-300'>
						{t(`education.degrees.${info.id}.description`)}
					</p>
				</div>
			</div>
		</div>
	)
}

const cities: City[] = [
	{
		id: 'aachen',
		name: 'Aachen',
		country: 'Germany',
		position: [50.7753, 6.0839],
		info: [
			{
				id: 'aachen_master',
				title: 'Master of Computer Science',
				university: 'RWTH Aachen University',
				description:
					'Focus: RDF Schema Generation, Artificial Intelligence, Data Mining',
				time: 'Oct. 2016 - Aug. 2021'
			},
			{
				id: 'aachen_bachelor',
				title: 'Bachelor of Computer Science',
				university: 'RWTH Aachen University',
				description:
					'Focus: Generative Development, Machine Learning, Data Science',
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
				id: 'prague_exchange',
				title: 'Computer Science (Exchange)',
				university: 'Czech Technical University Prague',
				description:
					'Focus: Advanced Database Systems, Efficient Text Pattern Matching, UI Design',
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
				id: 'bangkok_exchange',
				title: 'System Software Engineering (Exchange)',
				university: 'Thai German Graduate School of Engineering Bangkok',
				description:
					'Focus: Selected Topics of Machine Learning, Advanced Digital Image Processing',
				time: 'Jan 2019 - Jun 2019'
			}
		]
	}
]

const Education = () => {
	const mapRef = useRef<L.Map | null>(null)
	const markersRef = useRef<{ [key: string]: L.Marker }>({})

	const createPopupContent = (city: City) => {
		const content = document.createElement('div')
		const root = createRoot(content)
		root.render(<PopupContent city={city} />)
		return content
	}

	// Create flat list of education items with city info
	const sortedEducationItems = cities
		.flatMap((city) =>
			city.info.map((info) => ({
				...info,
				city
			}))
		)
		.sort((a, b) => {
			const getYear = (time: string) =>
				Number.parseInt(time.split(' ').pop() || '0')
			return getYear(b.time) - getYear(a.time)
		})

	return (
		<div className='bg-gray-100 dark:bg-gray-900 rounded-xl shadow-xl dark:shadow-gray-900 overflow-hidden'>
			<div className='grid lg:grid-cols-2 min-h-[810px]'>
				<div className='flex flex-col gap-6 p-8'>
					{sortedEducationItems.map((item, idx) => (
						<FadeIn key={`${item.city.id}-${idx}`}>
							<EducationGridItem
								info={item}
								city={item.city}
								isExchange={item.city.id !== 'aachen'}
							/>
						</FadeIn>
					))}
				</div>

				<div className='h-[400px] md:h-full'>
					<MapContainer
						ref={mapRef}
						center={[30, 0]}
						zoom={2}
						style={{ height: '100%', width: '100%' }}
						zoomControl={false}
						className='z-10'
						scrollWheelZoom={false}
						dragging={false}
					>
						<TileLayer
							url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
						{cities.map((city) => (
							<Marker
								key={city.id}
								position={city.position}
								icon={createCustomIcon()}
								ref={(ref) => {
									if (ref) {
										markersRef.current[city.id] = ref
										ref.bindPopup(() => createPopupContent(city), {
											minWidth: 280,
											maxWidth: 320,
											className: 'custom-popup',
											offset: [-12, -12]
										})
									}
								}}
							/>
						))}
						<AnimatedFlyTo />
						<MapInteractionController />
					</MapContainer>
				</div>
			</div>
		</div>
	)
}

export default Education

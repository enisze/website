'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type React from 'react'
import { useEffect } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

// Set up Leaflet default icon options
L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
})

// Add this custom icon creation before the AnimatedZoom component
const createHouseIcon = () => {
	return L.divIcon({
		className: 'custom-house-icon',
		html: `
			<div class="relative">
				<div class="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-25 marker-pulse"></div>
				<div class="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
						<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
						<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
					</svg>
				</div>
			</div>
		`,
		iconSize: [30, 30],
		iconAnchor: [15, 15]
	})
}

const AnimatedZoom: React.FC = () => {
	const map = useMap()

	useEffect(() => {
		// Smooth zoom effect
		setTimeout(() => {
			map.flyTo([50.9375, 6.9603], 12, {
				duration: 3
			})
		}, 1000)
	}, [map])

	return null
}

const MapComponent: React.FC = () => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='w-full h-full overflow-hidden shadow-lg'>
				<MapContainer
					center={[51.1657, 10.4515]} // Center position in Germany
					zoom={6}
					style={{ height: '100%', width: '100%', opacity: 0.85 }}
					zoomControl={false}
				>
					<TileLayer
						url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
						noWrap
					/>
					<Marker position={[50.9375, 6.9603]} icon={createHouseIcon()} />
					<AnimatedZoom />
				</MapContainer>
			</div>
		</div>
	)
}

export default MapComponent

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
			<div className='w-full h-full rounded-lg overflow-hidden shadow-lg'>
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
					<Marker position={[50.9375, 6.9603]} />
					<AnimatedZoom />
				</MapContainer>
			</div>
		</div>
	)
}

export default MapComponent

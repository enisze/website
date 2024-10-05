'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type React from 'react'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

// ;(L.Icon.Default.prototype as any)._getIconUrl = undefined
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
		setTimeout(() => {
			map.flyTo([50.9375, 6.9603], 12, {
				duration: 3
			})
		}, 1000)
	}, [map])

	return null
}

export const MapComponent: React.FC = () => {
	const [mapReady, setMapReady] = useState(false)

	useEffect(() => {
		setMapReady(true)
	}, [])

	return (
		<div className='w-full h-full flex items-center justify-center'>
			{mapReady && (
				<div className='w-full h-full rounded-lg overflow-hidden shadow-lg'>
					<MapContainer
						center={[51.1657, 10.4515]}
						zoom={6}
						style={{ height: '100%', width: '100%' }}
						zoomControl={false}
					>
						<TileLayer
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Marker position={[50.9375, 6.9603]} />
						<AnimatedZoom />
					</MapContainer>
				</div>
			)}
		</div>
	)
}

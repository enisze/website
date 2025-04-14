'use client'

import dynamic from 'next/dynamic'

const MapComponent = dynamic(
	async () => import('../pageParts/Intro/MapComponent'),
	{
		ssr: false
	}
)

export function MapComponentClient() {
	return <MapComponent />
}

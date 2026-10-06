'use client'

import { TileLayer } from 'react-leaflet'

export function OpenStreetMapTiles({
	appearance = 'theme',
	noWrap = false
}: {
	appearance?: 'dark' | 'theme'
	noWrap?: boolean
}) {
	return (
		<TileLayer
			url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			className={
				appearance === 'dark'
					? '[filter:grayscale(1)_invert(1)_brightness(0.75)_contrast(0.9)]'
					: 'saturate-50 dark:[filter:grayscale(1)_invert(1)_brightness(0.75)_contrast(0.9)]'
			}
			maxZoom={19}
			noWrap={noWrap}
			updateWhenIdle
			updateWhenZooming={false}
			keepBuffer={1}
		/>
	)
}

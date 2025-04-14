'use client'

import { useEffect, useState } from 'react'
import Threads from '../pageParts/Intro/Threads'
import { AnimatedGradientClient } from './AnimatedGradienClient'

interface ResponsiveBackgroundProps {
	className?: string
	gradientColors?: string[]
	threadsColor?: [number, number, number]
	threadsAmplitude?: number
	threadsDistance?: number
}

export const ResponsiveBackground = ({
	className = 'absolute inset-0',
	gradientColors = ['#3B82F6', '#60A5FA', '#93C5FD'],
	threadsColor = [0.2, 0.6, 1],
	threadsAmplitude = 3,
	threadsDistance = 0.6
}: ResponsiveBackgroundProps) => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	if (isMobile) {
		return (
			<div className={`${className} opacity-30`}>
				<AnimatedGradientClient colors={gradientColors} />
			</div>
		)
	}

	return (
		<Threads
			color={threadsColor}
			amplitude={threadsAmplitude}
			distance={threadsDistance}
		/>
	)
}

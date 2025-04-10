'use client'

import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'

interface Circle {
	id: number
	x: number
	y: number
	size: number
	speed: number
	direction: { x: number; y: number }
}

interface FloatingCirclesProps {
	blur: number
	size: number
	speed: number
	circleCount: number
}

export default function FloatingCircles({
	blur = 15,
	size = 120,
	speed = 0.5,
	circleCount = 6
}: FloatingCirclesProps) {
	const [circles, setCircles] = useState<Circle[]>([])
	const containerRef = useRef<HTMLDivElement>(null)
	const animationRef = useRef<number>()

	// Initialize circles
	useEffect(() => {
		if (!containerRef.current) return

		const generateCircles = (count: number) => {
			const newCircles: Circle[] = []

			for (let i = 0; i < count; i++) {
				newCircles.push({
					id: i,
					x: Math.random() * 100,
					y: Math.random() * 100,
					size: Math.random() * 0.4 + 0.6, // Size variation factor (60-100%)
					speed: Math.random() * 0.4 + 0.6, // Speed variation factor
					direction: {
						x: (Math.random() - 0.5) * 2, // -1 to 1
						y: (Math.random() - 0.5) * 2 // -1 to 1
					}
				})
			}

			return newCircles
		}

		setCircles(generateCircles(circleCount))

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
		}
	}, [circleCount])

	// Animation loop
	useEffect(() => {
		if (!containerRef.current || circles.length === 0) return

		const animate = () => {
			setCircles((prevCircles) =>
				prevCircles.map((circle) => {
					// Calculate new position
					let newX = circle.x + circle.direction.x * circle.speed * speed * 0.1
					let newY = circle.y + circle.direction.y * circle.speed * speed * 0.1

					// Check boundaries and reverse direction if needed
					let newDirectionX = circle.direction.x
					let newDirectionY = circle.direction.y

					// Simple boundary checking (percentage-based)
					if (newX > 95) {
						newX = 95
						newDirectionX = -Math.abs(newDirectionX)
					} else if (newX < 5) {
						newX = 5
						newDirectionX = Math.abs(newDirectionX)
					}

					if (newY > 95) {
						newY = 95
						newDirectionY = -Math.abs(newDirectionY)
					} else if (newY < 5) {
						newY = 5
						newDirectionY = Math.abs(newDirectionY)
					}

					return {
						...circle,
						x: newX,
						y: newY,
						direction: {
							x: newDirectionX,
							y: newDirectionY
						}
					}
				})
			)

			animationRef.current = requestAnimationFrame(animate)
		}

		animationRef.current = requestAnimationFrame(animate)

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
		}
	}, [circles, speed])

	return (
		<div className='w-full mx-auto'>
			<div
				ref={containerRef}
				className='relative w-full h-[500px] rounded-lg overflow-hidden'
			>
				{circles.map((circle) => (
					<div
						key={circle.id}
						className={cn(
							'absolute rounded-full',
							'transform -translate-x-1/2 -translate-y-1/2  bg-gray-100 dark:bg-gray-900'
						)}
						style={{
							left: `${circle.x}%`,
							top: `${circle.y}%`,
							width: `${size * circle.size}px`,
							height: `${size * circle.size}px`,
							filter: `blur(${blur}px)`
						}}
					/>
				))}
			</div>
		</div>
	)
}

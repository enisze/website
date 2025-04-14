'use client'

import dynamic from 'next/dynamic'

const AnimatedGradient = dynamic(
	async () =>
		import('../components/AnimatedGradient').then(
			(mod) => mod.AnimatedGradient
		),
	{
		ssr: false
	}
)

export function AnimatedGradientClient({
	colors
}: {
	colors: string[]
}) {
	return (
		<AnimatedGradient
			colors={colors}
			speed={0.08}
			blur='heavy'
			blobSize='small'
			className='dark:invert dark:hue-rotate-180'
		/>
	)
}

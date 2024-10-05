'use client'
import { useEffect, useState } from 'react'

export const Timer = () => {
	const [time, setTime] = useState('')
	const [showMoon, setShowMoon] = useState(false)

	useEffect(() => {
		const updateTime = () => {
			const berlinTime = new Date().toLocaleString('de', {
				timeZone: 'Europe/Berlin',
				hour: '2-digit',
				minute: '2-digit'
			})
			setTime(berlinTime)

			const currentHour = new Date().toLocaleString('de', {
				timeZone: 'Europe/Berlin',
				hour: '2-digit'
			})
			setShowMoon(Number(currentHour) >= 17 || Number(currentHour) < 5)
		}

		updateTime()
		const timerId = setInterval(updateTime, 1000)

		return () => clearInterval(timerId)
	}, [])

	return (
		<div className='text-lg bg-gray-800 bg-opacity-75 rounded p-2 flex gap-2 items-center'>
			{showMoon && <AnimatedMoon />}
			{time} MESZ
		</div>
	)
}

const AnimatedMoon = () => {
	return (
		<svg
			data-v-3021587a=''
			viewBox='0 0 24 24'
			width='1.2em'
			height='1.2em'
			className='mr-2'
		>
			<g fill='currentColor' fill-opacity='0'>
				<path d='M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z'>
					<animate id='lineMdMoonTwotoneLoop0' />
				</path>
			</g>
		</svg>
	)
}

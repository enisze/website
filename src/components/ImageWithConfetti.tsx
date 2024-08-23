'use client'
import Image from 'next/image'

import { useSetAtom } from 'jotai'
import { confettiAtom } from './ConfettiExplosion'

export const ImageWithConfetti = () => {
	const setConfetti = useSetAtom(confettiAtom)

	return (
		<>
			<Image
				src='/images/me.webp'
				alt='Enis Zejnilovic'
				width={932}
				height={910}
				className='flex-grow shadow-lg shadow-slate-950 w-full cursor-pointer m-auto p-1 rounded-full ring-2 ring-blue-800 dark:ring-blue-400/80'
				id='me'
				decoding='async'
				loading='lazy'
				onClick={() => setConfetti(true)}
			/>
		</>
	)
}

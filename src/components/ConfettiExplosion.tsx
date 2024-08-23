'use client'

import { atom, useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import Conffeti from 'react-confetti'
import { useWindowSize } from 'usehooks-ts'

export const confettiAtom = atom(false)

export const ConfettiExplosion = () => {
	const size = useWindowSize()

	const [confetti, setConfetti] = useAtom(confettiAtom)
	const [showConfetti, setShowConfetti] = useState(false)

	useEffect(() => {
		if (confetti) {
			setShowConfetti(true)
			setTimeout(() => {
				setShowConfetti(false)
			}, 5000)
			setConfetti(false)
		}
	}, [confetti, setConfetti])

	return (
		<>
			{showConfetti && (
				<Conffeti
					numberOfPieces={showConfetti ? 200 : 0}
					width={size.width}
					height={size.height}
				/>
			)}
		</>
	)
}

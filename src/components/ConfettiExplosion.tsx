'use client'

import { atom, useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import Conffeti from 'react-confetti'
import { useWindowSize } from 'usehooks-ts'

export const confettiAtom = atom(false)

export const ConfettiExplosion = ({
	confetti,
	setConfetti,
	atom
}: {
	confetti?: boolean
	setConfetti?: (value: boolean) => void
	atom?: boolean
}) => {
	const size = useWindowSize()

	const [showConfettiAtom, setConfettiAtom] = useAtom(confettiAtom)

	const [showConfetti, setShowConfetti] = useState(false)

	useEffect(() => {
		if (confetti) {
			setShowConfetti(true)
			setTimeout(() => {
				setShowConfetti(false)
			}, 5000)
			setConfetti?.(false)
		}

		if (atom && showConfettiAtom) {
			setShowConfetti(true)
			setTimeout(() => {
				setShowConfetti(false)
				setConfettiAtom(false)
			}, 5000)
		}
	}, [confetti, setConfetti, showConfettiAtom, setConfettiAtom, atom])

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

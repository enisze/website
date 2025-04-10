'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const FadeIn = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.2 }}
			viewport={{ once: true, margin: '-20px' }}
		>
			{children}
		</motion.div>
	)
}

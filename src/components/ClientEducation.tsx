'use client'

import dynamic from 'next/dynamic'

const Education2 = dynamic(
	async () => import('../pageParts/Intro/Education2'),
	{
		ssr: false
	}
)

export function ClientEducation() {
	return <Education2 />
}

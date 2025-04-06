import { ConfettiExplosion } from '@/components/ConfettiExplosion'
import { Footer } from '@/components/Layout/Footer'
import { Navbar } from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { BASE_URL } from '../../config'
import './globals.css'

export const metadata: Metadata = {
	title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
	description:
		'Portfolio of Enis Zejnilovic, a skilled Full-stack software engineer, with experience in web development. Specialized in React, TypeScript, and Next.js.',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/favicon.svg',
				href: '/favicon.svg'
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/favicon.svg',
				href: '/favicon.svg'
			}
		]
	},
	openGraph: {
		title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
		url: 'https://zejnilovic.de',
		type: 'website',
		images: [
			{
				url: `${BASE_URL}/images/preview.png`,
				alt: 'Enis Zejnilovic Portfolio Screenshot'
			}
		]
	},
	twitter: {
		creator: '@enis_zejnilovic',
		title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
		description:
			'Portfolio of Enis Zejnilovic, a skilled Full-stack software engineer, with experience in web development. Specialized in React, TypeScript, and Next.js.',
		card: 'summary_large_image',
		images: [
			{
				alt: 'Portfolio Website Screenshot',
				url: `${BASE_URL}/images/preview.png`
			}
		]
	},
	keywords: [
		'Portfolio',
		'enis zejnilovic',
		'software engineer',
		'project manager',
		'skills',
		'development',
		'focused',
		'enis',
		'zejnilovic',
		'react',
		'developer',
		'TypeScript',
		'NodeJS',
		'ReactJS',
		'NextJS'
	]
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<title>Enis Zejnilovic Portfolio</title>
			</head>

			<body className='dark:bg-black text-black dark:text-white flex flex-col'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<ConfettiExplosion atom />
					<Toaster />
					{/* <div className='fixed w-full z-20 bg-black'> */}
					<Navbar />
					{/* </div> */}
					<div className=''>
						{/* <GridPattern
							squares={[
								[4, 4],
								[5, 1],
								[8, 2],
								[6, 6],
								[10, 5],
								[13, 3]
							]}
							className={cn(
								'[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
								'inset-x-0 inset-y-[-30%] h-[150%] skew-y-12'
							)}
						/> */}
						{children}
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

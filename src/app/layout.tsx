import { ConfettiExplosion } from '@/components/ConfettiExplosion'
import { Footer } from '@/components/Layout/Footer'
import GridPattern from '@/components/Layout/GridPattern'
import { Navbar } from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { BASE_URL } from '../../config'
import './globals.css'

export const metadata: Metadata = {
	title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
	description:
		'Portfolio of Enis Zejnilovic, a skilled Full-stack software engineer, with experience in web development. Specialized in React, TypeScript, and Next.js.',
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
		'areas',
		'new',
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

			<body className='dark:bg-gray-900 text-black dark:text-white flex flex-col'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<ConfettiExplosion atom />
					<Toaster />
					<div className='fixed w-full z-20'>
						<Navbar />
					</div>
					<div className='py-12 lg:py-20 px-8'>
						{/* <DotPattern
              className={cn(
                '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
                'absolute h-screen z-10'
              )}
            /> */}
						<GridPattern
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
						/>
						{children}
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

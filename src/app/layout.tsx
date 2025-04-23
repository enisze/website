import { ConfettiExplosion } from '@/components/ConfettiExplosion'
import { TranslationProvider } from '@/components/i18n/I18nProvider'
import { Footer } from '@/components/Layout/Footer'
import { Navbar } from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import initTranslations from '@/i18n'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { BASE_URL } from '../../config'
import i18nConfig from '../../i18nConfig'
import './globals.css'

export async function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
	params
}: { params: Promise<{ locale: string }> }) {
	const { locale } = await params

	const { t } = await initTranslations({ locale })

	return {
		title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
		description: t('meta.description'),
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
			description: t('meta.description'),
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
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	const { resources } = await initTranslations({ locale })

	return (
		<html lang={locale}>
			<head>
				<title>Enis Zejnilovic Portfolio</title>
			</head>

			<body className='flex flex-col'>
				<Script
					defer
					src='https://cloud.umami.is/script.js'
					data-website-id='94a78e6e-3c15-4526-9d9d-111cc97b7d73'
				/>

				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<TranslationProvider locale={locale} resources={resources}>
						<ConfettiExplosion atom />
						<Toaster />
						<Navbar />
						<div className=''>{children}</div>
						<Footer />
					</TranslationProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

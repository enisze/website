import { ConfettiExplosion } from '@/components/ConfettiExplosion'
import { Footer } from '@/components/Layout/Footer'
import { Navbar } from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import { BASE_URL } from '../../../config'
import '../globals.css'
import i18nConfig from '@/i18nConfig'
import initTranslations from '@/i18n'
import I18nProvider from '@/components/i18n/I18nProvider'

export async function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
	params: { locale }
}: { params: { locale: string } }) {
	const { t } = await initTranslations(locale, ['common'])

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
	params: { locale }
}: Readonly<{
	children: React.ReactNode
	params: { locale: string }
}>) {
	const { resources } = await initTranslations(locale, ['common'])

	return (
		<html lang={locale}>
			<head>
				<title>Enis Zejnilovic Portfolio</title>
			</head>

			<body className='flex flex-col'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<I18nProvider
						locale={locale}
						namespaces={['common']}
						resources={resources}
					>
						<ConfettiExplosion atom />
						<Toaster />
						<Navbar />
						<div className=''>{children}</div>
						<Footer />
					</I18nProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const currentLocale = i18n.language
	const router = useRouter()
	const currentPathname = usePathname()

	const handleLanguageChange = (newLocale: string) => {
		// Set cookie for language preference
		const days = 30
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		const expires = date.toUTCString()
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

		// Update i18n instance language
		i18n.changeLanguage(newLocale)

		// Get the path segments and remove the locale if it exists
		const segments = currentPathname.split('/')
		const pathWithoutLocale =
			segments.length > 2 ? `/${segments.slice(2).join('/')}` : '/'

		// Navigate to the new locale path
		router.push(`/${newLocale}${pathWithoutLocale}`)
	}

	return (
		<div className='flex gap-2 items-center'>
			<button
				onClick={() => handleLanguageChange('en')}
				className={cn(
					'w-6 h-6 relative',
					currentLocale === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
				)}
				aria-label='Switch to English'
			>
				<Image
					src='/images/flags/gb.svg'
					alt='British Flag'
					fill
					className='object-contain'
				/>
			</button>
			<button
				onClick={() => handleLanguageChange('de')}
				className={cn(
					'w-6 h-6 relative',
					currentLocale === 'de' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
				)}
				aria-label='Switch to German'
			>
				<Image
					src='/images/flags/de.svg'
					alt='German Flag'
					fill
					className='object-contain'
				/>
			</button>
		</div>
	)
}

import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import i18nConfig from '../../i18nConfig'

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const currentLocale = i18n.language
	const router = useRouter()
	const currentPathname = usePathname()

	const handleLanguageChange = (newLocale: string) => {
		const days = 30
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		const expires = date.toUTCString()
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		) {
			router.push(`/${newLocale}${currentPathname}`)
		} else {
			router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
		}
	}

	return (
		<div className='flex gap-2 items-center'>
			<button
				onClick={() => handleLanguageChange('en')}
				className={`w-6 h-6 relative ${currentLocale === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
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
				className={`w-6 h-6 relative ${currentLocale === 'de' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
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

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import i18nConfig from '@/i18nConfig'

export default function Home() {
	const headersList = headers()
	const acceptLanguage = headersList.get('accept-language') || ''

	// Check if German is preferred
	const isGermanPreferred = acceptLanguage.includes('de')

	// Redirect to German if preferred, otherwise English
	const locale = isGermanPreferred ? 'de' : i18nConfig.defaultLocale
	redirect(
		`/${locale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault ? '' : locale}`
	)
}

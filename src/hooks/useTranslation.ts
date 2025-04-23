import { usePathname } from 'next/navigation'
import { useTranslation as useI18nTranslation } from 'react-i18next'

export const useTranslation = () => {
	const pathname = usePathname()

	const locale = pathname.split('/')[1]

	const { t } = useI18nTranslation('common', { lng: locale })

	return t
}

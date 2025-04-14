'use client'

import { I18nextProvider } from 'react-i18next'
import initTranslations from '@/i18n'
import { createInstance } from 'i18next'
import { useEffect, useState } from 'react'

export default function I18nProvider({
	children,
	locale,
	namespaces,
	resources
}: {
	children: React.ReactNode
	locale: string
	namespaces: string[]
	resources: any
}) {
	const [instance, setInstance] = useState(createInstance())

	useEffect(() => {
		const init = async () => {
			if (!instance) return

			await initTranslations(locale, namespaces, instance, resources)
		}

		init()
	}, [locale, namespaces, instance, resources])

	return <I18nextProvider i18n={instance}>{children}</I18nextProvider>
}

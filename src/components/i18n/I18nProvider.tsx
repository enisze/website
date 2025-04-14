'use client'
import initTranslations from '@/i18n'
import { createInstance, type Resource } from 'i18next'

import type { PropsWithChildren } from 'react'

import { I18nextProvider } from 'react-i18next'

export const TranslationProvider = ({
	children,
	locale,
	resources
}: PropsWithChildren<{
	locale: string
	resources: Resource
}>) => {
	const i18n = createInstance()

	initTranslations({ locale, i18nInstance: i18n, resources })

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

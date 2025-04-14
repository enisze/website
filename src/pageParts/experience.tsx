'use client'

import { useTranslation } from 'react-i18next'
import { Heading } from '../components/Layout/Heading'
import { Timeline } from '../components/Layout/Timeline'

export const Experience = () => {
	const { t } = useTranslation('common')

	return (
		<section className='space-y-4 scroll-m-20' id='experience'>
			<Heading>{t('navigation.experience')}</Heading>
			<Timeline
				entries={[
					{
						title: t('experience.sodefa.title'),
						description: t('experience.sodefa.description'),
						time: t('experience.sodefa.time')
					},
					{
						title: t('experience.empower.title'),
						description: t('experience.empower.description'),
						time: t('experience.empower.time')
					},
					{
						title: t('experience.western_digital.title'),
						description: t('experience.western_digital.description'),
						time: t('experience.western_digital.time')
					},
					{
						title: t('experience.fraunhofer.title'),
						description: t('experience.fraunhofer.description'),
						time: t('experience.fraunhofer.time')
					}
				]}
			/>
		</section>
	)
}

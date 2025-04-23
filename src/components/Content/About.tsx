import { FadeIn } from '../FadeIn'
import { Heading } from '../Layout/Heading'
import { getT } from '../i18n/getT'

export const About = async ({
	locale
}: {
	locale: string
}) => {
	const t = await getT({ locale })

	return (
		<section
			className='flex flex-col gap-y-5 pt-20 md:pt-12 relative h-full lg:mx-auto mx-8 max-w-5xl'
			id='about'
		>
			<FadeIn>
				<Heading>{t('about.title')}</Heading>
				<p className='text-lg'>
					{t('about.based')}
					<span className='font-bold'>{t('about.fullstack')}</span>
					{t('about.focus')}
					<span className='font-bold'>{t('about.webAndMobile')}</span>.{' '}
					{t('about.enjoyCreating')}
				</p>
			</FadeIn>

			<FadeIn>
				<p className='text-lg'>
					{t('about.specialize')}{' '}
					<span className='font-bold'>{t('about.technologies')}</span>
					{t('about.crafting')}{' '}
					<span className='font-bold'>{t('about.mobileExpertise')}</span>,{' '}
					{t('about.leveraging')}
				</p>
			</FadeIn>

			<FadeIn>
				<p className='text-lg'>
					{t('about.foundation')}{' '}
					<span className='font-bold'>{t('about.aiInterest')}</span>{' '}
					{t('about.eager')}
				</p>
			</FadeIn>

			<FadeIn>
				<p className='text-lg'>
					{t('about.freeTime')}{' '}
					<span className='font-bold'>{t('about.exploring')}</span>,{' '}
					{t('about.develop')}{' '}
					<span className='font-bold'>{t('about.expanding')}</span>{' '}
					{t('about.field')}
				</p>
			</FadeIn>
		</section>
	)
}

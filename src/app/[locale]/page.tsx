import { ClientEducation } from '@/components/ClientEducation'
import { About } from '@/components/Content/About'
import { FadeIn } from '@/components/FadeIn'
import { getT } from '@/components/i18n/getT'
import { Heading } from '@/components/Layout/Heading'
import initTranslations from '@/i18n'
import { ContactSection } from '@/pageParts/Contact/ContactSection'
import { QuickContact } from '@/pageParts/Contact/QuickContact'
import { Intro } from '@/pageParts/Intro/intro'
import { Projects } from '@/pageParts/projects'
import { Skills } from '@/pageParts/skills'

export default async function Home({
	params
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const t = await getT({ locale })

	await initTranslations({ locale })

	return (
		<div className='flex flex-col gap-y-8'>
			<div>
				<Intro locale={locale} />
				<QuickContact locale={locale} />
			</div>

			<About locale={locale} />
			<Skills locale={locale} />

			<Projects locale={locale} />
			<FadeIn>
				<div className='max-w-5xl lg:mx-auto mx-8 scroll-mt-10' id='education'>
					<Heading>{t('education.title')}</Heading>
					<ClientEducation />
				</div>
			</FadeIn>
			<ContactSection locale={locale} />
		</div>
	)
}

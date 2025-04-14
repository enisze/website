import { About } from '@/components/Content/About'
import { FadeIn } from '@/components/FadeIn'
import { Heading } from '@/components/Layout/Heading'
import { ContactSection } from '@/pageParts/Contact/ContactSection'
import { QuickContact } from '@/pageParts/Contact/QuickContact'
import { Intro } from '@/pageParts/Intro/intro'
import { Projects } from '@/pageParts/projects'
import { Skills } from '@/pageParts/skills'
import initTranslations from '@/i18n'
import { ClientEducation } from '@/components/ClientEducation'

export default async function Home({
	params
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params

	await initTranslations({ locale })

	return (
		<div className='flex flex-col gap-y-8'>
			<div>
				<Intro locale={locale} />
				<QuickContact locale={locale} />
			</div>

			<About locale={locale} />
			<Skills />

			<Projects />
			<FadeIn>
				<div className='max-w-5xl lg:mx-auto mx-8 scroll-mt-10' id='education'>
					<Heading>Education</Heading>
					<ClientEducation />
				</div>
			</FadeIn>
			<ContactSection locale={locale} />
		</div>
	)
}

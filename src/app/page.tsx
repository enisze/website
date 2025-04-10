import { About } from '@/components/Content/About'
import { FadeIn } from '@/components/FadeIn'
import { Heading } from '@/components/Layout/Heading'
import { ContactSection } from '@/pageParts/Contact/ContactSection'
import { QuickContact } from '@/pageParts/Contact/QuickContact'
import { Intro } from '@/pageParts/Intro/intro'
import { Projects } from '@/pageParts/projects'
import { Skills } from '@/pageParts/skills'
import dynamic from 'next/dynamic'

const Education2 = dynamic(
	async () => import('./../pageParts/Intro/Education2'),
	{
		ssr: false
	}
)

export default function Home() {
	return (
		<div className='flex flex-col gap-y-8'>
			<div>
				<Intro />
				<QuickContact />
			</div>

			<div className='relative z-10 flex flex-col scroll-m-20' id='about'>
				<About />
			</div>
			<Skills />

			<Projects />
			<FadeIn>
				<div className='max-w-5xl lg:mx-auto mx-8 '>
					<Heading>Education</Heading>
					<Education2 />
				</div>
			</FadeIn>
			<ContactSection />
		</div>
	)
}

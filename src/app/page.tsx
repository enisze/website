import Iridescence from '@/components/Iridescence'
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
		<div className='flex flex-col gap-y-8 bg-white dark:bg-black'>
			<Intro />
			<QuickContact />
			<Skills />
			<Projects />
			<div>
				<Heading>Education</Heading>

				<div className='relative h-[500px] w-full'>
					<div className='absolute inset-0 rounded-md overflow-hidden'>
						<Iridescence
							color={[0.3, 0.5, 0.8]}
							mouseReact={false}
							amplitude={0.1}
							speed={1.0}
						/>
					</div>
					<div className='absolute inset-0 z-10 p-20 rounded-md overflow-hidden'>
						<Education2 />
					</div>
				</div>
			</div>
			<ContactSection />
		</div>
	)
}

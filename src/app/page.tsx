//TODO: some padding between the page parts add twitter handle

import { Heading } from '@/components/Layout/Heading'
import { Contact } from '@/pageParts/contact'
import { Experience } from '@/pageParts/experience'
import Education2 from '@/pageParts/Intro/Education2'
import { Intro } from '@/pageParts/Intro/intro'
import { Projects } from '@/pageParts/projects'
import { Skills } from '@/pageParts/skills'

export default function Home() {
	return (
		<div className='flex flex-col gap-y-3 scroll-mt-32 bg-white dark:bg-gray-900'>
			<Intro />
			<Skills />
			<Projects />
			<Experience />
			<div>
				<Heading>Education</Heading>
				<div className='h-[500px] w-full pt-4'>
					<Education2 />
				</div>
			</div>
			<Contact />
		</div>
	)
}

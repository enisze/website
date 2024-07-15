//TODO: some padding between the page parts add twitter handle

import { CVButton } from '@/components/CVButton'
import { Contact } from '@/pageParts/contact'
import { Education } from '@/pageParts/education'
import { Experience } from '@/pageParts/experience'
import { Intro } from '@/pageParts/intro'
import { Projects } from '@/pageParts/projects'
import { Skills } from '@/pageParts/skills'

export default function Home() {
	return (
		<div className='flex flex-col gap-y-3 scroll-mt-32 bg-white dark:bg-black'>
			<Intro />
			<CVButton />
			<Skills />
			<Projects />
			<Experience />
			<Education />
			<Contact />
		</div>
	)
}

//TODO: some padding between the page parts add twitter handle

import { Heading } from '@/components/Layout/Heading'
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
		<div className='flex flex-col gap-y-3 scroll-mt-32 bg-white dark:bg-black'>
			<Intro />
			<Skills />
			<Projects />
			<div>
				<Heading>Education</Heading>
				<div className='h-[500px] w-full pt-4'>
					<Education2 />
				</div>
			</div>
		</div>
	)
}

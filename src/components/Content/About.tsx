import { Code } from 'lucide-react'
import { ContactDock } from '../Layout/ContactDock'
import { Badge } from '../ui/badge'
import { CVButton } from './CVButton'
import { TextGenerateEffect } from './text-generate-effect'
import Aurora from '../Aurora'

export const About = () => (
	<section className='w-full pt-20 md:pt-12 relative h-full'>
		<Badge
			variant='outline'
			className='rounded-md flex items-center gap-2 w-fit px-2.5 py-0.5 text-xs font-medium border-zinc-400 dark:border-zinc-800 bg-zinc-300 dark:bg-zinc-900'
		>
			<Code className='inline-block text-gray-500 dark:text-gray-400 animate-pulse' />
			<p className='text-gray-500 dark;text-gray-400'>
				Fullstack Software Developer
			</p>
		</Badge>
		<TextGenerateEffect
			words={`I studied computer science at RWTH Aachen, with a focus on machine
			learning, AI, and data science using Python. My theses work involved
			generative development and RDF schema generation. Currently, I specialize
			in web and mobile app development with expertise in React, TypeScript, and
			Next.js, and I'm passionate about learning new technologies. I bring
			strong leadership skills with a focus on effective communication and
			adaptability in team environments, which I believe are key to successful
			project management.
		`}
			className='dark:text-gray-200 leading-relaxed mb-8'
		/>

		{/* <div className='flex justify-center'>
			<CVButton />
		</div> */}
		<div className='absolute bottom-0 left-0'>
			<ContactDock />
		</div>
	</section>
)

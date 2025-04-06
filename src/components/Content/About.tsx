import { Link } from '../Layout/Link'
import { CVButton } from './CVButton'

export const About = () => (
	<section className='w-full'>
		<p className='text-xl dark:text-gray-200 leading-relaxed mb-8'>
			I studied computer science at RWTH Aachen, with a focus on machine
			learning, AI, and data science using Python. My theses work involved
			generative development and RDF schema generation. Currently, I specialize
			in web and mobile app development with expertise in React, TypeScript, and
			Next.js, and I'm passionate about learning new technologies. I bring
			strong leadership skills with a focus on effective communication and
			adaptability in team environments, which I believe are key to successful
			project management.
		</p>

		<div className='flex justify-center'>
			<CVButton />
		</div>

		<div className='mt-8 pt-6 border-t border-gray-700 text-center'>
			<p className='dark:text-gray-300'>
				Feel free to <Link href='#contact'>contact me</Link> to discuss
				potential projects or opportunities. I'm always open to exciting new
				ventures.
			</p>
		</div>
	</section>
)

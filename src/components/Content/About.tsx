import { Link } from '../Layout/Link'
import { CVButton } from './CVButton'

export const About = () => (
	<section className='w-full  shadow-lg'>
		<p className='text-xl text-gray-300 mb-6'>
			Broad skill set developed through education and professional experience
		</p>

		<div className='space-y-6'>
			<div>
				<h3 className='text-xl font-semibold mb-2 text-blue-400'>Education</h3>
				<p className='text-gray-200 leading-relaxed'>
					Studied computer science at RWTH Aachen, focusing on machine learning,
					AI, and data science with Python. Theses involved generative
					development and RDF schema generation.
				</p>
			</div>

			<div>
				<h3 className='text-xl font-semibold mb-2 text-blue-400'>
					Current Work
				</h3>
				<p className='text-gray-200 leading-relaxed'>
					Specializing in web and mobile app development, with expertise in
					React, TypeScript, and Next.js. Passionate about learning new
					technologies and tackling challenging projects.
				</p>
			</div>

			<div>
				<h3 className='text-xl font-semibold mb-2 text-blue-400'>Leadership</h3>
				<p className='text-gray-200 leading-relaxed'>
					Strong leadership skills with a focus on effective communication and
					adaptability in team environments. Believes these are key to
					successful project management.
				</p>
			</div>
		</div>

		<div className='flex justify-center'>
			<CVButton />
		</div>

		<div className='mt-8 pt-6 border-t border-gray-700 text-center'>
			<p className='text-gray-300'>
				Feel free to <Link href='#contact'>contact me</Link> to discuss
				potential projects or opportunities. I'm always open to exciting new
				ventures.
			</p>
		</div>
	</section>
)

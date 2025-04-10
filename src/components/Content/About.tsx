import { FadeIn } from '../FadeIn'

export const About = () => (
	<section className='w-full flex flex-col gap-y-5 pt-20 md:pt-12 relative h-full mx-auto max-w-5xl'>
		<FadeIn>
			<h2 className='text-4xl font-bold mt-4 mb-2'>About Me</h2>
			<p className='text-gray-500 dark:text-gray-400 text-lg'>
				Based in Germany, I am a passionate software developer with a focus on
				web and mobile app development. I enjoy creating innovative solutions
				that enhance user experiences.
			</p>
		</FadeIn>

		<FadeIn>
			<p className='text-gray-500 dark:text-gray-400 text-lg'>
				I have a strong foundation in computer science and a keen interest in
				machine learning, AI, and data science. I am always eager to learn new
				technologies and improve my skills.
			</p>
		</FadeIn>

		<FadeIn>
			<p className='text-gray-500 dark:text-gray-400 text-lg'>
				In my free time, I enjoy exploring new technologies, contributing to
				open-source projects, and expanding my knowledge in the field of
				software development.
			</p>
		</FadeIn>

		<FadeIn>
			<p className='text-gray-500 dark:text-gray-400 text-lg'>
				I am excited to connect with like-minded individuals and collaborate on
				innovative projects that make a difference.
			</p>
		</FadeIn>
	</section>
)

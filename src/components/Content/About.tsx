import { FadeIn } from '../FadeIn'
import { Heading } from '../Layout/Heading'

export const About = () => (
	<section
		className='flex flex-col gap-y-5 pt-20 md:pt-12 relative h-full lg:mx-auto mx-8 max-w-5xl'
		id='about'
	>
		<FadeIn>
			<Heading>About </Heading>
			<p className='text-lg'>
				Based in Germany, I am a passionate
				<span className='font-bold'>fullstack software developer</span>
				with a focus on{' '}
				<span className='font-bold'>web and mobile app development</span>. I
				enjoy creating innovative solutions that enhance user experiences.
			</p>
		</FadeIn>

		<FadeIn>
			<p className='text-lg'>
				I specialize in modern web development with the{' '}
				<span className='font-bold'>
					Next.Js framework, React and TypeScript
				</span>
				, crafting reliable and high-performing applications. My expertise
				extends to developing cross-platform mobile solutions using{' '}
				<span className='font-bold'>React Native and Expo</span>, while
				leveraging AWS for cloud infrastructure. With a strong technical
				foundation and an eye for design, I build interfaces that are both
				efficient and visually engaging, always focusing on clean architecture
				and maintainable solutions. From web to mobile and everything in between
				–{' '}
				<span className='font-bold'>
					I turn complex ideas into simple, elegant solutions.
				</span>
			</p>
		</FadeIn>

		<FadeIn>
			<p className='text-lg'>
				I have a strong foundation in computer science and a keen interest in{' '}
				<span className='font-bold'>
					machine learning and artificial intelligence.
				</span>{' '}
				I am always eager to learn new technologies and improve my skills.
			</p>
		</FadeIn>

		<FadeIn>
			<p className='text-lg'>
				In my free time, I enjoy{' '}
				<span className='font-bold'> exploring new technologies</span>, develop
				private projects, and{' '}
				<span className='font-bold'>expanding my knowledge</span> in the field
				of software development.
			</p>
		</FadeIn>
	</section>
)

import { FadeIn } from '@/components/FadeIn'
import { Skill } from '../components/Content/Skill'
import { Heading } from '../components/Layout/Heading'
import { stacks } from '../components/stack'

export const Skills = () => {
	return (
		<section
			className='scroll-m-20 max-w-5xl lg:mx-auto mx-8 relative space-y-4 pt-5'
			id='skills'
		>
			<Heading>Technical Skills</Heading>
			<div className='flex flex-col md:flex-row gap-4'>
				{stacks.map((stack, index) => (
					<FadeIn key={index}>
						<div className='flex flex-col w-full gap-4'>
							<h2 className='text-2xl'>{stack.title}</h2>
							<div className='flex flex-row flex-wrap gap-4'>
								{stack.items.map((item, index) => (
									<FadeIn key={index}>
										<Skill item={item} />
									</FadeIn>
								))}
							</div>
						</div>
					</FadeIn>
				))}
			</div>
		</section>
	)
}

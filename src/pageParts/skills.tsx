import { FadeIn } from '@/components/FadeIn'
import { Skill } from '../components/Content/Skill'
import { Heading } from '../components/Layout/Heading'
import { stacks } from '../components/stack'
import { getT } from '@/components/i18n/getT'

export const Skills = async ({
	locale
}: {
	locale: string
}) => {
	const t = await getT({ locale })

	return (
		<section
			className='scroll-mt-10 max-w-5xl lg:mx-auto mx-8 relative space-y-4 pt-5'
			id='skills'
		>
			<Heading>{t('skills.title')}</Heading>
			<div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4'>
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

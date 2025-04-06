import { Skill } from '../components/Content/Skill'
import { Heading } from '../components/Layout/Heading'
import { stacks } from '../components/stack'

export const Skills = () => {
	return (
		<section className='scroll-m-20 relative space-y-4 pt-5 px-8' id='skills'>
			<Heading>Technical Skills</Heading>

			{/* {showGlobe ? (
				<IconCloud
					iconSlugs={[
						'typescript',
						'javascript',
						'react',
						'android',
						'html5',
						'css3',
						'nodedotjs',
						'express',
						'nextdotjs',
						'prisma',
						'amazonaws',
						'postgresql',
						'vercel',
						'testinglibrary',
						'jest',
						'cypress',
						'docker',
						'git',
						'jira',
						'github',
						'gitlab',
						'visualstudiocode',
						'androidstudio',
						'figma',
						'graphql',
						'yarn',
						'trpc',
						'bun',
						'pnpm',
						'mailtrap',
						'expo',
						'redis',
						'eslint',
						'prettier',
						'playwright',
						'linear',
						'vim',
						'notion',
						'discord',
						'microsoftteams',
						'githubactions'
					]}
				/>
			) : ( */}
			<div className='flex flex-col md:flex-row gap-4'>
				{stacks.map((stack, index) => {
					return (
						<div className='flex flex-col w-full gap-4' key={index}>
							<h2 className='text-2xl'>{stack.title}</h2>
							<div className='flex flex-row flex-wrap gap-4'>
								{stack.items.map((item, index) => {
									return <Skill item={item} key={index} />
								})}
							</div>
						</div>
					)
				})}
			</div>
			{/* )} */}
		</section>
	)
}

import { ProjectDetails } from '@/components/Project/ProjectDetails'
import { getItemsByLabels, type StackLabel } from '@/components/stack'

const labels: StackLabel[] = [
	'React',
	'Typescript',
	'Astro',
	'Tailwind',
	'Vercel'
]

const skills = getItemsByLabels(labels)
export const Portfolio = () => (
	<ProjectDetails
		title='Portfolio'
		context='Private Project'
		maintenance='Active'
		projectLink='https://website-nine-bice.vercel.app/'
		githubLink='https://github.com/enisze/website'
		description={`The portfolio project was created to try out Astro and improve my presence on the web.
                It bundles information about myself regarding my education, experience and skills and allows 
                anyone interested to contact me.

    `}
		imageSrcFirst='/images/portfolio.webp'
		skills={skills}
	/>
)

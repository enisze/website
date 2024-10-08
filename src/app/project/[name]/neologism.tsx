import { ProjectDetails } from '@/components/Project/ProjectDetails'
import type { StackItem } from '@/components/stack'

//TODO: add java, angular, docker here

const skills: StackItem[] = [
	{
		label: 'Angular',
		imgUrl: '/images/stack/angular.svg',
		href: 'https://angular.io/',
		isSmall: false
	},
	{
		label: 'Docker',
		imgUrl: '/images/stack/docker.svg',
		href: 'https://www.docker.com/',
		isSmall: false
	},
	{
		label: 'Java',
		imgUrl: '/images/stack/java.svg',
		href: 'https://angular.io/',
		isSmall: false
	}
]

export const Neologism = () => (
	<ProjectDetails
		title='Neologism'
		githubLink='https://github.com/Semantic-Society/Neologism'
		context='Open Source Project'
		maintenance='2021'
		skills={skills}
		imageSrcFirst='/images/neologism.webp'
		description={`
        Neologism 2.0 allows users to quickly create vocabularies in a guided
        and collaborative process using its graph editor. Domain experts and
        non-experts can create classes, properties, and relationships between
        them visually. It automatically generates URIs for simplicity. Users can
        export their draft vocabularies as RDF to import into tools like Protege
        for further refinement by experts. This streamlines the vocabulary
        creation process and reduces the time and effort needed compared to
        traditional methods. The guided interface and collaborative aspects make
        it accessible even to non-experts. The RDF export also allows connecting
        the draft vocabularies to other semantic web applications. In summary,
        it provides a simple, visual way for users ranging from experts to
        novices to efficiently create initial vocabulary drafts that can then be
        further developed in other semantic web tools.`}
	/>
)

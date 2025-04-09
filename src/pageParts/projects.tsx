//TODO: Add github links + add icons for which frameworks were used. Add filler image, if image no available. Mark projects as personal, open source, commercial
'use client'

import { Heading } from '@/components/Layout/Heading'
import { ProjectShowcase } from './ProjectShowcase'
import { FadeIn } from '@/components/FadeIn'

const projects = [
	{
		images: [
			{ src: '/images/portfolio.webp', alt: 'Portfolio' },
			{
				src: '/images/portfolio2.webp',
				alt: 'Portfolio 2'
			}
		],
		title: 'Portfolio',
		projectLink: 'https://zejnilovic.de/',
		githubLink: 'https://github.com/enisze/website',
		localLink: '/project/portfolio',
		description: `A modern, responsive portfolio website built with Next.js and TypeScript. 
                This project showcases my professional journey, technical skills, and project work 
                through an elegant and user-friendly interface. Features include dark/light mode, 
                responsive design, and optimized performance. The site serves as both a technical 
                demonstration and a comprehensive overview of my capabilities as a software engineer.`,
		year: 'Today',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
	},
	{
		images: [
			{
				src: '/images/eventWizard.webp',
				alt: 'Event Wizard'
			},
			{
				src: '/images/eventWizard2.webp',
				alt: 'Event Wizard Kalender'
			}
		],
		title: 'Event Wizard',
		projectLink: 'https://football-organizer.vercel.app/',
		githubLink: 'https://github.com/enisze/football-organizer',
		localLink: '/project/eventWizard',
		description: `A web application designed for organizing football events among friends. 
                Features include a calendar view for event scheduling, participant management, 
                automated email reminders, and an integrated payment tracking system with PayPal 
                integration. The platform streamlines event organization through its user-friendly 
                interface and automated notification system.`,
		year: 'Today',
		technologies: [
			'Next.js',
			'TypeScript',
			'tRPC',
			'Prisma',
			'Tailwind CSS',
			'NextAuth',
			'Redis',
			'Neon',
			'Vercel'
		]
	},
	{
		images: [
			{
				src: '/images/proprate.webp',
				alt: 'PropRate'
			},
			{
				src: '/images/proprate-search.webp',
				alt: 'PropRate Analysis'
			}
		],
		title: 'Proprate',
		projectLink: 'https://proprate.de/',
		localLink: '/project/proprate',
		description: `PropRate serves as a comprehensive meta search engine for the German real estate market,
                aggregating listings from major portals like ImmobilienScout24 and eBay Kleinanzeigen.
                The platform's AI system evaluates properties and assigns PropRatings based on location,
                value potential, and price appropriateness. Users can access property valuation tools,
                financial calculators, and market analytics to make informed real estate decisions.
                The platform also provides educational resources through its blog and real estate guides,
                making it a one-stop solution for property research and analysis.`,
		year: 'Today',
		technologies: [
			'Next.js',
			'TypeScript',
			'Python',
			'FastAPI',
			'PostgreSQL',
			'AWS',
			'Redis',
			'ElasticSearch',
			'Vercel',
			'PostgreSQL',
			'PlanetScale',
			'Prisma',
			'Docker',
			'sst'
		]
	},
	{
		images: [
			{
				src: '/images/teampilot.webp',
				alt: 'Teampilot'
			},
			{
				src: '/images/teampilot-chat.webp',
				alt: 'Teampilot Chat'
			}
		],
		title: 'Teampilot',
		localLink: '/project/teampilot',
		projectLink: 'https://teampilot.ai/',
		description: `Teampilot AI is an advanced AI platform leveraging multiple LLM providers
                 to enhance team productivity through intelligent automation. The platform
                 offers sophisticated content generation, workflow automation, and data
                 analysis capabilities, built with modern technologies like tRPC, Prisma,
                 and various AI integrations.`,
		year: 'Today',
		technologies: [
			'Next.js',
			'TypeScript',
			'OpenAI',
			'Docker',
			'AWS',
			'tRPC',
			'Prisma',
			'Drizzle',
			'OpenRouter',
			'LLMs',
			'AI'
		],
		context: 'Employed Project',
		maintenance: 'Active'
	},
	{
		images: [
			{
				src: '/images/horserace2.webp',
				alt: 'HorseRace'
			},
			{
				src: '/images/horserace.webp',
				alt: 'HorseRace Spiel'
			}
		],
		title: 'HorseRace',
		localLink: '/project/horserace',
		githubLink: 'https://github.com/enisze/horseRace',
		projectLink:
			'https://play.google.com/store/apps/details?id=com.eniszejnilovic.horseRace',
		description: `The HorseRace app is an independently developed game created during my free time
                 as a fun way to explore React Native and Expo. The game's core concept is simple yet engaging:
                 players select their preferred card symbol and start with a set number of sips. If their chosen
                 card wins the race, they can distribute double the sips among their friends as a reward.
                 I'm actively enhancing the user experience through regular updates, implementing new features
                 such as random in-game events and player influence on game outcomes to create an even more
                 exciting gaming experience.`,
		year: 'Today',
		technologies: [
			'React Native',
			'React',
			'Expo',
			'TypeScript',
			'Google Play Store'
		],
		context: 'Private Project',
		maintenance: 'Active'
	},
	{
		images: [
			{
				src: '/images/neologism.webp',
				alt: 'Neologism 2.0'
			},
			{
				src: '/images/neologism.webp',
				alt: 'Neologism 2.0'
			}
		],
		title: 'Neologism 2.0',
		githubLink: 'https://github.com/Semantic-Society/Neologism',
		localLink: '/project/neologism',
		description: `Neologism 2.0 allows users to quickly create vocabularies in a guided
                and collaborative process using its graph editor. Domain experts and
                non-experts can create classes, properties, and relationships between
                them visually. It automatically generates URIs for simplicity. Users can
                export their draft vocabularies as RDF to import into tools like Protege
                for further refinement by experts. This streamlines the vocabulary
                creation process and reduces the time and effort needed compared to
                traditional methods. The guided interface and collaborative aspects make
                it accessible even to non-experts. The RDF export also allows connecting
                the draft vocabularies to other semantic web applications.`,
		year: '2021',
		technologies: ['Angular', 'TypeScript', 'RDF', 'Docker', 'Node.js', 'Java'],
		context: 'Open Source Project',
		maintenance: '2021'
	}
]

export const Projects = () => (
	<div className='px-8'>
		<Heading>Projects</Heading>
		<section
			className='scroll-m-20 flex flex-col gap-2 items-center'
			id='projects'
		>
			{projects.map((project) => (
				<FadeIn key={project.title}>
					<div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
						<ProjectShowcase
							title={project.title}
							description={project.description}
							images={project.images}
							links={{
								live: project.projectLink,
								github: project.githubLink
							}}
							year={project.year}
							technologies={project.technologies}
						/>
					</div>
				</FadeIn>
			))}
		</section>
	</div>
)

//TODO: Add github links + add icons for which frameworks were used. Add filler image, if image no available. Mark projects as personal, open source, commercial
'use client'

import { Heading } from '@/components/Layout/Heading'
import { ProjectShowcase } from './ProjectShowcase'

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
		description: `The portfolio project was created to try out Astro and improve my presence on the web.
                It bundles information about myself regarding my education, experience and skills and allows 
                anyone interested to contact me.`,
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
		description: `This web app is designed to help users organize and schedule
                 events with their friends. It offers a user-friendly calendar view
                 displaying essential event details, and users can sign up for events they're
                 interested in. Event organizers can create new events, and the platform provides
                 email reminders for upcoming events and notifications for pending payments,
                 enhancing the overall experience.`,
		year: 'Today',
		technologies: [
			'Next.js',
			'TypeScript',
			'tRPC',
			'Prisma',
			'Tailwind CSS',
			'NextAuth',
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
		description: `PropRate is a meta search engine for the German real estate market,
                 aggregating listings from major portals and providing users with a consolidated
                 view of available properties. It utilizes artificial intelligence
                 to assign PropRatings to properties based on factors like location,
                 value development, and listing price.`,
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
		description: `Teampilot AI is an AI platform that enhances team productivity
                 and revenue generation through AI-powered automation and insights.`,
		year: 'Today',
		technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Docker', 'AWS']
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
		description: `The HorseRace app is an independently developed game created as
                 part of the portfolio, built using React Native and Expo.`,
		year: 'Today',
		technologies: ['React Native', 'Expo', 'TypeScript', 'Google Play Store']
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
		description: `Neologism 2.0 is a collaborative vocabulary creation tool
                 featuring a graph editor for semantic web vocabularies.`,
		year: '2021',
		technologies: ['Angular', 'TypeScript', 'RDF', 'Docker', 'Node.js', 'Java']
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
				<div
					key={project.title}
					className='flex flex-col md:flex-row gap-6 items-center justify-center'
				>
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
			))}
		</section>
	</div>
)

import { FadeIn } from '@/components/FadeIn'
import { Heading } from '@/components/Layout/Heading'
import { ProjectShowcase } from './ProjectShowcase'
import { getT } from '@/components/i18n/getT'

export const Projects = async ({
	locale
}: {
	locale: string
}) => {
	const t = await getT({ locale })

	return (
		<div className='lg:mx-auto mx-8 max-w-5xl scroll-mt-10' id='projects'>
			<Heading>{t('navigation.projects')}</Heading>
			<section className='scroll-m-20 flex flex-col gap-2 items-center'>
				{projects.map((project) => (
					<FadeIn key={project.id}>
						<div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
							<ProjectShowcase
								title={t(`projects.${project.id}.title`)}
								description={t(`projects.${project.id}.description`)}
								images={project.images}
								links={{
									live: project.projectLink
								}}
								year={t(`projects.${project.id}.year`)}
								technologies={project.technologies}
							/>
						</div>
					</FadeIn>
				))}
			</section>

			<Heading>{t('projects.sideProjectsTitle')}</Heading>
			<section
				className='scroll-m-20 flex flex-col gap-2 items-center'
				id='projects'
			>
				{sideProjects.map((project) => (
					<FadeIn key={project.id}>
						<div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
							<ProjectShowcase
								title={t(`projects.${project.id}.title`)}
								description={t(`projects.${project.id}.description`)}
								images={project.images}
								links={{
									live: project.projectLink,
									github: project.githubLink
								}}
								year={t(`projects.${project.id}.year`)}
								technologies={project.technologies}
							/>
						</div>
					</FadeIn>
				))}
			</section>
		</div>
	)
}

const projects = [
	{
		id: 'esg_platform',
		images: [
			{
				src: '/images/esg-form.png',
				alt: 'ESG Platform Form'
			},
			{
				src: '/images/esg-landing.png',
				alt: 'ESG Platform'
			}
		],
		projectLink: undefined,
		technologies: [
			'React',
			'TypeScript',
			'Next.js',
			'Tailwind CSS',
			'RSC',
			'Node.js',
			'PostgreSQL',
			'Drizzle ORM',
			'next-auth',
			'Gitlab',
			'Docker',
			'Playwright'
		]
	},
	{
		id: 'financial_platform',
		images: [
			{
				src: '/images/credit-engine-dashboard.png',
				alt: 'Credit engine dashboard'
			},
			{
				src: '/images/credit-engine-landing.png',
				alt: 'Credit engine landing'
			}
		],
		projectLink: undefined,
		technologies: [
			'TypeScript',
			'Next.js',
			'shadcn',
			'Node.js',
			'PostgreSQL',
			'Drizzle ORM',
			'Zitadel',
			'Gitlab',
			'Docker',
			'Playwright',
			'Jest'
		]
	},
	{
		id: 'freightly',
		images: [
			{
				src: '/images/Freightly2.png',
				alt: 'Freightly 2'
			},
			{ src: '/images/Freightly1.png', alt: 'Freightly' }
		],
		projectLink: undefined,
		technologies: [
			'Next.js',
			'TypeScript',
			'Drizzle.js',
			'React Hook Form',
			'Neon',
			'zsa',
			'RSC',
			'react',
			'react-email',
			'Tailwind CSS',
			'Vercel'
		]
	},
	{
		id: 'proprate',
		images: [
			{
				src: '/images/PropRate.png',
				alt: 'PropRate Search'
			},
			{
				src: '/images/proprate-landing.png',
				alt: 'PropRate'
			}
		],
		projectLink: 'https://proprate.de/',
		technologies: [
			'Next.js',
			'TypeScript',
			'Python',
			'FastAPI',
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
		id: 'teampilot',
		images: [
			{
				src: '/images/Teampilot-chat.png',
				alt: 'Teampilot Chat'
			},
			{
				src: '/images/teampilot.png',
				alt: 'Teampilot'
			}
		],
		projectLink: 'https://teampilot.ai/',
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
		]
	}
]

const sideProjects = [
	{
		id: 'portfolio',
		images: [
			{ src: '/images/portfolio-tech.png', alt: 'Portfolio Tech' },
			{
				src: '/images/portfolio.png',
				alt: 'Portfolio'
			}
		],
		projectLink: 'https://zejnilovic.de/',
		githubLink: 'https://github.com/enisze/website',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
	},
	{
		id: 'event_wizard',
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
		projectLink: 'https://football-organizer.vercel.app/',
		githubLink: 'https://github.com/enisze/football-organizer',
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
		id: 'horserace',
		images: [
			{
				src: '/images/horserace2.jpg',
				alt: 'HorseRace'
			},
			{
				src: '/images/horserace.webp',
				alt: 'HorseRace Spiel'
			}
		],
		githubLink: 'https://github.com/enisze/horseRace',
		projectLink:
			'https://play.google.com/store/apps/details?id=com.eniszejnilovic.horseRace',
		technologies: [
			'React Native',
			'React',
			'Expo',
			'TypeScript',
			'Google Play Store'
		]
	},
	{
		id: 'neologism',
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
		githubLink: 'https://github.com/Semantic-Society/Neologism',
		technologies: ['Angular', 'TypeScript', 'RDF', 'Docker', 'Node.js', 'Java']
	}
]

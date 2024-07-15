//TODO: Add github links + add icons for which frameworks were used. Add filler image, if image no available. Mark projects as personal, open source, commercial

import Marquee from '@/components/Marquee'
import { ProjectMarquee } from '@/components/ProjectMarquee'
import { Heading } from '../components/Heading'

const projects = [
	{
		src: '/images/portfolio.webp',
		alt: 'Portfolio',
		title: 'Portfolio',
		projectLink: 'https://zejnilovic.de/',
		githubLink: 'https://github.com/enisze/website',
		localLink: '/project/portfolio',
		description: `The portfolio project was created to try out Astro and improve my presence on the web.
                It bundles information about myself regarding my education, experience and skills and allows 
                anyone interested to contact me.
                `,
		year: 'Today'
	},
	{
		src: '/images/eventWizard.webp',
		alt: 'Event Wizard',
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
		year: 'Today'
	},
	{
		src: '/images/proprate.webp',
		alt: 'Proprate',
		title: 'Proprate',
		projectLink: 'https://proprate.de/',
		localLink: '/project/proprate',
		description: `PropRate is a meta search engine for the German real estate market,
                 aggregating listings from major portals and providing users with a consolidated
                 view of available properties. It utilizes artificial intelligence
                 to assign PropRatings to properties based on factors like location,
                 value development, and listing price. The platform also offers tools for
                 property valuation, financial modeling, market data access, and educational
                 resources, aiming to enhance transparency and assist users in making well-informed
                 real estate decisions.`,
		year: 'Today'
	},
	{
		src: '/images/teampilot.webp',
		alt: 'Teampilot',
		title: 'Teampilot',
		localLink: '/project/teampilot',
		projectLink: 'https://teampilot.ai/',
		description: `Teampilot AI is an AI platform that enhances team productivity
                 and revenue generation. It achieves this by rapidly generating high-quality
                 texts and images tailored to a brand, automating business processes
                 without complex IT projects, and accessing internal and competitor data
                 for informed decision-making. Additionally, it offers AI-driven sales,
                 customer support, and document preprocessing, ultimately helping teams
                 streamline content creation, workflow automation, and productivity
                 improvement through data-driven insights.`,
		year: 'Today'
	},
	{
		src: '/images/horserace.webp',
		alt: 'HorseRace',
		title: 'HorseRace',
		localLink: '/project/horserace',
		githubLink: 'https://github.com/enisze/horseRace',
		projectLink:
			'https://play.google.com/store/apps/details?id=com.eniszejnilovic.horseRace',
		description: `The HorseRace app is an independently developed game created as
                 part of the portfolio, built using React Native and Expo. Users select a card
                 symbol and compete in a straightforward game where winning cards double their
                 initial sips, with ongoing plans to enhance the user experience through updates,
                 new features, and added player influence on game outcomes.`,
		year: 'Today'
	},
	{
		src: '/images/neologism.webp',
		alt: 'Neologism 2.0',
		title: 'Neologism 2.0',
		githubLink: 'https://github.com/Semantic-Society/Neologism',
		localLink: '/project/neologism',
		description: `Neologism 2.0 is a collaborative vocabulary creation tool
                 featuring a graph editor that enables both domain experts and
                 non-experts to visually define classes, properties, and relationships while
                 automatically generating URIs for simplicity. Users can export their draft
                 vocabularies as RDF, streamlining the process and reducing the time and effort
                 compared to traditional methods. This user-friendly tool supports a range of
                 users, from experts to novices, in efficiently creating initial vocabulary
                 drafts that can be further refined in other semantic web applications.`,
		year: '2021'
	}
]

const firstRow = projects.slice(0, projects.length / 2)
const secondRow = projects.slice(projects.length / 2)

export const Projects = () => (
	<section className='space-y-4 scroll-m-20' id='projects'>
		<Heading>Projects</Heading>
		<div className='relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-5 md:shadow-xl'>
			<Marquee pauseOnHover className='[--duration:20s]'>
				{firstRow.map((project) => (
					<ProjectMarquee key={project.title} {...project} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className='[--duration:20s]'>
				{secondRow.map((project) => (
					<ProjectMarquee key={project.title} {...project} />
				))}
			</Marquee>
		</div>
	</section>
)

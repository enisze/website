import Image from 'next/image'
import { BorderBeam } from './BorderBeam'
import { GithubLink } from './GithubLink'
import { ProjectLink } from './ProjectLink'

type Props = {
	src: string
	alt: string
	githubLink?: string
	projectLink?: string
	localLink?: string
	title: string
	description: string
	year: string
}

export const ProjectMarquee = (props: Props) => {
	const {
		src,
		alt,
		description,
		title,
		githubLink,
		projectLink,
		localLink,
		year
	} = props

	return (
		<div className='flex relative flex-col h-[600px] w-[450px] rounded-xl dark:shadow-sm dark:shadow-white shadow-lg shadow-slate-950'>
			<BorderBeam />
			<div className='relative rounded-b-none rounded-xl overflow-hidden'>
				<div className='absolute bottom-1 left-1 flex gap-2 items-center z-10'>
					<GithubLink githubLink={githubLink} />
					<ProjectLink projectLink={projectLink} />
				</div>
				{src ? (
					<a href={localLink}>
						<Image
							src={src}
							alt={alt}
							width={932}
							height={910}
							className={`ease-in-out duration-500 hover:scale-125 object-cover md:w-[80vw] md:h-full`}
							decoding='async'
						/>
					</a>
				) : (
					<slot />
				)}
				<div className='absolute bottom-2 right-2 rounded-xl bg-gray-200 dark:bg-slate-800 p-1'>
					{year}
				</div>
			</div>

			<div className='flex flex-col p-4 pb-16 lg:px-4 lg:py-0 gap-4 w-full h-[300px]'>
				<h1 className='text-xl font-bold pt-4'>
					<a href={localLink}>{title}</a>
				</h1>
				<span className='text-sm'>{description}</span>
			</div>

			<a
				href={localLink}
				className='rounded-xl m-2 z-10 p-2 bg-gray-200 dark:bg-slate-800 shadow-lg w-fit whitespace-nowrap self-end'
			>
				More Details
			</a>
		</div>
	)
}

import Image from 'next/image'
import Link from 'next/link'
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

export const Project = (props: Props) => {
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
		<div className='flex relative flex-col md:flex-row h-full rounded-xl dark:shadow-sm dark:shadow-white shadow-lg shadow-slate-950'>
			<BorderBeam />
			<div className='relative md:rounded-r-none rounded-b-none rounded-xl md:rounded-l-xl overflow-hidden'>
				<div className='absolute bottom-1 left-1 flex gap-2 items-center z-10'>
					<GithubLink githubLink={githubLink} />
					<ProjectLink projectLink={projectLink} />
				</div>
				{src ? (
					<Link href={localLink ?? ''}>
						<Image
							src={src}
							alt={alt}
							width={932}
							height={910}
							className={
								'ease-in-out duration-500 hover:scale-125 object-cover md:w-[80vw] md:h-full'
							}
							decoding='async'
						/>
					</Link>
				) : (
					<slot />
				)}
				<div className='absolute bottom-2 right-2 rounded-xl bg-gray-200 dark:bg-slate-800 p-1'>
					{year}
				</div>
			</div>

			<div className='flex justify-center flex-col p-4 pb-16 lg:px-4 lg:py-0 gap-y-2 w-full'>
				<h1 className='text-xl font-bold'>
					<Link href={localLink ?? ''}>{title}</Link>
				</h1>
				<span>{description}</span>
			</div>

			<Link
				href={localLink ?? ''}
				className='absolute bottom-3 right-3 rounded-xl p-2 bg-gray-200 dark:bg-slate-800 shadow-lg w-fit whitespace-nowrap self-end'
			>
				More Details
			</Link>
		</div>
	)
}

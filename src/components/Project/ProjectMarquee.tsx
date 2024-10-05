import Image from 'next/image'
import Link from 'next/link'
import { BorderBeam } from '../Layout/BorderBeam'
import { GithubLink } from '../Layout/GithubLink'
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
		<div className='flex relative flex-col rounded-xl border'>
			<BorderBeam />
			<div className='-z-10 relative rounded-b-none rounded-xl overflow-hidden'>
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
							height={210}
							className='ease-in-out cursor-pointer duration-500 hover:scale-125 object-cover md:w-[80vw] md:h-full'
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

			<div className='flex flex-col pl-2 py-2 md:p-4 md:pb-16 lg:px-4 lg:py-0 gap-4 w-full'>
				<h1 className='text-xl font-bold md:pt-4'>
					<Link href={localLink ?? ''}>{title}</Link>
				</h1>
				<span className='text-sm hidden md:block'>{description}</span>
			</div>

			<Link
				href={localLink ?? ''}
				className='hidden md:block rounded-xl m-2 z-10 p-2 bg-gray-200 dark:bg-slate-800 shadow-lg w-fit whitespace-nowrap self-end'
			>
				More Details
			</Link>
		</div>
	)
}

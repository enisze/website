'use client'

import SpotlightCard from '@/components/SpotlightCard'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Github } from 'lucide-react'
import Image from 'next/image'

type Project = {
	title: string
	year: string
	technologies: string[]
	description: string
	images: {
		src: string
		alt: string
	}[]
	links: {
		live?: string
		github?: string
	}
}

export function ProjectShowcase(project: Project) {
	return (
		<div className='w-full max-w-7xl mx-auto'>
			<SpotlightCard
				className='p-1 group'
				backgroundClassName='bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800'
				innerClassName='relative bg-white dark:bg-zinc-950 rounded-[calc(1.5rem-4px)] overflow-hidden p-8 md:p-12'
				spotlightColor='rgba(99, 102, 241, 0.15)'
			>
				<div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl' />
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 relative'>
					{/* Left side - Content */}
					<div className='flex flex-col justify-between h-full'>
						<div className='space-y-8'>
							{/* Header with title and year */}
							<div>
								<div className='flex items-center gap-2 mb-2'>
									<span className='text-sm font-mono text-primary'>
										{project.year}
									</span>
									<span className='text-muted-foreground'>•</span>
									<span className='text-sm text-muted-foreground'>
										Featured Project
									</span>
								</div>
								<h2 className='text-4xl font-bold tracking-tight'>
									{project.title}
								</h2>
							</div>

							{/* Description */}
							<div className='prose dark:prose-invert prose-zinc prose-sm max-w-none'>
								<p>{project.description}</p>
							</div>

							{/* Tech stack */}
							<div>
								<h3 className='text-sm font-medium mb-3'>Technologies</h3>
								<div className='flex flex-wrap gap-2'>
									{project.technologies.map((tech) => (
										<Badge
											key={tech}
											variant='outline'
											className='rounded-md px-2.5 py-0.5 text-xs font-medium border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900'
										>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</div>

						{/* Links */}
						<div className='flex gap-6 mt-8'>
							{project.links.live && (
								<a
									href={project.links.live}
									className='group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors p-2 px-4 rounded-full dark:hover:bg-zinc-800 hover:bg-zinc-100'
								>
									<span>View Project</span>
									<ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
								</a>
							)}
							{project.links.github && (
								<a
									href={project.links.github}
									className='group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:bg-zinc-800 hover:bg-zinc-100 p-2 px-4 rounded-full transition-colors'
								>
									<Github className='w-4 h-4' />
									<span>Source Code</span>
								</a>
							)}
						</div>
					</div>

					{/* Right side - Images */}
					<div className='relative h-[400px]'>
						{/* Main image with hover effect */}
						<div className='absolute inset-0 rounded-lg overflow-hidden shadow-xl transition-all duration-500 group-hover:translate-y-2 group-hover:translate-x-2'>
							<Image
								src={project.images[0].src || '/placeholder.svg'}
								alt={project.images[0].alt}
								width={600}
								height={400}
								className='w-full h-full object-cover'
							/>
						</div>

						{/* Second image with hover effect */}
						<div className='absolute bottom-[-24px] left-[-24px] w-[180px] rounded-lg overflow-hidden shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2 border-4 border-white dark:border-zinc-950'>
							<Image
								src={project.images[1].src || '/placeholder.svg'}
								alt={project.images[1].alt}
								width={400}
								height={300}
								className='w-full h-auto object-cover'
							/>
						</div>

						{/* Decorative elements */}
						<div className='absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl' />
						<div className='absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl' />
					</div>
				</div>
			</SpotlightCard>
		</div>
	)
}

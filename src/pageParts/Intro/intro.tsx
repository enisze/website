import { AnimatedGradient } from '@/components/AnimatedGradient'
import { FadeIn } from '@/components/FadeIn'
import { ContactDock } from '@/components/Layout/ContactDock'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { Badge } from '@/components/ui/badge'
import { Code } from 'lucide-react'
import dynamic from 'next/dynamic'
import { SparklesImage } from '../../components/ImageWithConfetti'
import { Timer } from './Timer'

const MapComponent = dynamic(async () => import('./MapComponent'), {
	ssr: false
})

export const Intro = () => (
	<div className='md:h-screen relative'>
		<div className='relative w-screen h-[300px] z-0'>
			<div className='absolute bottom-0 left-4 text-white'>
				<h1 className='text-2xl font-semibold m-0'>Hi,</h1>
				<h2 className='text-4xl font-bold m-0'>I'm Enis.</h2>
			</div>
			<div className='absolute inset-0 flex items-center justify-center -z-10'>
				<MapComponent />
			</div>

			<div className='absolute top-0 right-0 text-gray-500 text-xs z-50 truncate'>
				© OpenMapTiles © OpenStreetMap contributors
			</div>

			<div className='absolute hover:animate-shake z-50 w-[180px] h-[178px] bottom-0 right-4 overflow-hidden transform rotate-6 -mb-16'>
				<SparklesImage />
			</div>
			<div className='absolute top-4 left-4'>
				<Timer />
			</div>
		</div>

		<div className='relative min-h-[550px]'>
			<div className='absolute inset-0 opacity-30 z-0'>
				<AnimatedGradient
					colors={['#3B82F6', '#60A5FA', '#93C5FD']}
					speed={0.08}
					blur='heavy'
					blobSize='small'
					className='dark:invert dark:hue-rotate-180'
				/>
			</div>

			<div className='flex gap-2 flex-col p-8 pt-20 md:pt-8'>
				<FadeIn>
					<Badge
						variant='outline'
						className='rounded-md flex items-center gap-2 w-fit px-2.5 py-0.5 text-xs font-medium border-zinc-400 dark:border-zinc-800 bg-zinc-300 dark:bg-zinc-900'
					>
						<Code className='inline-block text-gray-500 dark:text-gray-400 animate-pulse' />
						<p className='text-gray-500 dark:text-gray-400'>
							Fullstack Software Developer
						</p>
					</Badge>
				</FadeIn>

				<FadeIn>
					<p className='text-xl text-center py-14 max-w-4xl mx-auto'>
						Software developer passionate about clean code, smart solutions and
						digital innovation. Whether web, mobile or cloud: I combine modern
						tech stack knowledge with creativity and an eye for what's
						essential. Besides my work as a developer, I enjoy tinkering with my
						own projects – always with the goal of making things better, faster
						and more intuitive.
					</p>
				</FadeIn>

				<div className='grid grid-cols-2 items-center justify-between w-full'>
					<ContactDock />
					<div className='flex justify-end whitespace-nowrap'>
						<FadeIn>
							<InteractiveHoverButton href='mailto:enis@zejnilovic.de'>
								Contact Me
							</InteractiveHoverButton>
						</FadeIn>
					</div>
				</div>
			</div>
		</div>
	</div>
)

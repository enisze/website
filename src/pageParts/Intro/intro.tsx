import { About } from '@/components/Content/About'
import { Badge } from '@/components/ui/badge'
import { Code } from 'lucide-react'
import dynamic from 'next/dynamic'
import { SparklesImage } from '../../components/ImageWithConfetti'
import { Timer } from './Timer'

const MapComponent = dynamic(async () => import('./MapComponent'), {
	ssr: false
})

export const Intro = () => (
	<div>
		<div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[300px] text-white z-0'>
			<div className='absolute inset-0 bg-gradient-to-t from-gray-600/20 to-transparent ' />
			<div className='absolute bottom-0 left-4'>
				<Badge variant='outline' className='flex items-center gap-2'>
					<Code className='inline-block text-gray-400 animate-pulse' />
					<p className='text-gray-400'>Fullstack Software Developer</p>
				</Badge>
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
				{/* <ImageWithConfetti /> */}
				<SparklesImage />
			</div>
			<div className='absolute top-4 left-4'>
				<Timer />
			</div>
		</div>

		<div className='flex flex-col scroll-m-20' id='about'>
			<About />
		</div>
	</div>
)

import { About } from '@/components/Content/About'
import dynamic from 'next/dynamic'
import { SparklesImage } from '../../components/ImageWithConfetti'
import { Timer } from './Timer'
import FloatingCircles from '@/components/FlotaingCircles'

const MapComponent = dynamic(async () => import('./MapComponent'), {
	ssr: false
})

export const Intro = () => (
	<div className='md:h-[calc(100vh-105px)] relative'>
		<div className='relative w-screen h-[300px] text-white z-0'>
			<div className='absolute bottom-0 left-4'>
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

		<div className='relative'>
			<div className='absolute inset-0 w-full'>
				<FloatingCircles blur={50} size={300} speed={0.6} circleCount={8} />
			</div>

			<div className='flex flex-col scroll-m-20 px-8' id='about'>
				<About />
			</div>
		</div>
	</div>
)

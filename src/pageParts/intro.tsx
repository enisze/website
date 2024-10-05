import { About } from '@/components/Content/About'
import { ImageWithConfetti } from '../components/ImageWithConfetti'
import { MapComponent } from './Map/MapComponent'
import { TypingAnimation } from './TypingAnimation'

export const Intro = () => (
	<>
		<div className='relative w-full h-[300px] rounded-lg text-white z-0'>
			<div className='absolute inset-0 bg-gradient-to-t from-gray-600/20 to-transparent ' />
			<div className='absolute bottom-0 left-4'>
				<h1 className='text-2xl font-semibold m-0'>Hi,</h1>
				<h2 className='text-4xl font-bold m-0'>I'm Enis.</h2>
			</div>
			<div className='absolute inset-0 flex items-center justify-center -z-10'>
				<MapComponent />
			</div>

			<div className='absolute -bottom-6 left-[35%] text-gray-600 z-50'>
				© OpenMapTiles © OpenStreetMap contributors
			</div>

			<div className='absolute z-50 w-[180px] h-[178px] bottom-0 right-0 overflow-hidden transform rotate-6 -mb-16'>
				<ImageWithConfetti />
			</div>
		</div>

		<div className='flex flex-col scroll-m-20' id='about'>
			<h1 className='flex flex-row items-center jusify-center pb-5 pt-16 md:pt-0 text-3xl w-full whitespace-pre-line md:whitespace-normal'>
				<TypingAnimation />
			</h1>

			<About />
		</div>
	</>
)

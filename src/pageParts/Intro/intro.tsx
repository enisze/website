import { AnimatedGradientClient } from '@/components/AnimatedGradienClient'
import { FadeIn } from '@/components/FadeIn'
import { ContactDock } from '@/components/Layout/ContactDock'
import { MapComponentClient } from '@/components/MapComponentClient'
import { getT } from '@/components/i18n/getT'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { Badge } from '@/components/ui/badge'
import { Code, MapPin } from 'lucide-react'
import { SparklesImage } from '../../components/ImageWithConfetti'
import { Timer } from './Timer'

export const Intro = async ({
	locale
}: {
	locale: string
}) => {
	const t = await getT({ locale })

	return (
		<div className='relative'>
			<div className='relative w-screen h-[300px] z-0'>
				<div className='absolute bottom-0 left-4 text-white'>
					<h1 className='text-2xl font-semibold m-0'>{t('intro.hi')}</h1>
					<h2 className='text-4xl font-bold m-0'>{t('intro.name')}</h2>
				</div>
				<div className='absolute inset-0 flex items-center justify-center -z-10'>
					<MapComponentClient />
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
					<AnimatedGradientClient colors={['#3B82F6', '#60A5FA', '#93C5FD']} />
				</div>

				<div className='flex gap-2 flex-col p-8 pt-20 md:pt-8'>
					<FadeIn>
						<Badge
							variant='outline'
							className='rounded-md flex items-center gap-2 w-fit px-2.5 py-0.5 text-xs font-medium border-zinc-400 dark:border-zinc-800 bg-zinc-300 dark:bg-zinc-900'
						>
							<Code className='inline-block text-gray-500 dark:text-gray-400 animate-pulse' />
							<p className='text-gray-500 dark:text-gray-400'>
								{t('intro.role')}
							</p>
						</Badge>
					</FadeIn>

					<FadeIn>
						<p className='text-xl pt-14 max-w-4xl mx-auto'>
							{t('intro.description')}
						</p>
					</FadeIn>

					<FadeIn>
						<div className='flex items-center max-w-4xl mx-auto gap-2 text-gray-500 dark:text-gray-400 mt-4 mb-4'>
							<MapPin className='w-4 h-4' />
							<span>
								{t('intro.location.city')}, {t('intro.location.country')}
							</span>
						</div>
					</FadeIn>

					<div className='flex flex-col md:grid md:items-center md:justify-between w-full'>
						<ContactDock />
						<div className='flex justify-center md:justify-end whitespace-nowrap mt-4 md:mt-0'>
							<FadeIn>
								<InteractiveHoverButton href='mailto:enis@zejnilovic.de'>
									{t('intro.contactMe')}
								</InteractiveHoverButton>
							</FadeIn>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

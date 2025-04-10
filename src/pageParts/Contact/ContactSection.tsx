'use client'

import { socialLinks } from '@/components/Layout/ContactDock'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon, MailIcon } from 'lucide-react'
import Threads from '../Intro/Threads'
import { FadeIn } from '@/components/FadeIn'
import { CVButton } from '@/components/Content/CVButton'

export const ContactSection = () => {
	return (
		<div className='relative w-full h-[600px] overflow-hidden flex items-center justify-center '>
			<Threads
				color={[0.2, 0.6, 1]} // Soft blue tones
				amplitude={3}
				distance={0.6}
			/>
			<div className='absolute z-10 max-w-xl text-center px-4 max-w-5xl mx-auto'>
				<FadeIn>
					<h2 className='text-4xl font-bold drop-shadow-lg mb-4'>
						Let’s build something amazing together
					</h2>
				</FadeIn>
				<FadeIn>
					<p className='text-lg mb-8 drop-shadow-md'>
						Whether you’ve got an idea, a project, or just want to talk tech —
						reach out.
					</p>
				</FadeIn>
				<FadeIn>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href={socialLinks[3].href}
							className={cn(
								buttonVariants({ variant: 'outline' }),
								'px-6 py-3 text-lg border-black bg-white dark:bg-black dark:border-white hover:bg-white hover:text-black transition'
							)}
						>
							<MailIcon className='mr-2 h-5 w-5' />
							Send me an Email
						</a>
						<a
							href={socialLinks[4].href}
							className={cn(
								buttonVariants({ variant: 'outline' }),
								'px-6 py-3 text-lg border-black bg-white dark:bg-black dark:border-white hover:bg-white hover:text-black transition'
							)}
						>
							<CalendarIcon className='mr-2 h-5 w-5' />
							Schedule a Meeting
						</a>
					</div>
				</FadeIn>

				<CVButton />
			</div>
		</div>
	)
}

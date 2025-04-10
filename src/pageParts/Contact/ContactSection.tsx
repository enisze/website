'use client'

import { CVButton } from '@/components/Content/CVButton'
import { FadeIn } from '@/components/FadeIn'
import { socialLinks } from '@/components/Layout/ContactDock'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon, MailIcon } from 'lucide-react'
import Threads from '../Intro/Threads'

export const ContactSection = () => {
	return (
		<div
			className='relative w-full h-[800px] md:h-[600px] scroll-mt-10 overflow-hidden flex items-center justify-center '
			id='contact'
		>
			<Threads
				color={[0.2, 0.6, 1]} // Soft blue tones
				amplitude={3}
				distance={0.6}
			/>
			<div className='absolute z-10 text-center max-w-5xl lg:mx-auto mx-8'>
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
							className={cn(buttonVariants({ variant: 'default' }))}
						>
							<MailIcon className='mr-2 h-5 w-5' />
							Send me an Email
						</a>
						<a
							href={socialLinks[4].href}
							className={cn(buttonVariants({ variant: 'secondary' }))}
						>
							<CalendarIcon className='mr-2 h-5 w-5' />
							Schedule a Meeting
						</a>
					</div>
				</FadeIn>

				<div className='pt-8 flex justify-center'>
					<CVButton />
				</div>
			</div>
		</div>
	)
}

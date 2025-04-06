import { socialLinks } from '@/components/Layout/ContactDock'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon, MailIcon } from 'lucide-react'

export const QuickContact = () => {
	return (
		<div className='w-full relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]'>
			<section className='w-full py-20 bg-gray-100 dark:bg-zinc-900/90 text-center'>
				<div className='max-w-2xl mx-auto px-6'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white'>
						Let's get in touch
					</h2>
					<p className='text-zinc-600 dark:text-zinc-300 mb-8 text-lg'>
						Want to collaborate or have a project in mind? I’d love to hear from
						you. Feel free to contact me to discuss potential projects or
						opportunities. I'm always open to exciting new ventures.
					</p>
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
				</div>
			</section>
		</div>
	)
}

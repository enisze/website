import { FadeIn } from '@/components/FadeIn'
import { socialLinks } from '@/components/Layout/ContactDock'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarIcon, MailIcon } from 'lucide-react'
import { getT } from '@/components/i18n/getT'

export const QuickContact = async ({
	locale
}: {
	locale: string
}) => {
	const t = await getT({ locale })

	return (
		<section className='w-full py-20 bg-gray-100 dark:bg-gray-900 text-center'>
			<div className='max-w-5xl lg:mx-auto mx-8'>
				<FadeIn>
					<h2 className='text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white'>
						{t('contact.getInTouch')}
					</h2>
				</FadeIn>
				<FadeIn>
					<p className='text-zinc-600 dark:text-zinc-300 mb-8 text-lg'>
						{t('contact.collaborateText')}
					</p>
				</FadeIn>
				<FadeIn>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href={socialLinks[3].href}
							className={cn(buttonVariants({ variant: 'default' }))}
						>
							<MailIcon className='mr-2 h-5 w-5' />
							{t('contact.email')}
						</a>
						<a
							href={socialLinks[4].href}
							className={cn(buttonVariants({ variant: 'secondary' }))}
						>
							<CalendarIcon className='mr-2 h-5 w-5' />
							{t('contact.meeting')}
						</a>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}

import { FadeIn } from '@/components/FadeIn'
import { Calendar, Linkedin, Mail } from 'lucide-react'
import { getT } from '../i18n/getT'

export const Github = ({ className }: { className?: string }) => (
	<svg
		role='img'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		fill='currentColor'
	>
		<title>GitHub</title>
		<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
	</svg>
)

export const XIcon = ({ className }: { className?: string }) => (
	<svg
		role='img'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		fill='currentColor'
	>
		<title>X</title>
		<path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
	</svg>
)

export const socialLinks = [
	{
		href: 'https://www.linkedin.com/in/enis-zejnilovic-790b91146',
		icon: Linkedin,
		label: 'LinkedIn'
	},
	{
		href: 'https://github.com/enisze',
		icon: Github,
		label: 'GitHub'
	},
	{
		href: 'https://x.com/eniszej',
		icon: XIcon,
		label: 'X'
	},
	{
		href: 'mailto:enis@zejnilovic.de',
		icon: Mail,
		label: 'Email'
	},
	{
		href: 'https://cal.com/enisze/15min',
		icon: Calendar,
		label: 'Calendar'
	}
] as const

export const ContactDock = async ({
	locale
}: {
	locale: string
}) => {
	const t = await getT({ locale })

	return (
		<>
			<div className='col-span-2 pb-4'>
				<FadeIn>
					<p className='text-gray-500 dark:text-gray-400 text-md pt-14 w-full'>
						{t('contact.platformsBelow')}
					</p>
				</FadeIn>
			</div>

			<div className='h-fit flex-wrap justify-center md:justify-normal rounded-md p-2 flex items-center gap-6'>
				{socialLinks.map((social) => (
					<FadeIn key={social.href}>
						<a
							href={social.href}
							target='_blank'
							rel='noreferrer noopener'
							className='group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1'
						>
							<div className='relative'>
								<social.icon className='w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300' />
								<div className='absolute -inset-1.5 bg-black/5 dark:bg-white/20 rounded-full opacity-0 scale-100 group-hover:opacity-100 group-hover:animate-ripple-stay transition-opacity duration-300' />
							</div>
							<span className='text-xs text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors'>
								{social.label}
							</span>
						</a>
					</FadeIn>
				))}
			</div>
		</>
	)
}

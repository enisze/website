import { FadeIn } from '@/components/FadeIn'
import { Calendar, Github, Linkedin, Mail, Twitter } from 'lucide-react'

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
		icon: Twitter,
		label: 'Twitter'
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

export const ContactDock = () => (
	<>
		<div className='col-span-2 pb-4'>
			<FadeIn>
				<p className='text-gray-500 dark:text-gray-400 text-md pt-14 w-full'>
					Feel free to reach out to me on any of the platforms below.{' '}
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

import { cn } from '@/lib/utils'
import { Calendar } from 'lucide-react'

const socialLinks = [
	{
		href: 'https://www.linkedin.com/in/enis-zejnilovic-790b91146',
		icon: '/images/icons/linkedIn.svg',
		alt: 'LinkedIn',
		className: 'h-10 w-10'
	},
	{
		href: 'https://github.com/enisze',
		icon: '/images/stack/github.svg',
		alt: 'Github',
		className: 'h-10 w-10 dark:invert-0 invert'
	},
	{
		href: 'https://x.com/eniszej',
		icon: '/images/icons/x-icon.svg',
		alt: 'X',
		className: 'h-10 w-10 dark:invert'
	},
	{
		href: 'https://bsky.app/profile/zejnilovic.de',
		icon: '/images/icons/bluesky.svg',
		alt: 'Bluesky',
		className: 'h-10 w-10'
	},
	{
		href: 'mailto:enis@zejnilovic.de',
		icon: '/images/icons/mail.svg',
		alt: 'Email',
		className: 'h-10 w-10 invert-0 dark:invert'
	},
	{
		href: 'https://cal.com/enisze/15min',
		icon: 'calendar',
		alt: 'Schedule a meeting',
		className: 'h-10 w-10 text-white'
	}
]

export const ContactDock = () => (
	<div className='fixed z-50 h-fit rounded-md md:right-4 md:top-1/2 md:-translate-y-1/2 bottom-0 left-0 md:left-auto w-full md:w-auto bg-opacity-95 bg-black p-3 flex md:flex-col justify-center items-center gap-3 backdrop-blur-sm'>
		{socialLinks.map((link) => (
			<a
				key={link.href}
				href={link.href}
				target='_blank'
				rel='noreferrer noopener'
				className='w-10 h-10 flex items-center justify-center transition-transform duration-200 hover:scale-125'
			>
				{link.icon === 'calendar' ? (
					<Calendar className={cn([link.className])} />
				) : (
					<img
						src={link.icon}
						alt={link.alt}
						className={cn([link.className])}
					/>
				)}
			</a>
		))}
	</div>
)

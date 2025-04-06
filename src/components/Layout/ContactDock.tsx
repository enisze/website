import { Calendar, Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
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
]

export const ContactDock = () => (
	<div className='h-fit rounded-md p-2 flex items-center gap-6'>
		{socialLinks.map((social) => (
			<a
				key={social.label}
				href={social.href}
				target='_blank'
				rel='noreferrer noopener'
				className='group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1'
			>
				<div className='relative'>
					<social.icon className='w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300' />
					<div className='absolute -inset-2 bg-black/5 dark:bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-all duration-300 animate-ripple' />
				</div>
				<span className='text-xs text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors'>
					{social.label}
				</span>
			</a>
		))}
	</div>
)

import Link from 'next/link'
import { cn } from '../lib/utils'

export const Footer = () => (
	<footer className='space-y-2 pb-4'>
		<div className='flex justify-center gap-x-1'>
			<Link
				href='https://www.linkedin.com/in/enis-zejnilovic-790b91146'
				target='_blank'
				rel='noreferrer noopener'
				className='w-8 h-8'
			>
				<img
					src={'/images/icons/linkedIn.svg'}
					alt={'LinkedIn'}
					className={cn(['h-12 w-12'])}
				/>
			</Link>
			<Link
				href='https://github.com/enisze'
				target='_blank'
				rel='noreferrer noopener'
				className='w-8 h-8'
			>
				<img
					src={'/images/stack/github.svg'}
					alt={'Github'}
					className={cn(['h-12 w-12', 'dark:invert-0 invert'])}
				/>
			</Link>
			<Link
				href='mailto:eniszej@gmail.com'
				target='_blank'
				rel='noreferrer noopener'
				className='w-8 h-8'
			>
				<img
					src={'/images/icons/mail.svg'}
					alt={'Email'}
					className={cn(['h-12 w-12', 'invert-0 dark:invert'])}
				/>
			</Link>
		</div>

		<p className='flex justify-center'>&copy; 2023 Enis Zejnilovic</p>
	</footer>
)

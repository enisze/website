import { cn } from '@/lib/utils'

export const Footer = () => (
	<footer className='space-y-2 pb-4'>
		<div className='flex justify-center items-center gap-x-1'>
			<a
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
			</a>
			<a
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
			</a>

			<a
				href='https://x.com/eniszej'
				target='_blank'
				rel='noreferrer noopener'
				className='w-8 h-8 pt-2'
			>
				<img
					src={'/images/icons/x-icon.svg'}
					alt={'X'}
					className='dark:invert'
					// className={cn(['h-12 w-12'])}
				/>
			</a>
			<a
				href='https://bsky.app/profile/zejnilovic.de'
				target='_blank'
				rel='noreferrer noopener'
				className='w-8 h-8 pt-2'
			>
				<img
					src={'/images/icons/bluesky.svg'}
					alt={'Bluesky'}
					// className={cn(['h-12 w-12', 'dark:invert-0 invert'])}
				/>
			</a>
			<a
				href='mailto:enis@zejnilovic.de'
				target='_blank'
				rel='noreferrer noopener'
				className='w-8 h-8'
			>
				<img
					src={'/images/icons/mail.svg'}
					alt={'Email'}
					className={cn(['h-12 w-12', 'invert-0 dark:invert'])}
				/>
			</a>
		</div>

		<p className='flex justify-center'>&copy; 2024 Enis Zejnilovic</p>
	</footer>
)

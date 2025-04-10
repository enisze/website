import Link from 'next/link'
import { DownloadIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import { FadeIn } from '../FadeIn'

export const CVButton = () => (
	<div className='flex gap-2'>
		<FadeIn>
			<Link
				className={cn(buttonVariants({ variant: 'outline' }))}
				download='Enis-Zejnilovic-reference.pdf'
				href='/data/Referenz.pdf'
			>
				<DownloadIcon />
				<span className='hidden md:block'>Reference Letter</span>
				<span className='block md:hidden'>Reference</span>
			</Link>
		</FadeIn>

		<FadeIn>
			<Link
				className={cn(buttonVariants({ variant: 'outline' }))}
				download='Enis-Zejnilovic-recommendation.pdf'
				href='/data/Empfehlung.pdf'
			>
				<DownloadIcon />
				<span className='hidden md:block'>Letter of Recommendation</span>
				<span className='block md:hidden'>Recommendation</span>
			</Link>
		</FadeIn>
	</div>
)

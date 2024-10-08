import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
	projectLink?: string
}

export const ProjectLink = ({ projectLink }: Props) => {
	return (
		projectLink && (
			<Link href={projectLink ?? ''}>
				<img
					src='/images/icons/link.svg'
					alt={`Link to Project ${projectLink}`}
					className={cn([
						'h-9 w-9 rounded-full bg-white invert p-1 dark:invert-0'
					])}
				/>
			</Link>
		)
	)
}

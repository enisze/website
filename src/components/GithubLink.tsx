import { cn } from '../lib/utils'

type Props = {
	githubLink?: string
}

export const GithubLink = ({ githubLink }: Props) => {
	return (
		githubLink && (
			<a href={githubLink}>
				<img
					src='/images/stack/github.svg'
					alt={`Github Link to Project ${githubLink}`}
					className={cn([
						'h-9 w-9 invert bg-slate-950 rounded-full dark:invert-0'
					])}
				/>
			</a>
		)
	)
}

import type { HtmlHTMLAttributes, ReactNode } from 'react'

type Props = {
	className?: string
	children: ReactNode
} & HtmlHTMLAttributes<HTMLElement>

export const Paragraph = ({ className, children }: Props) => {
	return (
		<span
			className={`bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent dark:from-blue-500 dark:to-slate-500 ${className}`}
		>
			{children}
		</span>
	)
}

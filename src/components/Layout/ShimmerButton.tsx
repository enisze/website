import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import type { ButtonProps } from '../ui/button'

export const ShimmerButton = ({
	children,
	...props
}: { children: ReactNode } & ButtonProps) => (
	<button
		className={cn(
			'inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
		)}
		title={props.disabled ? `Please don't spam me!` : 'Send message'}
		{...props}
	>
		{children}
	</button>
)

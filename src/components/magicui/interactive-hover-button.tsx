import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface InteractiveHoverButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const InteractiveHoverButton = React.forwardRef<
	HTMLAnchorElement,
	InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
	return (
		<a
			ref={ref}
			className={cn(
				'group relative inline-flex w-auto cursor-pointer items-center overflow-hidden rounded-full border bg-background p-2 pr-6 pl-8 text-center font-semibold',
				className
			)}
			{...props}
		>
			<div className='flex items-center gap-2'>
				<div className='absolute left-4 h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]' />
				<span className='relative z-10 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
					{children}
				</span>
			</div>
			<div className='absolute inset-0 z-0 flex items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100'>
				<span>{children}</span>
				<ArrowRight />
			</div>
		</a>
	)
})

InteractiveHoverButton.displayName = 'InteractiveHoverButton'

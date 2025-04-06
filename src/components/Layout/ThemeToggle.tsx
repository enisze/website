'use client'
import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<Button
			variant='default'
			size='sm'
			onClick={toggleTheme}
			className='hover:bg-slate-100 dark:hover:bg-neutral-800'
		>
			<SunMedium className='rotate-0 scale-100 transition-all text-slate-600 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
			<Moon className='absolute rotate-90 scale-0 transition-all text-slate-600 hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}

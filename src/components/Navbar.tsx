'use client'
import Link from 'next/link'
import { Logo } from '../../components/logo'
import { ThemeToggle } from './Layout/ThemeToggle'

import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavBody,
	NavItems,
	Navbar as ResizableNavbar
} from '@/components/ui/resizable-navbar'
import { useState } from 'react'
import { socialLinks } from './Layout/ContactDock'
import { buttonVariants } from './ui/button'

const navItems = [
	{
		name: 'About',
		link: '/#about'
	},
	{
		name: 'Skills',
		link: '/#skills'
	},
	{
		name: 'Projects',
		link: '/#projects'
	},
	{
		name: 'Education',
		link: '/#education'
	},
	{
		name: 'Contact',
		link: '/#contact'
	}
]

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	return (
		<ResizableNavbar>
			<NavBody>
				<Link href='/' className='relative z-20 mr-4 flex'>
					<Logo className='size-14' />
				</Link>

				<NavItems items={navItems} />
				<div className='flex items-center gap-4'>
					<ThemeToggle />
					<a
						href={socialLinks[4].href}
						onClick={() => setIsMobileMenuOpen(false)}
						className={buttonVariants({
							variant: 'outline'
						})}
					>
						Book a call
					</a>
				</div>
			</NavBody>

			<MobileNav>
				<MobileNavHeader>
					<Link href='/'>
						<Logo className='size-14' />
					</Link>
					<MobileNavToggle
						isOpen={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					/>
				</MobileNavHeader>

				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}
				>
					{navItems.map((item, idx) => (
						<a
							key={`mobile-link-${idx}`}
							href={item.link}
							onClick={() => setIsMobileMenuOpen(false)}
							className='relative text-neutral-600 dark:text-neutral-300'
						>
							<span className='block'>{item.name}</span>
						</a>
					))}

					<ThemeToggle />
					<div className='flex w-full flex-col gap-4'>
						<a
							href={socialLinks[4].href}
							onClick={() => setIsMobileMenuOpen(false)}
							className={buttonVariants({
								variant: 'outline'
							})}
						>
							Book a call
						</a>
					</div>
				</MobileNavMenu>
			</MobileNav>
		</ResizableNavbar>
	)
}

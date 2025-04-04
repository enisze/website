import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '../../components/logo'
import { Item } from './Layout/Item'
import { ThemeToggle } from './Layout/ThemeToggle'
import { NavbarInstane } from './NavbarClient'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from './ui/dropdown-menu'

const menuitems = [
	{
		title: 'About',
		path: '/#about'
	},
	{
		title: 'Skills',
		path: '/#skills'
	},
	{
		title: 'Projects',
		path: '/#projects'
	},
	{
		title: 'Experience',
		path: '/#experience'
	},
	{
		title: 'Education',
		path: '/#education'
	},
	{
		title: 'Contact',
		path: '/#contact'
	}
]

export const Navbar = () => {
	return (
		<header className='flex flex-row items-center justify-between p-1 lg:my-0 fixed top-0 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-600'>
			<Logo className='size-14' />
			<Link href='/'>Enis Zejnilovic</Link>
			<div className='lg:hidden bg-inherit flex items-center gap-x-2 '>
				<ThemeToggle />
				<div className='flex lg:hidden'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' size='sm' aria-label='burger-menu'>
								<MenuIcon />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align='end'
							forceMount
							className='bg-white dark:bg-gray-900'
						>
							{menuitems.map((item, index) => {
								return (
									<DropdownMenuItem key={index}>
										<Item href={item.path}>{item.title}</Item>
									</DropdownMenuItem>
								)
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
			<ul className='absolute hidden top-16 rounded-lg lg:relative lg:top-0 right-3 lg:flex p-5 lg:rounded-b-none lg:items-center flex-col lg:flex-row lg:gap-3 items-end border-gray-200 dark:border-none border lg:border-none lg:justify-center'>
				{menuitems.map((item, index) => {
					if (item.title === 'Projects') {
						return (
							<li key={index}>
								<NavbarInstane />
							</li>
						)
					}

					return (
						<li key={index}>
							<Item href={item.path}>{item.title}</Item>
						</li>
					)
				})}
			</ul>
			<div className='hidden lg:flex'>
				<ThemeToggle />
			</div>
		</header>
	)
}

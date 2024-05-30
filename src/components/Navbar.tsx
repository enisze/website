import { MenuIcon } from 'lucide-react'
import { Item } from './Item'
import { ThemeIcon } from './ThemeIcon'

const menuitems = [
  {
    title: 'About',
    path: '/#about'
  },
  {
    title: 'Skills',
    path: '/skills'
  },
  {
    title: 'Projects',
    path: '/projects'
  },
  {
    title: 'Experience',
    path: '/experience'
  },
  {
    title: 'Education',
    path: '/education'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

export const Navbar = () => {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between p-1 lg:my-0 fixed top-0 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600'>
      <a href='/'>Enis Zejnilovic</a>
      <div className='lg:hidden bg-inherit flex items-center gap-x-2 bg-white dark:bg-gray-900'>
        <ThemeIcon />
        <div className='flex lg:hidden'>
          <MenuIcon />
        </div>
      </div>
      <ul className='absolute top-16 rounded-lg lg:relative lg:top-0 right-3 flex p-5 lg:rounded-b-none lg:items-center flex-col lg:flex-row lg:gap-3 items-end bg-white dark:bg-slate-900 border-gray-200 dark:border-none border lg:border-none lg:justify-center'>
        {menuitems.map((item, index) => (
          <li>
            <Item href={item.path}>{item.title}</Item>
          </li>
        ))}
      </ul>
      <ThemeIcon />
    </header>
  )
}

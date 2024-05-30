'use client'

import { usePathname } from 'next/navigation'
import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export const Link = (props: Props) => {
  const { href, children, ...rest } = props

  const pathname = usePathname()

  const isActive = href === pathname || (pathname === '/' && href === '/#about')

  return (
    <a className='relative group' rel='follow' {...rest}>
      <span>{children}</span>
      <span
        className={`absolute -bottom-1 left-0 w-0 h-1 duration-500 bg-blue-400 transition-all group-hover:w-full ${
          isActive && 'w-full'
        }`}
      ></span>
    </a>
  )
}

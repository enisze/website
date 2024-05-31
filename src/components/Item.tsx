import type { ReactNode } from 'react'
import { Link } from './Link'

type Props = {
  href: string
  children: ReactNode
}

export const Item = ({ href, children }: Props) => (
  <div className='p-2 lg:p-0'>
    <Link href={href}>{children}</Link>
  </div>
)

import { cn } from '../../lib/utils'
import type { StackItem } from '../stack'
type Props = {
	item: StackItem
}

export const Skill = ({ item }: Props) => {
	return (
		<a
			className='flex p-2 md:p-3 shadow-lg shadow-slate-950 rounded-lg w-[100px] md:w-32 bg-white  dark:bg-gray-900 items-center gap-2 duration-200 hover:drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] dark:hover:drop-shadow-[0_0px_20px_rgba(255,255,255,0.25)]'
			href={item.href}
			target='_blank'
			rel='noreferrer'
		>
			<img
				src={item.imgUrl}
				alt={item.label}
				className={cn([
					'h-4 w-4',
					item.baseColor === 'white' && 'invert dark:invert-0',
					item.baseColor === 'black' && 'invert-0 dark:invert'
				])}
			/>
			<p className='text-xs md:text-sm'>{item.label}</p>
		</a>
	)
}

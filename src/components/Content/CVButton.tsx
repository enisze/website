import Link from 'next/link'
import { ShimmerButton } from '../Layout/ShimmerButton'

export const CVButton = () => (
	<div className='flex gap-2'>
		{/* <ShimmerButton>
			<a download='Enis-Zejnilovic-CV.pdf' href='/data/Lebenslauf.pdf'>
				Download CV
			</a>
		</ShimmerButton> */}

		<Link download='Enis-Zejnilovic-reference.pdf' href='/data/Referenz.pdf'>
			<ShimmerButton>
				<span className='hidden md:block'>Download Reference Letter</span>
				<span className='block md:hidden'>Download Reference</span>
			</ShimmerButton>
		</Link>

		<Link
			download='Enis-Zejnilovic-recommendation.pdf'
			href='/data/Empfehlung.pdf'
		>
			<ShimmerButton>
				<span className='hidden md:block'>
					Download Letter of Recommendation
				</span>
				<span className='block md:hidden'>Download Recommendation</span>
			</ShimmerButton>
		</Link>
	</div>
)

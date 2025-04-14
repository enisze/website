import Link from 'next/link'
import { DownloadIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { FadeIn } from '../FadeIn'
import { getT } from '../i18n/getT'

export const CVButton = async ({ locale }: { locale: string }) => {
	const t = await getT({ locale })

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl'>
			<FadeIn>
				<Link
					download='Enis-Zejnilovic-reference.pdf'
					href='/data/Referenz.pdf'
				>
					<Card className='hover:shadow-md transition-shadow'>
						<CardHeader>
							<div className='flex items-center gap-2'>
								<DownloadIcon className='w-5 h-5' />
								<CardTitle className='text-lg'>
									{t('cv.referenceTitle')}
								</CardTitle>
							</div>
							<CardDescription>{t('cv.referenceDescription')}</CardDescription>
						</CardHeader>
					</Card>
				</Link>
			</FadeIn>

			<FadeIn>
				<Link
					download='Enis-Zejnilovic-recommendation.pdf'
					href='/data/Empfehlung.pdf'
				>
					<Card className='hover:shadow-md transition-shadow'>
						<CardHeader>
							<div className='flex items-center gap-2'>
								<DownloadIcon className='w-5 h-5' />
								<CardTitle className='text-lg'>
									{t('cv.recommendationTitle')}
								</CardTitle>
							</div>
							<CardDescription>
								{t('cv.recommendationDescription')}
							</CardDescription>
						</CardHeader>
					</Card>
				</Link>
			</FadeIn>
		</div>
	)
}

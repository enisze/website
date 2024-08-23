'use client'
import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { toast } from 'sonner'
import { sendMail } from './action'
import { confettiAtom, ConfettiExplosion } from './ConfettiExplosion'
import { ShimmerButton } from './ShimmerButton'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

export const ContactForm = () => {
	const setConfetti = useSetAtom(confettiAtom)
	const [isDisabled, setIsDisabled] = useState(false)

	const handleClick = () => {
		setIsDisabled(true)
		setTimeout(() => {
			setIsDisabled(false)
		}, 10000)
	}
	return (
		<section className='bg-white dark:bg-slate-900 relative h-full rounded-lg shadow-lg shadow-slate-950'>
			<div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
				<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
					Get in touch
				</h2>
				<p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
					Feel free to contact me regarding projects or if you want to chat
					about anything.
				</p>
				<form
					className='space-y-8'
					action={async (formData) => {
						const result = await sendMail(formData)
						if (result.success) {
							toast.success(
								'Your message was sent! I will get back to you asap.'
							)
							setConfetti(true)
						}
					}}
				>
					<div>
						<Label
							htmlFor='name'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Your name
						</Label>
						<Input
							type='text'
							id='name'
							name='name'
							className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
							placeholder='Your name'
							required
						/>
					</div>
					<div>
						<Label
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Your email
						</Label>
						<Input
							type='email'
							id='email'
							name='email'
							className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
							placeholder='your@name.com'
							required
						/>
					</div>
					<div className='sm:col-span-2'>
						<Label
							htmlFor='message'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
						>
							Your message
						</Label>
						<Textarea
							id='message'
							rows={6}
							name='message'
							className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Leave a comment...'
						/>
					</div>

					<ShimmerButton
						type='submit'
						onClick={handleClick}
						disabled={isDisabled}
					>
						Send message
					</ShimmerButton>

					<ConfettiExplosion />
				</form>
			</div>
		</section>
	)
}

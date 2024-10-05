import { ContactForm } from '../components/ContactForm'
import { Heading } from '../components/Layout/Heading'

export const Contact = async () => {
	return (
		<section className='space-y-4 scroll-m-20' id='contact'>
			<Heading>Contact</Heading>
			<ContactForm />
		</section>
	)
}

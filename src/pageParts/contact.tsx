import { ContactForm } from '../components/ContactForm'
import { Heading } from '../components/Heading'

export const Contact = async () => {
	//   const defaultClient = Brevo.ApiClient.instance
	//   const data = await request.formData()
	//   const name = data.get('name')
	//   const email = data.get('email')
	//   const message = data.get('message')

	//   if (!name || !email || !message) {
	//     console.log('Missing data', { name, email, message })
	//   }
	//   if (name && email && message) {
	//     // Configure API key authorization: api-key
	//     const apiKey = defaultClient.authentications['api-key']
	//     apiKey.apiKey = import.meta.env.EMAIL_API_KEY

	//     const apiInstance = new Brevo.TransactionalEmailsApi()

	//     const sendSmtpEmail = new Brevo.SendSmtpEmail()

	//     sendSmtpEmail.sender = {
	//       name,
	//       email
	//     }
	//     sendSmtpEmail.to = [{ name: 'Enis', email: 'eniszej@gmail.com' }]
	//     sendSmtpEmail.subject = `Hello, ${name} is on your Website`
	//     sendSmtpEmail.textContent = message

	//     apiInstance.sendTransacEmail(sendSmtpEmail)
	//   }

	return (
		<section className='space-y-4 scroll-m-20' id='contact'>
			<Heading>Contact</Heading>
			<ContactForm />
		</section>
	)
}

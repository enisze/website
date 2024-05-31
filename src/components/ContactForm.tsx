import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { toast } from 'sonner'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const options: SMTPTransport.Options = {
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: 'eniszej@gmail.com',
    pass: process.env.BREVO_SMTP_PASS
  }
}
const transporter = nodemailer.createTransport(options)

export const ContactForm = () => (
  <section className='bg-white dark:bg-slate-900 relative h-full rounded-lg shadow-lg shadow-slate-950'>
    <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
      <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
        Get in touch
      </h2>
      <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
        Feel free to contact me regarding projects or if you want to chat about
        anything.
      </p>
      <form
        className='space-y-8'
        action={async (formData) => {
          'use server'

          const name = formData.get('name')
          const email = formData.get('email')
          const message = formData.get('message')

          if (!name || !email || !message) {
            toast.error('Please fill out all fields')
          }

          if (name && email && message) {
            transporter.sendMail({
              from: `"${name}" ${email.toString()}`,
              sender: email.toString(),
              text: message.toString(),
              to: 'eniszej@gmail.com'
            })
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
        <button
          type='submit'
          className='border py-3 px-5 text-sm font-medium text-center dark:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        >
          Send message
        </button>
      </form>
    </div>
  </section>
)

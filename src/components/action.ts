'use server'

import nodemailer from 'nodemailer'
import type SMTPTransport from "nodemailer/lib/smtp-transport"

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

export const sendMail = async (formData: FormData) => {

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    if (name && email && message) {
        transporter.sendMail({
            from: `"${name}" ${email.toString()}`,
            sender: email.toString(),
            text: message.toString(),
            to: 'eniszej@gmail.com',
            subject: 'New message from your portfolio'
        })
    }

    return { success: true }
}



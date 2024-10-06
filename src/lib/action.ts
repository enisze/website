'use server'

import nodemailer from 'nodemailer'
import type SMTPTransport from "nodemailer/lib/smtp-transport"
import { z } from 'zod'
import { createServerAction } from 'zsa'

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

export const sendEmailAction = createServerAction()
    .input(
        z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string()
        }),
        {
            type: "formData",
        }
    )
    .handler(async ({ input: {
        email, message, name

    } }) => {

        transporter.sendMail({
            from: `"${name}" ${email}`,
            sender: email,
            text: `
            Name: ${name}
            Email: ${email} 
            Message: \n
            ${message.toString()}`,
            to: 'enis@zejnilovic.de',
            subject: `New message from your portfolio from ${email}`
        })

        return { success: true }
    })






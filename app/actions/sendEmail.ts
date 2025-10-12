'use server'

import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'


// initialize resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email") as string
 
    const message = formData.get("message") as string
    const name = formData.get("name") as string


    if (!email ||  !message || !name) {
        return { error: "All fields are required" }
    }

    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['phyoheinway@gmail.com'],
           subject:"Project",
            react: EmailTemplate({ Name: name,Email: email, Message: message }),
        })

        return { success: true, data }
    } catch (error) {
        console.error(error)
        return { error: "Failed to send email" }
    }
}

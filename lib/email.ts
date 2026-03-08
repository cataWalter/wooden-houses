import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? 'dummy')
}

interface ContactEmailPayload {
  name: string
  email: string
  phone?: string
  message: string
  subject?: string
}

interface QuoteEmailPayload extends ContactEmailPayload {
  houseTitle: string
  houseSlug: string
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { name, email, phone, message, subject } = payload

  return getResend().emails.send({
    from: 'Wooden Houses <noreply@woodenhouses.com>',
    to: [process.env.CONTACT_EMAIL ?? 'contact@woodenhouses.com'],
    subject: subject ?? `New contact message from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  })
}

export async function sendQuoteEmail(payload: QuoteEmailPayload) {
  const { name, email, phone, message, houseTitle, houseSlug } = payload

  return getResend().emails.send({
    from: 'Wooden Houses <noreply@woodenhouses.com>',
    to: [process.env.CONTACT_EMAIL ?? 'contact@woodenhouses.com'],
    subject: `Quote request: ${houseTitle} from ${name}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>House:</strong> <a href="https://woodenhouses.com/houses/${houseSlug}">${houseTitle}</a></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  })
}

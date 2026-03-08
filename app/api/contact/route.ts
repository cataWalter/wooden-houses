import { NextResponse } from 'next/server'
import { sendContactEmail, sendQuoteEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, name, email, phone, message, subject, houseTitle, houseSlug } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (type === 'quote') {
      await sendQuoteEmail({ name, email, phone, message, houseTitle, houseSlug })
    } else {
      await sendContactEmail({ name, email, phone, message, subject })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

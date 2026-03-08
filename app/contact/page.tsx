import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team for a free consultation or to request a quote for your wooden house.',
}

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Get in Touch</h1>
        <p className="text-stone-500 text-lg max-w-xl">
          Whether you have a question, want to discuss your project, or are ready to order — 
          we'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-bold text-stone-900 text-xl mb-4">Our Office</h2>
            <ul className="space-y-3 text-stone-600">
              <li className="flex gap-3">
                <span>🏔</span>
                <div>
                  <div className="font-medium">Wooden Houses Ltd</div>
                  <div className="text-sm text-stone-500">123 Forest Road<br />Alpine Valley, AT-6020</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span>📧</span>
                <a href="mailto:hello@woodenhouses.com" className="hover:text-amber-700 transition-colors">
                  hello@woodenhouses.com
                </a>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <a href="tel:+431234567890" className="hover:text-amber-700 transition-colors">
                  +43 1234 567 890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-stone-900 text-xl mb-4">Office Hours</h2>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-medium">08:00 – 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">09:00 – 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-stone-400">Closed</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h3 className="font-bold text-stone-800 mb-2">Free Consultation</h3>
            <p className="text-stone-600 text-sm">
              We offer free 30-minute consultations for anyone considering a wooden house project. 
              Book yours by calling or emailing us — no commitment required.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

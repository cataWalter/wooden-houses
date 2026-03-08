'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-bold text-green-800 text-xl mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for reaching out. We'll get back to you within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-stone-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-stone-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-stone-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full border border-stone-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="How can we help?"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">Message *</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-stone-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          rows={5}
          placeholder="Tell us about your project or question..."
        />
      </div>
      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-amber-700 hover:bg-amber-800 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors text-lg"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

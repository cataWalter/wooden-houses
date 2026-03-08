'use client'

import { useState } from 'react'

interface QuoteFormProps {
  houseTitle: string
  houseSlug: string
}

export default function QuoteForm({ houseTitle, houseSlug }: QuoteFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, houseTitle, houseSlug, type: 'quote' }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-3">🎉</div>
        <h3 className="font-bold text-green-800 text-lg mb-2">Quote Request Sent!</h3>
        <p className="text-green-700 text-sm">
          Thank you for your interest in the <strong>{houseTitle}</strong>. 
          We'll be in touch within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
      <h3 className="font-bold text-stone-800 text-xl mb-1">Request a Quote</h3>
      <p className="text-stone-500 text-sm mb-5">
        Interested in the <strong className="text-stone-700">{houseTitle}</strong>? 
        Fill out the form and we'll prepare a personalised quote for you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Phone (optional)</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Message (optional)</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            rows={3}
            placeholder="Tell us about your plot, timeline, or any specific requirements..."
          />
        </div>
        {status === 'error' && (
          <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-amber-700 hover:bg-amber-800 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {status === 'loading' ? 'Sending…' : 'Send Quote Request'}
        </button>
      </form>
    </div>
  )
}

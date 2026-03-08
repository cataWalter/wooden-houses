import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Wooden Houses — our story, our craftsmanship, and our commitment to sustainable building.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
          alt="Wooden house in nature"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">Our Story</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Our Mission</h2>
          <div className="prose prose-stone max-w-none text-lg">
            <p>
              Founded in 2008, Wooden Houses was born from a simple belief: that everyone deserves a 
              beautiful, healthy home that treads lightly on the planet. We combine centuries of 
              timber craftsmanship with modern engineering to create homes that are built to last 
              generations.
            </p>
            <p>
              Every house we build starts with a conversation. We want to understand your plot, 
              your lifestyle, and your vision. Then our team of architect-designers and master 
              carpenters gets to work — crafting a home that fits you perfectly.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🌲',
                title: 'Sustainable Forestry',
                desc: 'Every plank we use comes from FSC-certified forests. For every tree we use, we support planting three more. We believe in leaving the world greener than we found it.',
              },
              {
                icon: '🔨',
                title: 'Master Craftsmanship',
                desc: 'Our team of skilled carpenters and joiners has collectively over 200 years of experience. We never cut corners — every joint is hand-checked before leaving our workshop.',
              },
              {
                icon: '🏡',
                title: 'Made to Order',
                desc: 'We do not build houses speculatively. Every house is made for a specific customer and plot. This means we can customise every aspect to your needs.',
              },
              {
                icon: '🌿',
                title: 'Long-term Thinking',
                desc: 'We design houses to last 100+ years. Our timber treatment systems and construction methods ensure your home will be passed down through generations.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-stone-800 text-lg mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Our Process</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Consultation', desc: 'We start with a free consultation — by phone, video, or in person — to understand your project and answer your questions.' },
              { step: '02', title: 'Design & Quote', desc: 'Our design team prepares a detailed proposal with floor plans, elevations, specifications, and a fixed price.' },
              { step: '03', title: 'Manufacturing', desc: 'Once approved, we manufacture all components in our workshop to exact tolerances. Lead time is typically 10–14 weeks.' },
              { step: '04', title: 'Assembly', desc: 'Our experienced assembly crews deliver and erect your house on-site. Most houses are fully assembled and weathertight within 1–2 weeks.' },
              { step: '05', title: 'Handover', desc: 'After final inspection and snag-list completion, we hand you the keys — and remain available for warranty queries for 10 years.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">{title}</h3>
                  <p className="text-stone-500 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-3">Ready to Start Your Project?</h2>
          <p className="text-stone-500 mb-6">
            Browse our house models or get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/houses"
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Browse Houses
            </Link>
            <Link
              href="/contact"
              className="border border-stone-300 hover:border-stone-400 text-stone-700 px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

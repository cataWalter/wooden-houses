import Image from 'next/image'
import Link from 'next/link'
import { getAllHouses } from '@/lib/mdx'
import HouseCard from '@/components/HouseCard'

export default function HomePage() {
  const allHouses = getAllHouses()
  const featuredHouses = allHouses.filter((h) => h.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
            alt="Beautiful wooden house in nature"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Live Closer to<br />
            <span className="text-amber-400">Nature</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Beautifully crafted wooden houses, made to order from sustainably sourced timber. 
            Find your perfect retreat — from intimate cabins to spacious family lodges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/houses"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Browse Houses →
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-amber-700 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '150+', label: 'Houses Built' },
            { value: '15+', label: 'Years Experience' },
            { value: '12', label: 'Countries' },
            { value: '100%', label: 'FSC Certified Timber' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold">{value}</div>
              <div className="text-amber-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured houses */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Featured Models</h2>
            <p className="text-stone-500 mt-2">Our most popular wooden house designs</p>
          </div>
          <Link href="/houses" className="text-amber-700 hover:text-amber-800 font-medium hidden sm:block">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHouses.map((house) => (
            <HouseCard key={house.slug} house={house} />
          ))}
        </div>
        <div className="text-center mt-10 sm:hidden">
          <Link href="/houses" className="text-amber-700 hover:text-amber-800 font-medium">
            View all houses →
          </Link>
        </div>
      </section>

      {/* Why wooden section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Why Choose a Wooden House?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: '🌿',
                    title: 'Sustainable',
                    desc: 'Wood is the only truly renewable building material. Our timber is 100% FSC-certified.',
                  },
                  {
                    icon: '❤️',
                    title: 'Healthy Living',
                    desc: 'Wood naturally regulates humidity and has proven benefits for wellbeing and sleep quality.',
                  },
                  {
                    icon: '⚡',
                    title: 'Fast to Build',
                    desc: 'Prefabricated panels mean your house can be assembled in days, not months.',
                  },
                  {
                    icon: '💰',
                    title: 'Cost Efficient',
                    desc: 'Lower construction costs and excellent insulation values mean long-term savings.',
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <h3 className="font-semibold text-stone-800">{title}</h3>
                      <p className="text-stone-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                About Our Process →
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1000&q=80"
                alt="Wooden house interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-stone-400 text-lg mb-8">
            Browse our collection or contact us for a personalised consultation. 
            Every house is made to order — we can customise any model to suit your plot and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/houses"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Browse Houses
            </Link>
            <Link
              href="/contact"
              className="border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

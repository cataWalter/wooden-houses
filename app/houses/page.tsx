import type { Metadata } from 'next'
import { getAllHouses } from '@/lib/mdx'
import HouseCard from '@/components/HouseCard'

export const metadata: Metadata = {
  title: 'House Catalogue',
  description: 'Browse our full collection of wooden house models. From intimate forest cabins to spacious family lodges.',
}

export default function HousesPage() {
  const houses = getAllHouses()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">House Catalogue</h1>
        <p className="text-stone-500 text-lg max-w-2xl">
          Explore our collection of hand-crafted wooden home models. Every house is made to order 
          and can be customised to suit your plot and requirements.
        </p>
      </div>

      {houses.length === 0 ? (
        <p className="text-stone-500">No houses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <HouseCard key={house.slug} house={house} />
          ))}
        </div>
      )}
    </div>
  )
}

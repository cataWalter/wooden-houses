import Image from 'next/image'
import Link from 'next/link'
import type { House } from '@/lib/mdx'

interface HouseCardProps {
  house: House
}

export default function HouseCard({ house }: HouseCardProps) {
  return (
    <Link href={`/houses/${house.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-100">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={house.thumbnail}
          alt={house.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {house.featured && (
          <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-stone-900 text-xl mb-1 group-hover:text-amber-700 transition-colors">
          {house.title}
        </h3>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">{house.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-sm text-stone-600">
            <span>🛏 {house.bedrooms} bed</span>
            <span>🚿 {house.bathrooms} bath</span>
            <span>📐 {house.area}</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="font-bold text-amber-700 text-lg">{house.price}</span>
          <span className="text-stone-500 text-sm group-hover:text-amber-700 transition-colors">
            View details →
          </span>
        </div>
      </div>
    </Link>
  )
}

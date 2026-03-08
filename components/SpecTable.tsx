import type { House } from '@/lib/mdx'

interface SpecTableProps {
  house: House
}

export default function SpecTable({ house }: SpecTableProps) {
  const specs = [
    { label: 'Price', value: house.price },
    { label: 'Floor Area', value: house.area },
    { label: 'Bedrooms', value: `${house.bedrooms}` },
    { label: 'Bathrooms', value: `${house.bathrooms}` },
  ]

  return (
    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
      <h3 className="font-bold text-stone-800 text-lg mb-4">Specifications</h3>
      <dl className="space-y-3">
        {specs.map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center py-2 border-b border-stone-200 last:border-0">
            <dt className="text-stone-500 text-sm">{label}</dt>
            <dd className="font-semibold text-stone-800">{value}</dd>
          </div>
        ))}
      </dl>
      {house.tags && house.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {house.tags.map((tag) => (
            <span key={tag} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

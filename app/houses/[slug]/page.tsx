import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllHouses, getHouseBySlug } from '@/lib/mdx'
import PhotoGallery from '@/components/PhotoGallery'
import SpecTable from '@/components/SpecTable'
import QuoteForm from '@/components/QuoteForm'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const houses = getAllHouses()
  return houses.map((h) => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const house = getHouseBySlug(slug)
  if (!house) return {}
  return {
    title: house.title,
    description: house.description,
    openGraph: {
      images: [house.thumbnail],
    },
  }
}

export default async function HouseDetailPage({ params }: PageProps) {
  const { slug } = await params
  const house = getHouseBySlug(slug)
  if (!house) notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-stone-500 mb-8">
        <a href="/houses" className="hover:text-stone-700">Houses</a>
        <span className="mx-2">/</span>
        <span className="text-stone-900">{house.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: gallery + content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">{house.title}</h1>
            <p className="text-stone-500 text-lg">{house.description}</p>
          </div>

          <PhotoGallery images={house.gallery} title={house.title} />

          {/* MDX content rendered as plain HTML */}
          <article className="prose prose-stone max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: house.content
                  .replace(/^#{1}\s+.+$/gm, '') // remove h1 (already in page header)
                  .replace(/^#{2}\s+(.+)$/gm, '<h2>$1</h2>')
                  .replace(/^#{3}\s+(.+)$/gm, '<h3>$1</h3>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  .replace(/^-\s+(.+)$/gm, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^(?!<[hulu]|<\/[hlu])(.+)/gm, '$1'),
              }}
            />
          </article>
        </div>

        {/* Right: specs + quote form */}
        <div className="space-y-6">
          {/* Price */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-amber-700 mb-1">{house.price}</div>
            <p className="text-stone-500 text-sm">Starting price — includes delivery & assembly</p>
          </div>

          <SpecTable house={house} />
          <QuoteForm houseTitle={house.title} houseSlug={house.slug} />
        </div>
      </div>
    </div>
  )
}

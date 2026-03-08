'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PhotoGalleryProps {
  images: string[]
  title: string
}

export default function PhotoGallery({ images, title }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images || images.length === 0) return null

  return (
    <>
      {/* Main image */}
      <div className="relative h-96 md:h-[520px] rounded-2xl overflow-hidden cursor-zoom-in bg-stone-100" onClick={() => setLightboxOpen(true)}>
        <Image
          src={images[activeIndex]}
          alt={`${title} — photo ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 800px"
          priority
        />
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
        <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          🔍 Click to enlarge
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeIndex ? 'border-amber-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-stone-300 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-stone-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i - 1 + images.length) % images.length)
            }}
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} — photo ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-stone-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((i) => (i + 1) % images.length)
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

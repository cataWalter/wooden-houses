import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Wooden Houses — Beautiful Sustainable Timber Homes',
    template: '%s | Wooden Houses',
  },
  description:
    'Discover our collection of beautifully crafted wooden houses. Sustainable, durable, and stunning — made to order from sustainably sourced timber.',
  keywords: ['wooden houses', 'timber homes', 'sustainable housing', 'prefab wooden house', 'log cabin'],
  openGraph: {
    type: 'website',
    siteName: 'Wooden Houses',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

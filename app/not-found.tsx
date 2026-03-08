import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">🏡</div>
        <h1 className="text-4xl font-bold text-stone-900 mb-3">Page Not Found</h1>
        <p className="text-stone-500 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/houses"
            className="border border-stone-300 hover:border-stone-400 text-stone-700 px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Browse Houses
          </Link>
        </div>
      </div>
    </div>
  )
}

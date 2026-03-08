import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about wooden houses, sustainable living, construction tips, and more.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Blog</h1>
        <p className="text-stone-500 text-lg">
          Articles about wooden houses, sustainable living, and everything in between.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-stone-500">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-bold text-stone-900 text-xl mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-stone-400">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

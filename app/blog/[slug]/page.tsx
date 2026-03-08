import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.thumbnail] },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-stone-500 mb-8">
        <Link href="/blog" className="hover:text-stone-700">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-900">{post!.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex gap-2 flex-wrap mb-4">
          {post!.tags.map((tag) => (
            <span key={tag} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          {post!.title}
        </h1>
        <div className="flex items-center gap-4 text-stone-500 text-sm">
          <span>By {post!.author}</span>
          <span>•</span>
          <time dateTime={post!.date}>
            {new Date(post!.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-10">
        <Image
          src={post!.thumbnail}
          alt={post!.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose prose-stone prose-lg max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: post!.content
              .replace(/^#{1}\s+.+$/gm, '')
              .replace(/^#{2}\s+(.+)$/gm, '<h2>$1</h2>')
              .replace(/^#{3}\s+(.+)$/gm, '<h3>$1</h3>')
              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
              .replace(/^-\s+(.+)$/gm, '<li>$1</li>')
              .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
              .replace(/\n\n/g, '</p><p>')
              .replace(/^(?!<[hula]|<\/[hul])(.+)/gm, '$1'),
          }}
        />
      </div>

      {/* Back link */}
      <div className="mt-12 pt-8 border-t border-stone-200">
        <Link href="/blog" className="text-amber-700 hover:text-amber-800 font-medium">
          ← Back to Blog
        </Link>
      </div>
    </article>
  )
}

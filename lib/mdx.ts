import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const housesDir = path.join(process.cwd(), 'content/houses')
const blogDir = path.join(process.cwd(), 'content/blog')

export interface House {
  slug: string
  title: string
  price: string
  area: string
  bedrooms: number
  bathrooms: number
  description: string
  thumbnail: string
  gallery: string[]
  featured: boolean
  tags: string[]
  content: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  thumbnail: string
  tags: string[]
  content: string
}

export function getAllHouses(): House[] {
  const files = fs.readdirSync(housesDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      return getHouseBySlug(slug)!
    })
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
}

export function getHouseBySlug(slug: string): House | null {
  const filePath = path.join(housesDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? '',
    price: data.price ?? '',
    area: data.area ?? '',
    bedrooms: data.bedrooms ?? 1,
    bathrooms: data.bathrooms ?? 1,
    description: data.description ?? '',
    thumbnail: data.thumbnail ?? '',
    gallery: data.gallery ?? [],
    featured: data.featured ?? false,
    tags: data.tags ?? [],
    content,
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      return getBlogPostBySlug(slug)!
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    author: data.author ?? '',
    excerpt: data.excerpt ?? '',
    thumbnail: data.thumbnail ?? '',
    tags: data.tags ?? [],
    content,
  }
}

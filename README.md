# 🏡 Wooden Houses — Project Documentation

A website for showcasing and selling wooden houses. This is a **showcase + lead generation** platform focused on stunning visuals, excellent SEO, and easy content management — with no database or payment processing required.

---

## 🎯 Business Context

Selling wooden houses is a **high-value, low-volume** business. Key priorities:

- **Stunning visuals** — galleries, floor plans, high-quality photography
- **SEO** — organic search is critical for this niche
- **Fast load times** — performance directly impacts conversions
- **Easy content management** — add/edit house models and blog posts via files
- **Lead capture** — quote requests and contact forms

---

## 🏗 Technical Stack

### Architecture Overview

```
Frontend (Next.js 15)
    ├── Content Layer (MDX files + frontmatter)
    ├── Media (Cloudinary CDN)
    ├── Hosting (Vercel)
    └── Email (Resend)
```

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15 (App Router) | Framework — SSG/SSR, image optimization, routing |
| **React** | 19 | UI library with Server Components support |
| **Tailwind CSS** | 4 | Utility-first CSS, responsive design |
| **Framer Motion** | latest | Animations — galleries, page transitions, hover effects |
| **Embla Carousel** | latest | Lightweight accessible photo carousels |
| **TypeScript** | 5 | Type safety throughout the entire codebase |

### Content Layer

| Technology | Purpose |
|---|---|
| **MDX files** | Each house model, blog post, and page is an `.mdx` file stored in the repo. Content is version-controlled via Git — no database needed. |
| **`@next/mdx`** or **`next-mdx-remote`** | Parses MDX at build time into static pages |
| **`gray-matter`** | Parses YAML frontmatter (title, price, specs, images) from MDX files |

**Example house content file** (`content/houses/alpine-retreat.mdx`):

```mdx
---
title: "Alpine Retreat"
slug: "alpine-retreat"
price: "€45,000"
area: "85 m²"
bedrooms: 2
thumbnail: "/images/houses/alpine-retreat/hero.jpg"
gallery:
  - "/images/houses/alpine-retreat/1.jpg"
  - "/images/houses/alpine-retreat/2.jpg"
featured: true
---

# Alpine Retreat

A cozy 85 m² wooden house perfect for mountain living...

<SpecTable />
<PhotoGallery />
```

### Media

| Technology | Purpose |
|---|---|
| **Cloudinary** | Image hosting with automatic optimization, responsive resizing, and CDN delivery. Free tier: 25 GB storage + 25 GB bandwidth/month. |

### Infrastructure

| Technology | Purpose |
|---|---|
| **Vercel** | Hosting — first-class Next.js support, automatic preview deployments from Git, edge caching for static pages |
| **Resend** | Email API — sends notifications when someone submits a quote request or contact form |

---

## 📁 Project Structure

```
wooden-houses/
├── app/
│   ├── layout.tsx                # Root layout (Header, Footer)
│   ├── page.tsx                  # Home page
│   ├── houses/
│   │   ├── page.tsx              # House catalog
│   │   └── [slug]/
│   │       └── page.tsx          # Individual house detail page
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts          # API route — sends email via Resend
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HouseCard.tsx             # Card used in catalog listing
│   ├── PhotoGallery.tsx          # Full-screen image gallery
│   ├── SpecTable.tsx             # House specifications table
│   ├── QuoteForm.tsx             # Request a quote form
│   └── ContactForm.tsx           # General contact form
├── content/
│   ├── houses/                   # One MDX file per house model
│   │   ├── alpine-retreat.mdx
│   │   └── forest-cabin.mdx
│   └── blog/                     # MDX blog posts
│       └── why-wooden-houses.mdx
├── lib/
│   ├── mdx.ts                    # MDX parsing utilities (getAllHouses, getHouseBySlug, etc.)
│   └── email.ts                  # Resend email integration
├── public/
│   └── images/                   # Static assets (fallback images, icons, etc.)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 🗺 Site Map

```
Home
├── House Catalog
│   └── House Detail Page
│       ├── Photo Gallery
│       ├── Specifications & Floor Plan
│       └── Request a Quote Form
├── About
├── Blog
│   └── Blog Post (SEO-optimized articles)
└── Contact
    └── Contact Form + Map
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- A [Cloudinary](https://cloudinary.com) account (free tier)
- A [Resend](https://resend.com) account (free tier)
- A [Vercel](https://vercel.com) account (free tier)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/wooden-houses.git
cd wooden-houses

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with the following:

```env
# Resend (email)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=your@email.com

# Cloudinary (media)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (via CLI)
npx vercel --prod
```

---

## ✏️ Content Management

### Adding a New House

1. Create a new `.mdx` file in `content/houses/`:

```bash
touch content/houses/my-new-house.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My New House"
slug: "my-new-house"
price: "€55,000"
area: "100 m²"
bedrooms: 3
thumbnail: "https://res.cloudinary.com/your-cloud/image/upload/v1/houses/my-new-house/hero.jpg"
gallery:
  - "https://res.cloudinary.com/your-cloud/image/upload/v1/houses/my-new-house/1.jpg"
  - "https://res.cloudinary.com/your-cloud/image/upload/v1/houses/my-new-house/2.jpg"
featured: false
---

Describe your house here...
```

3. Upload images to Cloudinary and update the URLs in the frontmatter.
4. Commit and push — Vercel will automatically rebuild and deploy.

### Adding a Blog Post

Same process — create a new `.mdx` file in `content/blog/`.

---

## 🧰 Key Design Decisions

| Decision | Rationale |
|---|---|
| **No database** | Content volume is low (dozens of house models, not thousands). MDX files in Git are simpler, faster, and free. |
| **No payments** | Sales happen offline (high-value consultative process). The site captures leads, not transactions. |
| **Static generation (SSG)** | All house and blog pages are pre-rendered at build time — maximum performance and SEO. |
| **MDX over a headless CMS** | Keeps the stack simple. Content is version-controlled alongside code. No external CMS subscription needed. |
| **Cloudinary for media** | Automatic image optimization and CDN delivery without managing an image server. |

---

## 📦 Dependencies Summary

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@next/mdx": "latest",
    "next-mdx-remote": "latest",
    "gray-matter": "^4.0.3",
    "framer-motion": "latest",
    "embla-carousel-react": "latest",
    "resend": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "latest",
    "@types/react": "latest",
    "tailwindcss": "^4.0.0"
  }
}
```

---

## 📄 License

MIT

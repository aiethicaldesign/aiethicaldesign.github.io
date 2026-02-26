import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getNewsItem, getAllSlugs } from '@/lib/news'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getNewsItem(slug)

  if (!item) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/news">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {'Back to News'}
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          {item.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span>{item.author}</span>
          <span aria-hidden>{'·'}</span>
          <span>{'Last updated on ' + item.date}</span>
          <span aria-hidden>{'·'}</span>
          <span>{item.readTime}</span>
        </div>

        {item.image && (
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8 bg-primary/5">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: item.contentHtml ?? '' }}
        />
      </div>
    </main>
  )
}

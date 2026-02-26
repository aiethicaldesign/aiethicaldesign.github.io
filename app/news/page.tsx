import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, Users, FileText, Lightbulb, Calendar, Globe } from 'lucide-react'
import { getAllNewsItems } from '@/lib/news'

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  News: Newspaper,
  Research: Users,
  Publication: FileText,
  Project: Lightbulb,
  Workshop: Calendar,
  Event: Users,
  Upcoming: Globe,
}

export default function NewsPage() {
  const newsItems = getAllNewsItems()

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {'Latest News'}
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            {'Updates from our research, events, and collaborations'}
          </p>
        </div>

        <div className="divide-y">
          {newsItems.map((item) => {
            const Icon = typeIcons[item.type] ?? Newspaper
            return (
              <article key={item.slug} className="py-8 first:pt-0">
                <Link href={`/news/${item.slug}`} className="group flex gap-6 md:gap-8">
                  <div className="hidden sm:block flex-shrink-0 w-[150px] h-[100px] md:w-[200px] md:h-[134px] relative rounded-md overflow-hidden bg-primary/5">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary/30" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-secondary transition-colors text-balance leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-base text-muted-foreground mb-3 line-clamp-2 text-pretty">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{item.author}</span>
                      <span aria-hidden>{'·'}</span>
                      <span>{'Last updated on ' + item.date}</span>
                      <span aria-hidden>{'·'}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}

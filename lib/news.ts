import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const newsDirectory = path.join(process.cwd(), 'content/news')

export interface NewsItem {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readTime: string
  type: string
  image?: string
  contentHtml?: string
}

export function getAllNewsItems(): NewsItem[] {
  const fileNames = fs.readdirSync(newsDirectory)
  const items = fileNames
    .filter((name) => name.endsWith('.md') && !name.startsWith('_') && name !== 'README.md')
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(newsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        readTime: data.readTime,
        type: data.type,
        image: data.image,
      } as NewsItem
    })

  // Sort by date, newest first
  items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return items
}

export async function getNewsItem(slug: string): Promise<NewsItem | undefined> {
  const fullPath = path.join(newsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return undefined

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    readTime: data.readTime,
    type: data.type,
    image: data.image,
    contentHtml,
  }
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(newsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md') && !name.startsWith('_') && name !== 'README.md')
    .map((name) => name.replace(/\.md$/, ''))
}

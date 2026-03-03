import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, Video, Download, Play, ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ResourceItem = {
  title: string
  type: string
  href?: string
  external?: boolean
}

type ResourceSection = {
  category: string
  id: string
  icon: LucideIcon
  items: ResourceItem[]
}

const resources: ResourceSection[] = [
  {
    category: 'Design Principles',
    id: 'design-principles',
    icon: BookOpen,
    items: [
      { title: 'AI Ethics Principles for Children', type: 'Image', href: '/resources/ai_ethics_principles_for_children.webp' },
      { title: 'Framework for Designing Children\'s Agency', type: 'File', href: 'https://github.com/junszhao/ethical-design/blob/main/docs/',external: true }
    ]
  },
  {
    category: 'Research Publications',
    id: 'research-publications',
    icon: FileText,
    items: [
      { title: 'Challenges and Opportunities in Translating Ethical AI Principles into Practice for Children', type: 'Paper', href: '/resources/wang2024challenges.pdf'},
      { title: '12 Ways to Empower: Designing for Children\'s Digital Autonomy', type: 'Paper', href: '/resources/wang2023twelve.pdf'},
      { title: 'Co-designing with Children to Cope with Datafication Online', type: 'Paper', href: '/resources/wang2023treat.pdf' },
      { title: 'CHAITok: A Proof-of-Concept System Supporting Children\'s Sense of Data Autonomy on Social Media', type: 'Paper', href: '/resources/wang2024chaitok.pdf' }
    ]
  },
  {
    category: 'Case Studies',
    id: 'case-studies',
    icon: FileText,
    items: [
      {
        title: 'A child-centred AI ecosystem to transform early year education',
        type: 'GitHub Repo & Figma',
        href: 'https://github.com/junszhao/ethical-design/tree/main/case_studies/case%20study%200',
        external: true
      },
      { title: 'A child-centred system to support children with special education needs', 
        type: 'GitHub Repo & Figma', 
        href: 'https://github.com/junszhao/ethical-design/tree/main/case_studies/case%20study%201', 
        external: true
      },
      { title: 'A child-centred system to help parents support children\'s social emotion learning', 
        type: 'GitHub Repo & Figma', 
        href: 'https://github.com/junszhao/ethical-design/tree/main/case_studies/case%20study%202', 
        external: true
      }
    ]
  },
  {
    category: 'Educational Materials',
    id: 'educational-materials',
    icon: Download,
    items: [
      { title: 'Design for Agency Curriculum Package', type: 'GitHub Repo & Figma', href: 'https://github.com/junszhao/ethical-design', external: true },
      { title: 'Workshop Facilitation Material', type: 'GitHub Repo & Figma', href: 'https://github.com/junszhao/ethical-design/tree/main/workshop_material', external: true }
    ]
  }
]

export function ResourceGrid() {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {resources.map((resource) => {
          const Icon = resource.icon
          return (
            <Card key={resource.id} id={resource.id} className="p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{resource.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {resource.items.map((item, i) => {
                  const ActionIcon = resource.category === 'Case Studies' ? FileText : item.external ? ExternalLink : Download

                  return (
                  <li key={i} className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.type}</div>
                    </div>
                    {item.href ? (
                      <Button asChild variant="ghost" size="sm">
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${item.title}`}
                          >
                            <ActionIcon className="w-4 h-4" />
                          </a>
                        ) : (
                          <a href={item.href} download aria-label={`Download ${item.title}`}>
                            <ActionIcon className="w-4 h-4" />
                          </a>
                        )}
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" aria-label={`Download ${item.title}`} disabled>
                        <ActionIcon className="w-4 h-4" />
                      </Button>
                    )}
                  </li>
                  )
                })}
              </ul>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

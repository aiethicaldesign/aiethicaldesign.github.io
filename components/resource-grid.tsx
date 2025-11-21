import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, Video, Download } from 'lucide-react'

const resources = [
  {
    category: 'Design Principles',
    icon: BookOpen,
    items: [
      { title: 'Agency and Growth Framework', type: 'PDF' },
      { title: 'Fairness and Inclusion Guidelines', type: 'PDF' },
      { title: 'Transparency and Accountability Toolkit', type: 'PDF' }
    ]
  },
  {
    category: 'Research Publications',
    icon: FileText,
    items: [
      { title: 'YouTube Video Recommendations Study', type: 'Paper' },
      { title: 'TikTok Data Autonomy Research', type: 'Paper' },
      { title: 'Digital Parenting Opportunities', type: 'Paper' }
    ]
  },
  {
    category: 'Case Studies',
    icon: Video,
    items: [
      { title: 'Implementing RLS in Ed-Tech', type: 'Video' },
      { title: 'Agency by Design Workshop', type: 'Video' },
      { title: 'Policy Maker Roundtable', type: 'Recording' }
    ]
  },
  {
    category: 'Educational Materials',
    icon: Download,
    items: [
      { title: 'Classroom Curriculum Package', type: 'ZIP' },
      { title: 'Workshop Facilitation Guide', type: 'PDF' },
      { title: 'Presentation Templates', type: 'PPTX' }
    ]
  }
]

export function ResourceGrid() {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {resources.map((resource, index) => {
          const Icon = resource.icon
          return (
            <Card key={index} className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{resource.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {resource.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.type}</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

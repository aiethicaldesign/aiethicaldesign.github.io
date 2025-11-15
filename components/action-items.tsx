import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const actions = [
  {
    title: 'Read Our Latest Research',
    description: 'Explore our most recent publications on agency by design and digital parenting',
    link: '#'
  },
  {
    title: 'Attend Upcoming Workshop',
    description: 'Join our next interactive session on implementing ethical AI principles',
    link: '#'
  },
  {
    title: 'Download Design Toolkit',
    description: 'Get our comprehensive guide to child-centered AI design',
    link: '#'
  },
  {
    title: 'Partner With Us',
    description: 'Explore collaboration opportunities for your organization',
    link: '#'
  }
]

export function ActionItems() {
  return (
    <section className="bg-card rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {'Take Action Now'}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{action.title}</h3>
            <p className="mb-4 leading-relaxed text-pretty">{action.description}</p>
            <Button variant="outline" className="w-full">
              {action.link === '#' ? 'Coming Soon' : 'Learn More'} <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}

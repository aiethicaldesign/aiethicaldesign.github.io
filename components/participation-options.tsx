import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FlaskConical, Clipboard, MessageSquare, Heart, FileText, Share2 } from 'lucide-react'

const options = [
  {
    icon: FlaskConical,
    title: 'Contribute to Research',
    description: 'Participate in ongoing research studies or propose new research collaborations. Work with our team on cutting-edge AI ethics projects.',
    action: 'Learn More'
  },
  {
    icon: Clipboard,
    title: 'Test Curriculum & Toolkits',
    description: 'Help us pilot educational materials and design toolkits. Provide feedback on our frameworks and testing methodologies.',
    action: 'Join Pilot Studies'
  },
  {
    icon: MessageSquare,
    title: 'Join Workshops & Discussions',
    description: 'Attend our regular workshops, roundtables, and online discussions. Engage with experts and peers in the field.',
    action: 'View Schedule'
  },
  {
    icon: Heart,
    title: 'Share Your Story',
    description: 'Tell us about your experiences with AI and children. Help us understand real-world challenges and successes.',
    action: 'Submit Story'
  },
  {
    icon: FileText,
    title: 'Access Resources',
    description: 'Download our research papers, design principles, case studies, and implementation guides.',
    action: 'Browse Resources'
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    description: 'Help raise awareness about ethical AI design for children. Share our mission with your network.',
    action: 'Get Materials'
  }
]

export function ParticipationOptions() {
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        {'Ways to Participate'}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option, index) => {
          const Icon = option.icon
          return (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="leading-relaxed mb-4 flex-grow text-pretty">
                {option.description}
              </p>
              <Button variant="outline" className="w-full">
                {option.action}
              </Button>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

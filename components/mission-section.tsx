import { Briefcase, Scale, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'

const missions = [
  {
    icon: Briefcase,
    title: 'Externalise agency in the design',
    description: 'Understand how designers conceptualise and apply agency in practice.'
  },
  {
    icon: Users,
    title: 'Cocreate practical design support',
    description: 'Co-create a practical toolkit to support agency-oriented design'
  },
  {
    icon: Scale,
    title: 'Evaluate and reflection',
    description: 'Evaluate how this toolkit integrates with and strengthens existing design processes '
  },
]

export function MissionSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {'Our mission'}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {'We aim to cretae a systematic and practical process of supporting designers thinking about and applying designing for agency.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{mission.title}</h3>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6 text-pretty">
                  {mission.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { GraduationCap, Briefcase, Scale, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'

const stakeholders = [
  {
    icon: GraduationCap,
    title: 'Academics & Researchers',
    description: 'Collaborate on groundbreaking research in child-centered AI design. Access our research network and contribute to publications.',
    benefits: ['Research partnerships', 'Co-authorship opportunities', 'Data sharing protocols']
  },
  {
    icon: Briefcase,
    title: 'Industry Practitioners',
    description: 'Implement ethical AI principles in real-world products. Get access to our design frameworks and testing methodologies.',
    benefits: ['Design toolkits', 'Industry workshops', 'Beta testing programs']
  },
  {
    icon: Scale,
    title: 'Policy Makers & Regulators',
    description: 'Inform policy with evidence-based research. Participate in roundtables and contribute to regulatory frameworks.',
    benefits: ['Policy briefs', 'Expert consultations', 'Regulatory insights']
  },
  {
    icon: Users,
    title: 'Educators',
    description: 'Access curriculum and teaching resources. Help pilot educational programs that promote digital literacy for children.',
    benefits: ['Teaching materials', 'Professional development', 'Classroom pilots']
  }
]

export function StakeholderSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {'Who We Work With'}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {'Our multidisciplinary approach brings together diverse stakeholders to create meaningful change'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{stakeholder.title}</h3>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-6 text-pretty">
                  {stakeholder.description}
                </p>
                <ul className="space-y-2">
                  {stakeholder.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

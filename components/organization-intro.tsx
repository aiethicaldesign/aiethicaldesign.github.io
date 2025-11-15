import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function OrganizationIntro() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {'Oxford Child-Centred AI'}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-pretty">
              {'The Oxford Child-Centred AI (OxfordCCAI) Design Lab engages in research activities aimed at designing better AI for children. We are part of the Human-Centred Computing research theme at the Department of Computer Science at the University of Oxford.'}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-pretty">
              {'We collaborate with organizations both in the UK and internationally to examine the ways that AI impacts children\'s experiences and their digital rights, and how we can design technologies fostering children\'s rights and agency.'}
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="https://oxfordccai.org/" target="_blank" rel="noopener noreferrer">
                {'Learn More About OxfordCCAI'} <ExternalLink className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'4+'}</div>
              <div className="text-lg">{'Research Themes'}</div>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'50+'}</div>
              <div className="text-lg">{'Global Partners'}</div>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'100+'}</div>
              <div className="text-lg">{'Publications'}</div>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">{'20+'}</div>
              <div className="text-lg">{'Active Projects'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

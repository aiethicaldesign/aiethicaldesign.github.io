import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CHAIIntro() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {'The Designing for Children’s Agency in AI (CHAI) framework'}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-pretty">
              {'CHAI is a conceptual framework designed to support structured reasoning about children’s agency throughout the design process. It makes assumptions and trade-offs explicit and connects abstract ethical values to concrete system functions. '}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-pretty">
              {'It contains a four-step reasoning process, including agency assessment, mapping, application, and reflection, supported by an agency conceptualisation framework and an agency mapping matrix.'}
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/junszhao/ethical-design" target="_blank" rel="noopener noreferrer">
                {'Learn More About CHAI'} <ExternalLink className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-muted p-6 rounded-xl">
              <img
                src="/four_types_of_agency.PNG"
                alt="The agency conceptualisation"
                className="w-full h-full object-cover"
              />

            </div>
            <div className="bg-muted p-6 rounded-xl">
              <img
                src="/three_levels_of_agency.png"
                alt="The agency mapping matrix"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

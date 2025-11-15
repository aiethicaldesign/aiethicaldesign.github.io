import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          {'Ready to Make a Difference?'}
        </h2>
        <p className="text-xl leading-relaxed mb-8 text-pretty">
          {'Join researchers, practitioners, policy makers, and educators working together to build ethical AI systems that protect and empower children.'}
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link href="/get-involved">
            {'Get Involved Today'} <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

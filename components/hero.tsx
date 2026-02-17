import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <img
          src="/diverse-children-using-tablets-and-digital-devices.jpg"
          alt="Children engaging with technology"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              {'Designing AI That Protects Our Children'}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-pretty max-w-2xl">
              {'Every child deserves technology that respects their agency, protects their wellbeing, and amplifies their voice. Join us in shaping the future of ethical AI design.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/resources">{'Explore Resources'}</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/young-child-looking-thoughtfully-at-screen-with-ge.jpg"
                alt="Child-centered AI design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-3 bg-card p-5 rounded-xl shadow-xl max-w-md border-2">
              <p className="text-lg font-semibold text-balance" style={{ color: '#c5e5dd' }}>
                <Link href="https://www.nature.com/articles/s41586-024-07270-x" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {'"Children\'s distinct rights and needs demand far more than general AI principles. They require a truly child-centred approach."'}
                </Link>
              </p>
              <p className="text-sm mt-2" style={{ color: '#c5e5dd' }}>
                {'Dr. Jun Zhao, Principal Investigator'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

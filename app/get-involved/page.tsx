import { ParticipationOptions } from '@/components/participation-options'
import { TestimonialSection } from '@/components/testimonial-section'
import { SignupForm } from '@/components/signup-form'

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {'Join Our Mission'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {'Together, we can build ethical AI systems that protect and empower children in the digital age'}
          </p>
        </div>
        
        <ParticipationOptions />
        <TestimonialSection />
        <SignupForm />
      </div>
    </main>
  )
}

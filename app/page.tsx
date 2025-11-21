import { Hero } from '@/components/hero'
import { OrganizationIntro } from '@/components/organization-intro'
import { HighlightsCarousel } from '@/components/highlights-carousel'
import { StakeholderSection } from '@/components/stakeholder-section'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <OrganizationIntro />
      <HighlightsCarousel />
      <StakeholderSection />
      <CTASection />
    </main>
  )
}

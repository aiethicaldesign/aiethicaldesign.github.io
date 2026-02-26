import { Hero } from '@/components/hero'
import { OrganizationIntro } from '@/components/organization-intro'
import { StakeholderSection } from '@/components/stakeholder-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <OrganizationIntro />
      <StakeholderSection />
    </main>
  )
}

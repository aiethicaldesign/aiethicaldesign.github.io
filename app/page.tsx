import { Hero } from '@/components/hero'
import { OrganizationIntro } from '@/components/organization-intro'
import { StakeholderSection } from '@/components/stakeholder-section'
import { MissionSection } from '@/components/mission-section'
import { CHAIIntro } from '@/components/chai-framework'

export default function Home() {
  return (
    <main>
      <Hero />
      <OrganizationIntro />
      <StakeholderSection />
      <MissionSection />
      <CHAIIntro />
    </main>
  )
}

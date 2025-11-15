'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <section className="max-w-3xl mx-auto">
      <Card className="p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {'Sign Up to Get Involved'}
          </h2>
          <p className="text-lg text-pretty">
            {'Join our community and stay updated on research opportunities, workshops, and resources'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{'Name *'}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{'Email *'}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">{'Organization'}</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="border-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">{'Your Role *'}</Label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
              className="w-full p-3 rounded-md border-2 border-input bg-background"
            >
              <option value="">{'Select your role...'}</option>
              <option value="academic">{'Academic/Researcher'}</option>
              <option value="industry">{'Industry Practitioner'}</option>
              <option value="policy">{'Policy Maker/Regulator'}</option>
              <option value="educator">{'Educator'}</option>
              <option value="other">{'Other'}</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">{'Areas of Interest'}</Label>
            <textarea
              id="interests"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              rows={4}
              className="w-full p-3 rounded-md border-2 border-input bg-background"
              placeholder="Tell us what you're interested in..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full text-lg py-6">
            {'Submit'}
          </Button>
        </form>
      </Card>
    </section>
  )
}

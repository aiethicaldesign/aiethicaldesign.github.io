'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Calendar, Newspaper, Users, ChevronLeft, ChevronRight, FileText, Lightbulb, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  {
    type: 'News',
    icon: Newspaper,
    title: 'Agency Interview with Fam',
    description: 'Dr. Jun Zhao discusses the concept of agency in AI design for children, exploring how technology can empower rather than diminish children\'s autonomy and decision-making capabilities.',
    date: 'Recent',
    link: '#'
  },
  {
    type: 'Research',
    icon: Users,
    title: 'Working with EG Finalist on Design for Children\'s Agency Framework',
    description: 'Collaborating with EG competition finalists to develop a comprehensive framework that centers children\'s agency in AI system design.',
    date: 'In Progress',
    link: '#'
  },
  {
    type: 'Publication',
    icon: FileText,
    title: 'Design for Agency Paper Submitted to IEEE',
    description: 'New research paper exploring design principles for fostering children\'s agency in AI systems has been submitted to IEEE for peer review.',
    date: 'August 2025',
    link: '#'
  },
  {
    type: 'Project',
    icon: Lightbulb,
    title: 'Parent Bench: Enabling Ethical Evaluation of LLM for Supporting Parenting',
    description: 'Launching Parent Bench, a framework for evaluating large language models designed to support parents in their digital parenting journey ethically and effectively.',
    date: 'Current',
    link: '#'
  },
  {
    type: 'Workshop',
    icon: Calendar,
    title: 'Co-leading Oxford Edge Early Childhood Hackathon',
    description: 'Promoting ethical innovation in early childhood technology through collaborative hackathon focused on child-centered design principles.',
    date: 'Recent',
    link: '#'
  },
  {
    type: 'Upcoming',
    icon: Globe,
    title: 'OECD Digital Wellbeing & UNICEF Digital Parent Tech Assessment',
    description: 'Contributing to OECD\'s measurement of children\'s digital wellbeing and UNICEF\'s assessment of digital parent technology.',
    date: 'Upcoming',
    link: '#'
  },
  {
    type: 'Event',
    icon: Users,
    title: 'Co-organizing Generation AI Summit',
    description: 'Bringing together global leaders, researchers, and practitioners to address the critical challenges of AI design for the next generation.',
    date: 'Upcoming',
    link: '#'
  }
]

export function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length)
  }

  const current = highlights[currentIndex]
  const Icon = current.icon

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {'Latest Updates'}
        </h2>
        
        <Card className="p-8 md:p-12 relative overflow-hidden min-h-[320px]">
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors z-10"
            aria-label="Previous highlight"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors z-10"
            aria-label="Next highlight"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div className="flex items-start gap-6">
            <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  {current.type}
                </span>
                <span className="text-sm text-muted-foreground">{current.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                {current.title}
              </h3>
              <p className="text-lg leading-relaxed text-pretty">
                {current.description}
              </p>
              <Button variant="outline">{'Read More'}</Button>
            </div>
          </div>

          <div className="flex gap-2 justify-center mt-8">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to highlight ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

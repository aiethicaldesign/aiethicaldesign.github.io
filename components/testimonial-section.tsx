import { Card } from '@/components/ui/card'

const testimonials = [
  {
    quote: "Working with OxfordCCAI has transformed how we think about AI design. Their frameworks are practical and deeply rooted in children's rights.",
    name: 'Dr. Sarah Chen',
    role: 'Research Lead, Tech Institute',
    image: '/professional-asian-woman-researcher-smiling.jpg'
  },
  {
    quote: 'The workshops provided invaluable insights that we immediately applied to our product development. Our users have noticed the difference.',
    name: 'Marcus Johnson',
    role: 'Product Manager, EdTech Company',
    image: '/professional-black-businessman.png'
  },
  {
    quote: 'As an educator, these resources have been game-changing. My students are now more aware of their digital rights and agency.',
    name: 'Elena Rodriguez',
    role: 'Middle School Teacher',
    image: '/professional-latina-woman-teacher-smiling.jpg'
  }
]

export function TestimonialSection() {
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        {'Voices from Our Community'}
      </h2>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-pretty">
        {'Hear from researchers, practitioners, and educators who are making a difference'}
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
            <p className="leading-relaxed text-pretty italic">
              {`"${testimonial.quote}"`}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}

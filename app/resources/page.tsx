import { ResourceGrid } from '@/components/resource-grid'

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {'Resources'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-pretty">
            {'Access research, toolkits, and frameworks to implement ethical AI design principles'}
          </p>
        </div>
        
        <ResourceGrid />
      </div>
    </main>
  )
}

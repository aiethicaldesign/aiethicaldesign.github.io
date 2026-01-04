import { Card } from '@/components/ui/card'

export function SignupForm() {
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

        <div className="w-full overflow-hidden rounded-lg border-2 border-input bg-background">
          <iframe
            title="Sign Up to Get Involved"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=G96VzPWXk0-0uv5ouFLPke7IRsYPG-tFi0SNgHRsZ8lURVlYR1lTSzMzUDVXSVdMU1NCMEQ5MUFNWC4u&embed=true"
            width="640px"
            height="480px"
            className="w-full h-[480px]"
            frameBorder="0"
            marginWidth={0}
            marginHeight={0}
            style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
            allowFullScreen
          />
        </div>
      </Card>
    </section>
  )
}

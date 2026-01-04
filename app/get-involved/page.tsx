export default function GetInvolvedPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)]">
      <div className="w-full h-[calc(100vh-5rem)]">
        <div className="w-full h-full overflow-hidden bg-background">
          <iframe
            title="Sign Up to Get Involved"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=G96VzPWXk0-0uv5ouFLPke7IRsYPG-tFi0SNgHRsZ8lURVlYR1lTSzMzUDVXSVdMU1NCMEQ5MUFNWC4u&embed=true"
            width="100%"
            height="100%"
            className="w-full h-full"
            frameBorder="0"
            marginWidth={0}
            marginHeight={0}
            style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
            allowFullScreen
          />
        </div>
      </div>
    </main>
  )
}

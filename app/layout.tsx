import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#C5E5DC',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'AI Ethical Design - Building Child-Centered AI Systems',
  description: 'Join researchers, practitioners, policy makers, and educators in creating ethical AI systems that protect and empower children. Part of Oxford Child-Centred AI Design Lab.',
  keywords: 'AI ethics, child-centered design, digital rights, children safety, AI research, Oxford CCAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{'AI Ethical Design'}</h3>
            <p className="text-sm leading-relaxed text-pretty">
              {'Building ethical AI systems that protect and empower children'}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{'Quick Links'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary">{'Home'}</Link></li>
              <li><Link href="/get-involved" className="hover:text-secondary">{'Get Involved'}</Link></li>
              <li><Link href="/resources" className="hover:text-secondary">{'Resources'}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{'Research'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary">{'Design Principles'}</a></li>
              <li><a href="#" className="hover:text-secondary">{'Case Studies'}</a></li>
              <li><a href="https://oxfordccai.org/publication/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">{'Full Publication List'}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{'Partners'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://5rightsfoundation.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary flex items-center gap-1">
                  {'5Rights Foundation'} <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://education.lego.com/en-gb/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary flex items-center gap-1">
                  {'LEGO Education'} <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://famstudio.co/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary flex items-center gap-1">
                  {'FAM Studio'} <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{'© 2025 AI Ethical Design. Part of Oxford Child-Centred AI Design Lab.'}</p>
        </div>
      </div>
    </footer>
  )
}

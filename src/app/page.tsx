import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/landing/Hero'
import { Stats } from '@/components/landing/Stats'
import { Features } from '@/components/landing/Features'
import { CTA } from '@/components/landing/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      {/* Background blobs for premium feel */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-instagram/10 rounded-full blur-[160px] animate-pulse delay-1000" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
